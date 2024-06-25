package com.reseau.voyagelinker.Repositories.RepositoriesImp;


import com.reseau.voyagelinker.Models.Voyage;
import com.reseau.voyagelinker.Repositories.UserRepository;
import com.reseau.voyagelinker.Repositories.VoyageRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class VoyageRepositoryImp {
    @Autowired
    private final VoyageRepository voyageRepository;
    private final UserRepository userRepository;

    @Transactional
    public Voyage save(Voyage voyage) {
        UUID id;
        if((voyage.getIdAdmin() == null)){
            throw new IllegalStateException("admin ID is required");
        }
        if(userRepository.findById(voyage.getIdAdmin()).isEmpty()){
            throw new IllegalStateException("the UUID wis not exist");
        }
        do{
            id = UUID.randomUUID();
        }while (voyageRepository.findById(id).isPresent());

        voyage.setId(id);
        return voyageRepository.save(voyage);
    }

    @Transactional
    public List<Voyage> saveALL(List<Voyage> voyages) {
        return voyages.stream()
                .map(
                        this::save

                ).toList();
    }
}
