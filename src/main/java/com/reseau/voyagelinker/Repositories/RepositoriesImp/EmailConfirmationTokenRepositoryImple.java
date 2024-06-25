package com.reseau.voyagelinker.Repositories.RepositoriesImp;

import com.reseau.voyagelinker.Models.EmailConfirmationToken;
import com.reseau.voyagelinker.Repositories.EmailConfirmationTokenRepository;
import com.reseau.voyagelinker.Repositories.UserRepository;
import lombok.AllArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@AllArgsConstructor
public class EmailConfirmationTokenRepositoryImple {

    private final EmailConfirmationTokenRepository confirmationTokenRepository;
    private final UserRepository userRepository;
    public EmailConfirmationToken save(EmailConfirmationToken emailConfirmationToken) {
        UUID id;
        if((emailConfirmationToken.getUser() == null)) {
            throw new IllegalStateException("user id is required");
        }

        if(userRepository.findById(emailConfirmationToken.getUser()).isEmpty()) {
            throw new IllegalStateException("the id is invalid");
        }

        if(emailConfirmationToken.getToken().isEmpty()){
            throw new IllegalStateException("the toke is required");
        }

        if(userRepository.findById(emailConfirmationToken.getUser()).get().isEnabled()){
            throw new IllegalStateException("the account is already active");
        }

        do{
            id = UUID.randomUUID();
        }while (confirmationTokenRepository.findById(id).isPresent());

        emailConfirmationToken.setId(id);
        return confirmationTokenRepository.save(emailConfirmationToken);
    }
}
