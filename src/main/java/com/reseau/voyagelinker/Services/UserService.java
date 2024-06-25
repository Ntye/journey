package com.reseau.voyagelinker.Services;

import com.reseau.voyagelinker.Exception.EmailNotFoundException;
import com.reseau.voyagelinker.Models.User;

import java.util.Optional;

public interface UserService {
    User loadUserByEmail(String email) throws EmailNotFoundException;
    Optional<User> fincUserByEmail(String email);
}

