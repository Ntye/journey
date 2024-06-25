package com.reseau.voyagelinker.Models;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.cassandra.core.mapping.CassandraType;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.UUID;

@Getter
@Setter
@Builder
@AllArgsConstructor
@Table("user")
public class User implements UserDetails {

    @PrimaryKey
    @CassandraType(type = CassandraType.Name.UUID)
    private UUID id;

    private String name;

    private String surname;

    private LocalDateTime dob;

    private String email;
    private Long tel;
    private SEXE sexe;

    private String password;
    private boolean enabled;


    public User() {
    }

    public User(String name, String surname, LocalDateTime dob, String email, Long tel, SEXE sexe, String password, boolean enabled) {
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.email = email;
        this.tel = tel;
        this.sexe = sexe;
        this.password = password;
        this.enabled = enabled;
    }

    public User(String name, String surname, String email, Long tel, String password, boolean enabled) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.tel = tel;
        this.password = password;
        this.enabled = enabled;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", dob=" + dob +
                ", email='" + email + '\'' +
                ", tel=" + tel +
                ", password='" + password + '\'' +
                ", enabled=" + enabled +
                '}';
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
}

