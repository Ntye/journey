package com.reseau.voyagelinker.Services;


import com.reseau.voyagelinker.Exception.EmailNotFoundException;
import com.reseau.voyagelinker.Models.User;
import com.reseau.voyagelinker.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository repository) {
        this.userRepository = repository;
    }

    @Override
    public User loadUserByEmail(String email) throws EmailNotFoundException {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new EmailNotFoundException("User with email " + email + " not found"));
    }

    @Transactional
    @Override
    public Optional<User> fincUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
