package com.reseau.voyagelinker.Repositories;

import com.reseau.voyagelinker.Models.Voyage;
import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.cassandra.repository.Query;

import java.util.List;
import java.util.UUID;

public interface VoyageRepository extends CassandraRepository<Voyage, UUID> {
    @Query("SELECT * FROM voyage WHERE idAdmin = ?0 ALLOW FILTERING")
    List<Voyage> findByIdAdmin(UUID idAdmin);
}
