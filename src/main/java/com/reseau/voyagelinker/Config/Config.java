package com.reseau.voyagelinker.Config;


import com.reseau.voyagelinker.Models.SEXE;
import com.reseau.voyagelinker.Models.User;
import com.reseau.voyagelinker.Models.Voyage;
import com.reseau.voyagelinker.Repositories.RepositoriesImp.UserRepositoryImp;
import com.reseau.voyagelinker.Repositories.RepositoriesImp.VoyageRepositoryImp;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class Config {
    private final PasswordEncoder passwordEncoder;

    public Config(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Bean
    CommandLineRunner commandLineRunner(UserRepositoryImp userRepositoryImp, VoyageRepositoryImp voyageRepositoryImp) {
        return args -> {
            User user1 = new User(
                    "Shadow",
                    "Walker",
                    LocalDate.of(2004,Month.OCTOBER,19).atStartOfDay(),
                    "franklin4kamga@gmail.com",
                    658945407L,
                    SEXE.HOMME,
                    passwordEncoder.encode("#19102004davy"),
                    true);
            User user2 = new User(
                    "Shadow",
                    "Walker",
                    LocalDate.of(2004,Month.OCTOBER,19).atStartOfDay(),
                    "franklindavykamgacheuko@gmail.com",
                    681818045L,
                    SEXE.FEMME,
                    passwordEncoder.encode("#19102004davy"),
                    true);
            userRepositoryImp.saveAll(List.of(user1,user2));


            Voyage voyage1 = new Voyage(
                    user1.getId(),
                    0,
                    "yaounde",
                    "Douala",
                    "mvan",
                    "deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage2 = new Voyage(
                    user2.getId(),
                    2,
                    "douala",
                    "yaounde",
                    "deido",
                    "Mvan",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage3 = new Voyage(
                    user2.getId(),
                    2,
                    "Yaounde",
                    "Douala",
                    "Mvan",
                    "Deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage4 = new Voyage(
                    user2.getId(),
                    3,
                    "Yaounde",
                    "Douala",
                    "Mvan",
                    "Deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage5 = new Voyage(
                    user2.getId(),
                    2,
                    "Yaounde",
                    "Douala",
                    "nkoabang",
                    "Deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage6 = new Voyage(
                    user2.getId(),
                    2,
                    "Yaounde",
                    "Douala",
                    "emana",
                    "Deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage7 = new Voyage(
                    user2.getId(),
                    2,
                    "Yaounde",
                    "Douala",
                    "messassi",
                    "Deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage8 = new Voyage(
                    user2.getId(),
                    2,
                    "Yaounde",
                    "Douala",
                    "etoudi",
                    "Deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage9 = new Voyage(
                    user2.getId(),
                    2,
                    "Yaounde",
                    "Douala",
                    "fougerol",
                    "Deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage10 = new Voyage(
                    user2.getId(),
                    3,
                    "Yaounde",
                    "Douala",
                    "omnisport",
                    "Deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage11 = new Voyage(
                    user2.getId(),
                    3,
                    "Yaounde",
                    "Douala",
                    "mokolo",
                    "Deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage12 = new Voyage(
                    user2.getId(),
                    3,
                    "Yaounde",
                    "Douala",
                    "education",
                    "Deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage13 = new Voyage(
                    user1.getId(),
                    3,
                    "Yaounde",
                    "Douala",
                    "olembe",
                    "Deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage14 = new Voyage(
                    user1.getId(),
                    2,
                    "Yaounde",
                    "Douala",
                    "odja",
                    "Deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage15 = new Voyage(
                    user1.getId(),
                    2,
                    "Yaounde",
                    "Douala",
                    "Melen",
                    "Deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage16 = new Voyage(
                    user1.getId(),
                    1,
                    "Yaounde",
                    "Yaounde",
                    "Odja",
                    "melen",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage17 = new Voyage(
                    user1.getId(),
                    1,
                    "Yaounde",
                    "yaounde",
                    "odja",
                    "etoudi",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage18 = new Voyage(
                    user1.getId(),
                    1,
                    "Yaounde",
                    "Yaounde",
                    "Odja",
                    "Nkoabang",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage19 = new Voyage(
                    user2.getId(),
                    1,
                    "Douala",
                    "Douala",
                    "PK17",
                    "Deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage20 = new Voyage(
                    user1.getId(),
                    1,
                    "Doula",
                    "Douala",
                    "pk18",
                    "Deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage21 = new Voyage(
                    user1.getId(),
                    1,
                    "Douala",
                    "Douala",
                    "makepe",
                    "Deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            Voyage voyage22 = new Voyage(
                    user1.getId(),
                    1,
                    "Doula",
                    "Douala",
                    "Bonamoussadi",
                    "Deido",
                    LocalDate.of(2024,Month.JUNE,23).atStartOfDay()
            );
            voyageRepositoryImp.saveALL(List.of(voyage1, voyage2,voyage3,voyage4,voyage5,voyage6,voyage7,voyage8,voyage9,voyage10,voyage11,voyage12,voyage13,voyage14,voyage15,voyage16,voyage17,voyage18,voyage19,voyage20,voyage21,voyage22));
        };
    }

}
