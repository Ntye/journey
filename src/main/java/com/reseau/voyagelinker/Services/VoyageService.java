package com.reseau.voyagelinker.Services;

import com.reseau.voyagelinker.Models.Voyage;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public interface VoyageService {
    List<Voyage> index();
    Voyage store(Voyage voyage,UUID idAdmin);
    Voyage show(UUID idVoyage);
    List<Voyage> showIdAdmin(UUID idAdmin);
    boolean delete(UUID idVoyage);
    Voyage update(UUID idVoyage, String villeDepart, String villeArrivee, String lieuDepart, String lieuArrive, LocalDateTime dateDepart);
}
