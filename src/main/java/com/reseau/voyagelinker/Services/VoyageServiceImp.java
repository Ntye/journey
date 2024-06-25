package com.reseau.voyagelinker.Services;

import com.reseau.voyagelinker.Models.Voyage;
import com.reseau.voyagelinker.Repositories.RepositoriesImp.VoyageRepositoryImp;
import com.reseau.voyagelinker.Repositories.VoyageRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
@AllArgsConstructor
public class VoyageServiceImp implements VoyageService{
    private final VoyageRepositoryImp voyageRepository;
    private final VoyageRepository voyageRepository1;

    public List<Voyage> index() {
        return voyageRepository1.findAll();
    }

    public Voyage store(Voyage voyage,UUID idAdmin) {
        voyage.setId(idAdmin);
        return voyageRepository.save(voyage);
    }

    public Voyage show(UUID idVoyage) {
        return voyageRepository1.findById(idVoyage).orElseThrow(() -> new IllegalStateException("travel with id" + idVoyage + "does not exists"));
    }

    public List<Voyage> showIdAdmin(UUID idAdmin) {
        return voyageRepository1.findByIdAdmin(idAdmin);
    }


    public boolean delete(UUID idVoyage) {
        if(voyageRepository1.findById(idVoyage).isEmpty()) {
            throw new IllegalStateException("voyage with id" + idVoyage + "does not exists");
        }
        voyageRepository1.deleteById(idVoyage);
        return true;
    }

    @Transactional
    public Voyage update(UUID idVoyage, String villeDepart, String villeArrivee, String lieuDepart, String lieuArrive, LocalDateTime dateDepart) {
        Voyage voyage = voyageRepository1.findById(idVoyage).orElseThrow(() -> new IllegalStateException("travel with id" + idVoyage + "does not exists"));

        if(villeDepart != null && villeDepart.isEmpty() && !Objects.equals(villeDepart,voyage.getVilleDepart())) {
            voyage.setVilleDepart(villeDepart);
        }

        if(lieuDepart != null && lieuDepart.isEmpty() && !Objects.equals(lieuDepart,voyage.getLieuDepart())) {
            voyage.setLieuDepart(lieuDepart);
        }

        if(villeArrivee != null && villeArrivee.isEmpty() && !Objects.equals(villeArrivee,voyage.getVilleDepart())) {
            voyage.setVilleArrivee(villeArrivee);
        }

        if(lieuArrive != null && lieuArrive.isEmpty() && !Objects.equals(lieuArrive,voyage.getLieuArrive())) {
            voyage.setLieuArrive(lieuArrive);
        }

        if(dateDepart != null && !Objects.equals(dateDepart,voyage.getDateDepart())) {
            voyage.setDateDepart(dateDepart);
        }

        return voyageRepository1.save(voyage);
    }
}
