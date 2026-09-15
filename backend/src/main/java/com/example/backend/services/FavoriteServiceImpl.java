package com.example.backend.services;

import com.example.backend.entities.User;
import com.example.backend.entities.Building;
import com.example.backend.entities.City;
import com.example.backend.entities.Favorite;
import com.example.backend.exceptions.BuildingExistInFavoriesException;
import com.example.backend.exceptions.CityExistInFavoritesException;
import com.example.backend.repository.FavoriteRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class FavoriteServiceImpl implements IFavoriteService{

    private final CityServiceImpl cityService;
    private final BuildingServiceImpl buildingService;
    private final FavoriteRepository favoriteRepository;

    public FavoriteServiceImpl(CityServiceImpl cityService, BuildingServiceImpl buildingService, FavoriteRepository favoriteRepository) {

        this.cityService = cityService;
        this.buildingService = buildingService;
        this.favoriteRepository = favoriteRepository;
    }

    @Override
    public void addCityToFavorite(User user, Long city_id) {

        City city = cityService.getCityById(city_id);

        if (favoriteRepository.existsByUserAndCity(user, city)){
            throw new CityExistInFavoritesException("La ville existe déjà dans les favoris");
        }

        Favorite newFavoriteC = new Favorite();
        newFavoriteC.setCity(city);
        newFavoriteC.setUser(user);

       favoriteRepository.save(newFavoriteC);
    }

    @Override
    public void addBuildingToFavorite(User user, Long building_id) {

        Building building = buildingService.getBuildingById(building_id);

        if (favoriteRepository.existsByUserAndBuilding(user, building)){
            throw new BuildingExistInFavoriesException("Le bâtiment existe déjà dans les favoris");
        }

        Favorite newFavoriteB = new Favorite();
        newFavoriteB.setBuilding(building);
        newFavoriteB.setUser(user);

        favoriteRepository.save(newFavoriteB);
    }

    @Override
    public List<City> getFavoriteCities(User user) {

        List<Favorite> favorites = this.favoriteRepository.findByUser(user).orElseThrow(() ->new RuntimeException("Cet utilisateur n'a aucune ville en favori"));

        return favorites.stream()
            .map(favorite -> favorite.getCity())
            .filter(city -> city!= null).toList();
    }

    @Override
    public List<Building> getFavoriteBuildings(User user) {

        List<Favorite> favorites = this.favoriteRepository.findByUser(user).orElseThrow(() ->new RuntimeException("Cet utilisateur n'a aucun bâtiment en favori"));

        return favorites.stream()
            .map(favorite -> favorite.getBuilding())
            .filter(building -> building != null).toList();
    }
}
