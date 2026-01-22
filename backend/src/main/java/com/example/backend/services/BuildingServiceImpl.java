package com.example.backend.services;

import com.example.backend.entities.Building;
import com.example.backend.exceptions.BuildingNotFoundException;
import com.example.backend.repository.BuildingRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BuildingServiceImpl implements IBuildingService{
    private final BuildingRepository buildingRepository;

    public BuildingServiceImpl(BuildingRepository buildingRepository) {
        this.buildingRepository = buildingRepository;
    }

    @Override
    public Building saveBuilding(Building building) {
        return this.buildingRepository.save(building);
    }

    @Override
    public List<Building> getAllBuildings() {
        return this.buildingRepository.findAll();
    }

    @Override
    public List<Building> getBuildingsByCityId(Long id) {
        List<Building> buildings =  this.buildingRepository.findByCityId(id);
        if(buildings.isEmpty()){
            throw  new BuildingNotFoundException("Aucun batîment trouvé pour cette ville.");
        }
        return buildings;
    }

    @Override
    public List<Building> getBuildingsByCityName(String name) {
        return List.of();
    }

    @Override
    public Building updateBuilding(Long id, Building building) {
        return null;
    }

    @Override
    public void deleteBuilding(Long id) {

    }
}
