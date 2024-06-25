package com.reseau.voyagelinker.Repositories.RepositoriesImp;

import com.reseau.voyagelinker.Models.User;
import com.reseau.voyagelinker.Repositories.UserRepository;
import com.reseau.voyagelinker.Services.EmailValidator;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
@AllArgsConstructor
public class UserRepositoryImp {
    private final UserRepository userRepository;
    private final EmailValidator emailValidator;

    @Transactional
    public User save(User user) {
        if(user.getEmail().isEmpty() && Objects.isNull(user.getTel())) {
            throw new IllegalArgumentException("Email or tel is required");
        }
        if(!emailValidator.test(user.getEmail())) {
            throw new IllegalStateException("email is not valid");
        }
        if(userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new IllegalArgumentException("Email already exists!");
        }
        if(userRepository.findByTel(user.getTel()).isPresent()) {
            throw new IllegalArgumentException("tel already exists!");
        }
        UUID id;
        do {
            id = UUID.randomUUID();
        } while (userRepository.findById(id).isPresent());
        user.setId(id);
        user.setPassword(user.getPassword());
        return userRepository.save(user);
    }

    @Transactional
    public List<User> saveAll(List<User> users) {
        return users.stream()
                .map(
                        user -> save(user)
                ).toList();
    }


}
