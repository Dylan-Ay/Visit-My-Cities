package com.example.backend.controllers;
import com.example.backend.entities.User;
import com.example.backend.entities.Building;
import com.example.backend.entities.City;
import com.example.backend.repository.UserRepository;
import com.example.backend.services.FavoriteServiceImpl;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/favorites")
public class FavoriteController {

    private final FavoriteServiceImpl favoriteService;

    private final UserRepository userRepository;

    public FavoriteController(FavoriteServiceImpl favoriteSrvice, UserRepository userRepository) {
        this.favoriteService = favoriteSrvice;
        this.userRepository = userRepository;
    }

    @GetMapping("/cities")
    public List<City> getFavoriteCities(@AuthenticationPrincipal UserDetails userDetails){
        User user = userRepository.findByEmail(userDetails.getUsername()).
                orElseThrow(() ->new UsernameNotFoundException("L'utilisateur n'existe pas"));

        return this.favoriteService.getFavoriteCitiesByUser(user);
    }

    @GetMapping("/buildings")
    public List<Building> getFavoriteBuildings(@AuthenticationPrincipal UserDetails userDetails){
        User user = userRepository.findByEmail(userDetails.getUsername()).
                orElseThrow(() -> new UsernameNotFoundException("L'utilisateur n'existe pas"));

        return this.favoriteService.getFavoriteBuildingsByUser(user);
    }

    @PostMapping("/cities/{city_id}")
    public void addCityToFavorite(@PathVariable Long city_id, @AuthenticationPrincipal UserDetails userDetails){
        User user = userRepository.findByEmail(userDetails.getUsername()).
                orElseThrow(() -> new UsernameNotFoundException("L'utilisateur n'existe pas"));
        this.favoriteService.addCityToFavorite(user, city_id);
    }

    @PostMapping("/buildings/{building_id}")
    public void addBuildingToFavorite(@PathVariable Long building_id, @AuthenticationPrincipal UserDetails userDetails){
        User user = userRepository.findByEmail(userDetails.getUsername()).
                orElseThrow(() -> new UsernameNotFoundException("L'utilisateur n'existe pas"));
        this.favoriteService.addBuildingToFavorite(user, building_id);
    }
}
