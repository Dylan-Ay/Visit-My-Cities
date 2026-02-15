package com.example.backend.services;

import com.example.backend.entities.AppUser;
import com.example.backend.entities.Building;
import com.example.backend.entities.City;
import com.example.backend.entities.Favorite;
import com.example.backend.exceptions.BuildingExistInFavoriesException;
import com.example.backend.exceptions.BuildingNotFoundException;
import com.example.backend.exceptions.CityExistInFavoriesException;
import com.example.backend.repository.AppUserRepository;
import com.example.backend.repository.CityRepository;
import com.example.backend.repository.FavoriteRepository;
import org.springframework.stereotype.Service;


@Service
public class FavoriteSrviceImpl implements IFavoriteService{


private final CityServiceImpl cityService;
private final FavoriteRepository favoriteRepository;
private final BuildingServiceImpl buildingService;

    public FavoriteSrviceImpl(CityServiceImpl cityService, FavoriteRepository favoriteRepository, BuildingServiceImpl buildingService) {

        this.cityService = cityService;
        this.favoriteRepository = favoriteRepository;
        this.buildingService = buildingService;
    }

    @Override
    public void addCityToFavorite(AppUser user, Long city_id) {

        City city = cityService.getCityById(city_id);
        if(favoriteRepository.existsByUserAndCity(user, city)){
            throw new CityExistInFavoriesException("Ville existe déjà dans les favoris");
        }
        Favorite fCity = new Favorite();
        fCity.setCity(city);
        fCity.setUser(user);
       favoriteRepository.save(fCity);
    }

    @Override
    public void addBuildingToFavorite(AppUser user, Long building_id) {

        Building building = buildingService.getBuildingById(building_id);
        if(favoriteRepository.existsByUserAndBuilding(user, building)){
            throw new BuildingExistInFavoriesException("Batiment existe déjà dans les favoris");
        }
        Favorite fBuilding = new Favorite();
        fBuilding.setBuilding(building);
        fBuilding.setUser(user);
        favoriteRepository.save(fBuilding);
    }
}
