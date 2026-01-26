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
    public Building getBuildingById(Long id) {
        return this.buildingRepository.findById(id).orElseThrow(() -> new BuildingNotFoundException("Aucun batiment trouvé avec cette id."));
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
        List<Building> buildings = this.buildingRepository.findByCityName(name);
        if(buildings.isEmpty()){
            throw new BuildingNotFoundException("Aucun batiment trouvé avce " + name);
        }
        return buildings;
    }

    @Override
    public Building updateBuilding(Long id, Building building) {
        Building buildingToUpdate = getBuildingById(id);
        if(building.getName() != null){
            buildingToUpdate.setName(building.getName());
        }
        if(building.getDescription() != null){
            buildingToUpdate.setDescription(building.getDescription());
        }
        if(building.getYearConstruction() != null){
            buildingToUpdate.setYearConstruction(building.getYearConstruction());
        }
        if(building.getCity() != null){
            buildingToUpdate.setCity(building.getCity());
        }
        return this.buildingRepository.save(buildingToUpdate);
    }

    @Override
    public void deleteBuilding(Long id) {
      Building buildingToDelete = this.buildingRepository.findById(id).orElseThrow(() -> new BuildingNotFoundException("Batiment non trouvé."));
        this.buildingRepository.delete(buildingToDelete);
    }
}
