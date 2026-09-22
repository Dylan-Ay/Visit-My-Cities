package com.example.backend.services;

import com.example.backend.entities.User;
import com.example.backend.entities.Building;
import com.example.backend.entities.City;
import com.example.backend.entities.Favorite;
import com.example.backend.exceptions.BuildingExistInFavoritesException;
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
            throw new CityExistInFavoritesException("La ville " + city.getName() + " existe déjà dans les favoris de l'utilisateur " + user.getUsername());
        }

        Favorite newFavoriteCity = new Favorite();
        newFavoriteCity.setCity(city);
        newFavoriteCity.setUser(user);

       favoriteRepository.save(newFavoriteCity);
    }

    @Override
    public void addBuildingToFavorite(User user, Long building_id) {

        Building building = buildingService.getBuildingById(building_id);

        if (favoriteRepository.existsByUserAndBuilding(user, building)){
            throw new BuildingExistInFavoritesException("Le bâtiment " + building.getName() + " existe déjà dans les favoris de l'utilisateur " + user.getUsername());
        }

        Favorite newFavoriteBuilding = new Favorite();
        newFavoriteBuilding.setBuilding(building);
        newFavoriteBuilding.setUser(user);

        favoriteRepository.save(newFavoriteBuilding);
    }

    @Override
    public List<City> getFavoriteCitiesByUser(User user) {

        List<Favorite> favorites = this.favoriteRepository.findByUser(user);

        return favorites.stream()
            .map(favorite -> favorite.getCity())
            .filter(city -> city!= null).toList();

    }

    @Override
    public List<Building> getFavoriteBuildingsByUser(User user) {

        List<Favorite> favorites = this.favoriteRepository.findByUser(user);

        return favorites.stream()
            .map(favorite -> favorite.getBuilding())
            .filter(building -> building != null).toList();
    }
}
