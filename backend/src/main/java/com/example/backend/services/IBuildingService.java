package com.example.backend.services;

import com.example.backend.entities.Building;

import java.util.List;

public interface IBuildingService {
    Building saveBuilding(Building building);
    Building getBuildingById(Long id);
    List<Building> getAllBuildings();
    List<Building> getBuildingsByCityId(Long id);
    List<Building> getBuildingsByCityName(String name);
    Building updateBuilding(Long id, Building building);
    void deleteBuilding(Long id);
}
