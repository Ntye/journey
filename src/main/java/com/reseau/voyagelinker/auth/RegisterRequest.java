package com.reseau.voyagelinker.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String name;

    private String surname;

    private LocalDateTime dob;

    private String email;
    private Long tel;

    private String password;
    private boolean enabled;

}
