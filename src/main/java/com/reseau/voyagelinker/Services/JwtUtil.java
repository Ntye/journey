package com.reseau.voyagelinker.Services;

import com.reseau.voyagelinker.Config.JwtService;
import com.reseau.voyagelinker.Models.User;
import com.reseau.voyagelinker.Repositories.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Component
@Service
public class JwtUtil {
    private final JwtService jwtService;
    private final UserRepository userRepository;

    public JwtUtil(JwtService jwtService, UserRepository userRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }

    public String extractauthHeader(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String jwt = authHeader.substring(7);
            return jwtService.extractEmail(jwt);
        }
        return null;
    }

    public User extractUser(HttpServletRequest request) {

        String email = extractauthHeader(request);
        Optional<User> user = userRepository.findByEmail(email);
        return user.orElse(null);
    }
    public UUID extractUserUUID(HttpServletRequest request) {
        String userName = extractauthHeader(request);
        Optional<User> user = userRepository.findByEmail(userName);

        return user.map(User::getId).orElse(null);
    }
    public String extractUsername(HttpServletRequest request) {
        String userName = extractauthHeader(request);
        Optional<User> user = userRepository.findByEmail(userName);

        return user.map(User::getUsername).orElse(null);
    }

}

