package com.reseau.voyagelinker.Models.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VoyageDto {
    private UUID idAdmin;
    private String villeDepart;
    private String villeArrivee;
    private String lieuDepart;
    private String lieuArrive;
    private LocalDateTime dateDepart;
}
