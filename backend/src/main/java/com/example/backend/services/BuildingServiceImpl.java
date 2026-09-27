package com.example.backend.services;

import com.example.backend.dto.BuildingRequestDTO;
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
    public BuildingDTO getBuildingDtoById(Long id) {
        Building building = this.buildingRepository.findById(id)
                .orElseThrow(() -> new BuildingNotFoundException("Aucun bâtiment n'a été trouvé avec cet id."));
        return buildingMapper.toDTO(building);
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
    public void createBuilding(BuildingRequestDTO buildingDTO) throws JsonProcessingException {
        Building building = new Building();

        updateBuildingFields(building, buildingDTO);

        this.buildingRepository.save(building);
    }

    @Override
    public BuildingDTO updateBuilding(Long id, BuildingRequestDTO buildingDTO) throws JsonProcessingException {
        Building buildingToUpdate = getBuildingById(id);

        updateBuildingFields(buildingToUpdate, buildingDTO);

        Building updatedBuilding = this.buildingRepository.save(buildingToUpdate);

        return buildingMapper.toDTO(updatedBuilding);
    }

    @Override
    public void deleteBuilding(Long id) {
      Building buildingToDelete = this.buildingRepository.findById(id)
              .orElseThrow(() -> new BuildingNotFoundException("Aucun bâtiment trouvé avec cet id."));

        this.buildingRepository.delete(buildingToDelete);
    }

    private void updateBuildingFields(Building building, BuildingRequestDTO buildingDTO) throws JsonProcessingException {

        building.setName(buildingDTO.getName());
        building.setImage(buildingDTO.getImage());
        building.setAddress(buildingDTO.getAddress());
        building.setPostalCode(buildingDTO.getPostalCode());
        building.setConstructionYear(buildingDTO.getConstructionYear());
        building.setArchitect(buildingDTO.getArchitect());
        building.setStyle(buildingDTO.getStyle());
        building.setDescription(buildingDTO.getDescription());
        building.setTicketPrice(buildingDTO.getTicketPrice());
        building.setVisitDuration(buildingDTO.getVisitDuration());
        building.setBooking(buildingDTO.getBooking());
        building.setAccessStatus(buildingDTO.getAccessStatus());
        building.setAccessiblePRM(buildingDTO.isAccessiblePRM());
        building.setLatitude(buildingDTO.getLatitude());
        building.setLongitude(buildingDTO.getLongitude());

        ObjectMapper mapper = new ObjectMapper();
        building.setSchedules(mapper.writeValueAsString(buildingDTO.getSchedules()));

        if (buildingDTO.getCityId() != null) {
            City city = cityRepository.findById(buildingDTO.getCityId())
                    .orElseThrow(() -> new CityNotFoundException("Aucune ville n'a été trouvé avec cet id."));
            building.setCity(city);
        }

        if (buildingDTO.getCategoryId() != null) {
            Category category = categoryRepository.findById(buildingDTO.getCategoryId())
                    .orElseThrow(() -> new CategoryNotFoundException("Aucune catégorie n'a été trouvé avec cet id."));
            building.setCategory(category);
        }
    }
}
