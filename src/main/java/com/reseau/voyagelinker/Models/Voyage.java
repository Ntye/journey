package com.reseau.voyagelinker.Models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.cassandra.core.mapping.CassandraType;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Table
@AllArgsConstructor
@NoArgsConstructor
public class Voyage {

    @PrimaryKey
    @CassandraType(type = CassandraType.Name.UUID)
    private UUID id;
    private UUID idAdmin;
    private int type;
    private String villeDepart;
    private String villeArrivee;
    private String lieuDepart;
    private String lieuArrive;
    private LocalDateTime dateDepart;


    public Voyage(UUID idAdmin, int type, String villeDepart, String villeArrivee, String lieuDepart, String lieuArrive, LocalDateTime dateDepart) {
        this.idAdmin = idAdmin;
        this.type = type;
        this.villeDepart = villeDepart;
        this.villeArrivee = villeArrivee;
        this.lieuDepart = lieuDepart;
        this.lieuArrive = lieuArrive;
        this.dateDepart = dateDepart;
    }
}
