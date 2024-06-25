package com.reseau.voyagelinker.Services;


import com.reseau.voyagelinker.Config.JwtService;
import com.reseau.voyagelinker.Models.EmailConfirmationToken;
import com.reseau.voyagelinker.Models.User;
import com.reseau.voyagelinker.Repositories.EmailConfirmationTokenRepository;
import com.reseau.voyagelinker.Repositories.RepositoriesImp.EmailConfirmationTokenRepositoryImple;
import com.reseau.voyagelinker.Repositories.RepositoriesImp.UserRepositoryImp;
import com.reseau.voyagelinker.Repositories.UserRepository;
import com.reseau.voyagelinker.auth.AuthenticationRequest;
import com.reseau.voyagelinker.auth.AuthenticationResponse;
import com.reseau.voyagelinker.auth.RegisterRequest;
import com.reseau.voyagelinker.mail.EmailSender;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Objects;
import java.util.concurrent.CompletableFuture;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final UserRepositoryImp repositoryImp;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final EmailValidator emailValidator;
    private final EmailSender emailSender;
    private final EmailConfirmationTokenRepository emailConfirmationTokenRepository;
    private final EmailConfirmationTokenRepositoryImple emailConfirmationTokenRepositoryImple;

    @Transactional
    public String confirmToken(String token) {

        EmailConfirmationToken emailConfirmationToken = emailConfirmationTokenRepository.findByToken(token);
        if(Objects.isNull(emailConfirmationToken) || !token.equals(emailConfirmationToken.getToken())){
            throw new IllegalStateException("token is not valid");
        }


        // Activer le compte de l'utilisateur
        User user = repository.findById(emailConfirmationToken.getUser()).orElseThrow(() -> new IllegalStateException("user was not find"));
        user.setEnabled(true);
        repository.save(user);
        emailConfirmationTokenRepository.deleteById(emailConfirmationToken.getId());
        // Générer un nouveau JWT pour l'utilisateur
        return jwtService.generateToken(user);
    }

    public AuthenticationResponse register(RegisterRequest request) {
        boolean isValidEmail = emailValidator.test(request.getEmail());
        if(!isValidEmail){
            throw new IllegalStateException("email is not valid");
        }

        var user = User.builder()
                .name(request.getName())
                .surname(request.getSurname())
                .dob(request.getDob())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .tel(request.getTel())
                .enabled(false)
                .build();

        repositoryImp.save(user);

        var jwtToken = jwtService.generateTokenRegister(user);
        EmailConfirmationToken emailConfirmationToken = new EmailConfirmationToken();
        emailConfirmationToken.setToken(jwtToken);
        emailConfirmationToken.setToken(jwtToken);
        emailConfirmationToken.setTimeStamp(LocalDateTime.now());
        emailConfirmationToken.setUser(user.getId());
        emailConfirmationTokenRepositoryImple.save(emailConfirmationToken);

        String link = "http://localhost:5173/confirm-email?token="+jwtToken;
        CompletableFuture.runAsync(() -> {
            emailSender.send(request.getEmail(), buildEmail(request.getName()+request.getSurname(), link));
        });

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .success(Boolean.TRUE)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        System.out.println("Start authentication");

        System.out.println("Looking up user");
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow(() -> {
                    System.out.println("User not found");
                    return new UsernameNotFoundException("User not found");
                });
        System.out.println(passwordEncoder.encode(request.getPassword())+" " +user.getPassword());
        System.out.println(passwordEncoder.matches(request.getPassword(), user.getPassword()));
        if(passwordEncoder.matches(request.getPassword(), passwordEncoder.encode(request.getPassword()))) {

            System.out.println("User found");

            var jwtToken = jwtService.generateToken(user);
            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .success(Boolean.TRUE)
                    .build();
        }else {
            throw new IllegalStateException("Bad credentials");
        }
    }

    private String buildEmail(String name, String link) {
        return "<div style=\"font-family:Helvetica,Arial,sans-serif;font-size:16px;margin:0;color:#0b0c0c\">\n" +
                "\n" +
                "<span style=\"display:none;font-size:1px;color:#fff;max-height:0\"></span>\n" +
                "\n" +
                "  <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;min-width:100%;width:100%!important\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"100%\" height=\"53\" bgcolor=\"#0b0c0c\">\n" +
                "        \n" +
                "        <table role=\"presentation\" width=\"100%\" style=\"border-collapse:collapse;max-width:580px\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\">\n" +
                "          <tbody><tr>\n" +
                "            <td width=\"70\" bgcolor=\"#0b0c0c\" valign=\"middle\">\n" +
                "                <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td style=\"padding-left:10px\">\n" +
                "                  \n" +
                "                    </td>\n" +
                "                    <td style=\"font-size:28px;line-height:1.315789474;Margin-top:4px;padding-left:10px\">\n" +
                "                      <span style=\"font-family:Helvetica,Arial,sans-serif;font-weight:700;color:#ffffff;text-decoration:none;vertical-align:top;display:inline-block\">Confirm your email</span>\n" +
                "                    </td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "              </a>\n" +
                "            </td>\n" +
                "          </tr>\n" +
                "        </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td width=\"10\" height=\"10\" valign=\"middle\"></td>\n" +
                "      <td>\n" +
                "        \n" +
                "                <table role=\"presentation\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse\">\n" +
                "                  <tbody><tr>\n" +
                "                    <td bgcolor=\"#1D70B8\" width=\"100%\" height=\"10\"></td>\n" +
                "                  </tr>\n" +
                "                </tbody></table>\n" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\" height=\"10\"></td>\n" +
                "    </tr>\n" +
                "  </tbody></table>\n" +
                "\n" +
                "\n" +
                "\n" +
                "  <table role=\"presentation\" class=\"m_-6186904992287805515content\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"border-collapse:collapse;max-width:580px;width:100%!important\" width=\"100%\">\n" +
                "    <tbody><tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "      <td style=\"font-family:Helvetica,Arial,sans-serif;font-size:19px;line-height:1.315789474;max-width:560px\">\n" +
                "        \n" +
                "            <p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\">Hi " + name + ",</p><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\"> Thank you for registering. Please click on the below link to activate your account: </p><blockquote style=\"Margin:0 0 20px 0;border-left:10px solid #b1b4b6;padding:15px 0 0.1px 15px;font-size:19px;line-height:25px\"><p style=\"Margin:0 0 20px 0;font-size:19px;line-height:25px;color:#0b0c0c\"> <a href=\"" + link + "\">Activate Now</a> </p></blockquote>\n Link will expire in 15 minutes. <p>See you soon</p>" +
                "        \n" +
                "      </td>\n" +
                "      <td width=\"10\" valign=\"middle\"><br></td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "      <td height=\"30\"><br></td>\n" +
                "    </tr>\n" +
                "  </tbody></table><div class=\"yj6qo\"></div><div class=\"adL\">\n" +
                "\n" +
                "</div></div>";
    }

}
