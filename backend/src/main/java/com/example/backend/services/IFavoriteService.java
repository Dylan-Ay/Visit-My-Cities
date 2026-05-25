package com.example.backend.services;

import com.example.backend.entities.User;
import com.example.backend.entities.Building;
import com.example.backend.entities.City;

import java.util.List;

public interface IFavoriteService {

    void addCityToFavorite(User user, Long city_id);
    void addBuildingToFavorite(User user, Long building_id);
    List<City> getFavoriteCities(User user);
    List<Building>  getFavoriteBuildings(User user);

}


