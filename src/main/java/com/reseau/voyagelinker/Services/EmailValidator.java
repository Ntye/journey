package com.reseau.voyagelinker.Services;

import org.springframework.stereotype.Service;

import java.util.function.Predicate;
import java.util.regex.Pattern;

@Service
public class EmailValidator implements Predicate<String> {

    // Regular expression pattern for validating email addresses
    private static final Pattern EMAIL_PATTERN = Pattern.compile(
            "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$"
    );

    @Override
    public boolean test(String email) {
        // If the email is null, it's automatically invalid
        if (email == null) {
            return false;
        }

        // Check if the email matches the regex pattern
        return EMAIL_PATTERN.matcher(email).matches();
    }
}

