package com.reseau.voyagelinker.Controllers;


import com.reseau.voyagelinker.Models.User;
import com.reseau.voyagelinker.Models.Voyage;
import com.reseau.voyagelinker.Services.JwtUtil;
import com.reseau.voyagelinker.Services.VoyageServiceImp;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/voyage")
@AllArgsConstructor
public class VoyageController {
    private final VoyageServiceImp voyageService;
    private final JwtUtil jwtUtil;


    @GetMapping
    public List<Voyage> index() {
        return voyageService.index();
    }

    @GetMapping(path = "{idVoyage}")
    public Voyage show(@PathVariable("idVoyage")UUID idVoyage){
        return voyageService.show(idVoyage);
    }

    @GetMapping(path = "/admin")
    public List<Voyage> showAdmin(HttpServletRequest request){
        UUID user = jwtUtil.extractUserUUID(request);
        return voyageService.showIdAdmin(user);
    }

    @PostMapping
    public Voyage store(@RequestBody Voyage voyage,HttpServletRequest request) {
        UUID user = jwtUtil.extractUserUUID(request);
        return voyageService.store(voyage,user);
    }

    @DeleteMapping(path = "{idVoyage}")
    public boolean delete(@PathVariable("idVoyage")UUID idVoyage) {
        return voyageService.delete(idVoyage);
    }

    @PatchMapping(path = "{idVoyage}")
    public Voyage update(
            @PathVariable("idVoyage")UUID idVoyage,
            @RequestBody Voyage voyage
    ) {
        return voyageService.update(idVoyage,voyage.getVilleDepart(), voyage.getVilleArrivee(), voyage.getLieuDepart(), voyage.getVilleArrivee(), voyage.getDateDepart());
    }
}
