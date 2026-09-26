package com.example.backend.services;

import com.example.backend.dto.BuildingCreateDTO;
import com.example.backend.dto.BuildingDTO;
import com.example.backend.entities.Building;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.List;

public interface IBuildingService {

    List<BuildingDTO> getAllBuildings();
    Building getBuildingById(Long id);
    BuildingDTO getBuildingDtoById(Long id);
    List<BuildingDTO> getBuildingsByCityId(Long id);
    List<BuildingDTO> getBuildingsByCategoryId(Long id);

    void createBuilding(BuildingCreateDTO dto) throws JsonProcessingException;
    Building updateBuilding(Long id, Building building);
    void deleteBuilding(Long id);
}
