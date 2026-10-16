package com.example.backend.services;

import com.example.backend.dto.BuildingRequestDTO;
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
    void createBuilding(BuildingRequestDTO dto) throws JsonProcessingException;
    BuildingDTO updateBuilding(Long id, BuildingRequestDTO buildingDTO) throws JsonProcessingException;
    void deleteBuilding(Long id);
}
