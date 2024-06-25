package com.reseau.voyagelinker.Repositories;

import com.reseau.voyagelinker.Models.User;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.cassandra.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends CassandraRepository<User, UUID> {
    @Query("SELECT * FROM user WHERE name =? 0 ALLOW FILTERING")
    Optional<User> findByName(String name);

    @Query("SELECT * FROM user WHERE surname =? 0 ALLOW FILTERING")
    Optional<User> findBySurname(String surname);

    @Query("SELECT * FROM user WHERE email = ?0 ALLOW FILTERING")
    Optional<User> findByEmail(String email);

    @Query("SELECT * FROM user WHERE tel = ?0 ALLOW FILTERING")
    Optional<User> findByTel(Long tel);

        Optional<Object> findByEmail(Object email);
}
