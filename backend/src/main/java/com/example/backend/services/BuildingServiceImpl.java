package com.example.backend.services;

import com.example.backend.dto.BuildingCreateDTO;
import com.example.backend.dto.BuildingDTO;
import com.example.backend.entities.Building;
import com.example.backend.entities.Category;
import com.example.backend.entities.City;
import com.example.backend.exceptions.BuildingNotFoundException;
import com.example.backend.exceptions.CategoryNotFoundException;
import com.example.backend.exceptions.CityNotFoundException;
import com.example.backend.repository.BuildingRepository;
import com.example.backend.repository.CategoryRepository;
import com.example.backend.repository.CityRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuildingServiceImpl implements IBuildingService{

    private final BuildingRepository buildingRepository;
    private final CategoryRepository categoryRepository;
    private final CityRepository cityRepository;
    private final BuildingMapper buildingMapper;

    public BuildingServiceImpl(BuildingRepository buildingRepository, CategoryRepository categoryRepository, CityRepository cityRepository, BuildingMapper buildingMapper) {
        this.buildingRepository = buildingRepository;
        this.categoryRepository = categoryRepository;
        this.cityRepository = cityRepository;
        this.buildingMapper = buildingMapper;
    }

    @Override
    public List<BuildingDTO> getAllBuildings() {
        return this.buildingRepository.findAll()
                .stream()
                .map(buildingMapper::toDTO)
                .toList();
    }

    @Override
    public Building getBuildingById(Long id) {
        return this.buildingRepository.findById(id)
                .orElseThrow(() -> new BuildingNotFoundException("Aucun bâtiment n'a été trouvé avec cet id."));
    }

    @Override
    public List<BuildingDTO> getBuildingsByCityId(Long id) {
        this.cityRepository.findById(id)
                .orElseThrow(() -> new CityNotFoundException("Aucune ville n'a été trouvé avec cet id."));

        return this.buildingRepository.findByCityId(id)
                .stream()
                .map(buildingMapper::toDTO)
                .toList();
    }

    @Override
    public List<BuildingDTO> getBuildingsByCategoryId(Long id) {
        this.categoryRepository.findById(id)
                .orElseThrow(() -> new CategoryNotFoundException("Aucune catégorie n'a été trouvé avec cet id."));

        return this.buildingRepository.findByCategoryId(id)
                .stream()
                .map(buildingMapper::toDTO)
                .toList();
    }

    @Override
    public void saveBuilding(BuildingCreateDTO dto) throws JsonProcessingException {
        Building building = new Building();
        building.setName(dto.getName());
        building.setImage(dto.getImage());
        building.setAddress(dto.getAddress());
        building.setPostalCode(dto.getPostalCode());
        building.setConstructionYear(dto.getConstructionYear());
        building.setArchitect(dto.getArchitect());
        building.setStyle(dto.getStyle());
        building.setDescription(dto.getDescription());
        building.setTicketPrice(dto.getTicketPrice());
        building.setVisitDuration(dto.getVisitDuration());
        building.setBooking(dto.getBooking());
        building.setAccessStatus(dto.getAccessStatus());
        building.setAccessiblePRM(dto.isAccessiblePRM());
        building.setLatitude(dto.getLatitude());
        building.setLongitude(dto.getLongitude());

        // JSON brut
        ObjectMapper mapper = new ObjectMapper();
        building.setSchedules(mapper.writeValueAsString(dto.getSchedules()));

        // Relations ManyToOne
        if(dto.getCityId() != null) {
            City city = cityRepository.findById(dto.getCityId())
                    .orElseThrow(() -> new RuntimeException("City not found"));
            building.setCity(city);
        }
        if(dto.getCategoryId() != null) {
            Category category = categoryRepository.findById(dto.getCategoryId())
                    .orElseThrow(() -> new RuntimeException("Category not found"));
            building.setCategory(category);
        }

        buildingRepository.save(building);
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
    public BuildingDTO getBuildingDtoById(Long id) {
        Building b =  this.buildingRepository.findById(id).orElseThrow(() -> new BuildingNotFoundException("batiment existe pas "));
        return buildingMapper.toDTO(b);
    }
}
