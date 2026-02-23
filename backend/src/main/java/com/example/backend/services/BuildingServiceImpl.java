package com.example.backend.services;

import com.example.backend.dto.BuildingDTO;
import com.example.backend.entities.Building;
import com.example.backend.exceptions.BuildingNotFoundException;
import com.example.backend.repository.BuildingRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BuildingServiceImpl implements IBuildingService{

    private final BuildingRepository buildingRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final BuildingMapper buildingMapper;

    public BuildingServiceImpl(BuildingRepository buildingRepository, BuildingMapper buildingMapper) {
        this.buildingRepository = buildingRepository;
        this.buildingMapper = buildingMapper;
    }

    //-----------------------------------building service dto juste en bas ----------------------------------------------

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
        List<Building> buildings =  this.buildingRepository.findByCity_Id(id);
        if(buildings.isEmpty()){
            throw  new BuildingNotFoundException("Aucun batîment trouvé pour cette ville.");
        }
        return buildings;
    }

    @Override
    public List<Building> getBuildingsByCityName(String name) {
        List<Building> buildings = this.buildingRepository.findByCity_Name(name);
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
        if(building.getConstructionYear() != null){
            buildingToUpdate.setConstructionYear(building.getConstructionYear());
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

    @Override
    public List<Building> getBuildingsByCategorieId(Long id) {
      List<Building> buildings = this.buildingRepository.findByCategories_Id(id);
      if(buildings.isEmpty()){
          throw new BuildingNotFoundException("Aucun batiment dans cette catégorie");
      }
      return buildings;

    }


//------------------------------dto service -----------------------------------------------------------------------
public List<BuildingDTO> getAllBuildingsDTO() {
    return buildingRepository.findAll()
            .stream()
            .map(buildingMapper::toDTO)
            .toList();
}

    @Override
    public BuildingDTO getBuildingDtoById(Long id) {
        Building b =  this.buildingRepository.findById(id).orElseThrow(() -> new BuildingNotFoundException("batiment existe pas "));
        return buildingMapper.toDTO(b);
}

    public List<BuildingDTO> getBuildingsDtoByCityId(Long id) {

        List<Building> buildings =  this.buildingRepository.findByCity_Id(id);
        List<BuildingDTO> buildingsDTO = new ArrayList<>(); //je cree une liste de buidibg dto puis la remplir puis retourner
        if(buildings.isEmpty()){
            throw  new BuildingNotFoundException("Aucun batîment trouvé pour cette ville.");
        }

        for(Building b : buildings){
            buildingsDTO.add(buildingMapper.toDTO(b));
        }

        return buildingsDTO;
    }

    public List<BuildingDTO> getBuildingsByCategoryId(Long id){

         List<Building> buildings =  this.buildingRepository.findByCategories_Id(id);
        List<BuildingDTO> buildingsDTO = new ArrayList<>();
        for(Building b : buildings){
            buildingsDTO.add(buildingMapper.toDTO(b));
        }
        return  buildingsDTO;

    }
    @Override
    public List<BuildingDTO> getBuildingsDtoByCityName(String cityName) {
        List<Building> buildings = this.buildingRepository.findByCity_Name(cityName);
        List<BuildingDTO> buildingsDTO = new ArrayList<>();
        if(buildings.isEmpty()){
            throw new BuildingNotFoundException("Aucun batiment trouvé avce " + cityName);
        }

        for(Building b : buildings){
            buildingsDTO.add(buildingMapper.toDTO(b));
        }
        return buildingsDTO;
    }









//    private BuildingDTO convertToDto(Building entity) {
//
//        BuildingDTO dto = new BuildingDTO();
//
//        dto.setId(entity.getId().toString());
//        dto.setCityId(entity.getCity() != null ? entity.getCity().getId().toString() : null);
//        dto.setName(entity.getName());
//        dto.setImage(entity.getImage());
//        dto.setAddress(entity.getAddress());
//        dto.setPostalCode(entity.getPostalCode());
//        dto.setCity(entity.getCity() != null ? entity.getCity().getName() : null);
//        dto.setCountry(entity.getCountry());
//        dto.setConstructionYear(entity.getConstructionYear());
//        dto.setArchitect(entity.getArchitect());
//        dto.setStyle(entity.getStyle());
//        dto.setDescription(entity.getDescription());
//        dto.setTicketPrice(entity.getTicketPrice());
//        dto.setVisitDuration(entity.getVisitDuration());
//        dto.setBooking(entity.getBooking());
//        dto.setAccessStatus(entity.getAccessStatus());
//        dto.setAccessiblePRM(entity.isAccessiblePRM());
//
//        try {
//            if (entity.getSchedules() != null) {
//                BuildingDTO.ScheduleDTO schedules =
//                        objectMapper.readValue(entity.getSchedules(), BuildingDTO.ScheduleDTO.class);
//                dto.setSchedules(schedules);
//            }
//
//            if (entity.getCoords() != null) {
//                BuildingDTO.CoordsDTO coords =
//                        objectMapper.readValue(entity.getCoords(), BuildingDTO.CoordsDTO.class);
//                dto.setCoords(coords);
//            }
//
//        } catch (Exception e) {
//            throw new RuntimeException("Erreur conversion JSON vers DTO", e);
//        }
//
//        return dto;
//    }

}
