package com.reseau.voyagelinker.Repositories;


import com.reseau.voyagelinker.Models.EmailConfirmationToken;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface EmailConfirmationTokenRepository extends CassandraRepository<EmailConfirmationToken, UUID> {
    EmailConfirmationToken findByToken(String token);
    String deleteByToken(String token);
}
