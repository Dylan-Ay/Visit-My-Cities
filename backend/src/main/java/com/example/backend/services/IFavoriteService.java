package com.example.backend.services;

import com.example.backend.entities.AppUser;
import com.example.backend.entities.Building;
import com.example.backend.entities.City;

public interface IFavoriteService {

    void addCityToFavorite(AppUser appUser, Long city_id);
    void addBuildingToFavorite(AppUser appUser, Long building_id);

}
