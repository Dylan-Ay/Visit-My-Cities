package com.example.backend.services;

import com.example.backend.dto.BuildingDTO;
import com.example.backend.entities.Building;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

import java.util.HashMap;

@Component
public class BuildingMapper {

    private final ObjectMapper mapper = new ObjectMapper();

    public BuildingDTO toDTO(Building building) {
        if (building == null) return null;

        // --- Coords ---
        BuildingDTO.CoordsDTO coordsDTO = new BuildingDTO.CoordsDTO();
        coordsDTO.setLatitude(building.getLatitude() != null ? building.getLatitude() : 0.0);
        coordsDTO.setLongitude(building.getLongitude() != null ? building.getLongitude() : 0.0);
        coordsDTO.setLatitudeDelta(0.01);
        coordsDTO.setLongitudeDelta(0.01);

        // --- Schedules ---
        BuildingDTO.ScheduleDTO scheduleDTO = new BuildingDTO.ScheduleDTO();

        try {
            if (building.getSchedules() != null) {
                BuildingDTO.ScheduleDTO parsed = mapper.readValue(building.getSchedules(), BuildingDTO.ScheduleDTO.class);

                scheduleDTO.setType(parsed.getType());
                scheduleDTO.setDays(parsed.getDays());
                scheduleDTO.setNote(parsed.getNote());
                scheduleDTO.setOfficialHoursUrl(parsed.getOfficialHoursUrl());

            } else {
                scheduleDTO.setDays(new HashMap<>());
            }
        } catch (JsonProcessingException e) {
            scheduleDTO.setDays(new HashMap<>());
        }

        // --- BuildingDTO ---
        BuildingDTO buildingDTO = new BuildingDTO();

        buildingDTO.setId(building.getId() != null ? building.getId() : null);
        buildingDTO.setCityId(building.getCity() != null ? building.getCity().getId() : null);
        buildingDTO.setCity(building.getCity() != null ? building.getCity().getName() : null);
        buildingDTO.setCountry(building.getCity() != null ? building.getCity().getCountry() : null);
        buildingDTO.setName(building.getName());
        buildingDTO.setImage(building.getImage());
        buildingDTO.setAddress(building.getAddress());
        buildingDTO.setPostalCode(building.getPostalCode());
        buildingDTO.setConstructionYear(building.getConstructionYear());
        buildingDTO.setArchitect(building.getArchitect());
        buildingDTO.setStyle(building.getStyle());
        buildingDTO.setDescription(building.getDescription());
        buildingDTO.setTicketPrice(building.getTicketPrice());
        buildingDTO.setVisitDuration(building.getVisitDuration());
        buildingDTO.setBooking(building.getBooking());
        buildingDTO.setAccessStatus(building.getAccessStatus());
        buildingDTO.setAccessiblePRM(building.isAccessiblePRM());
        buildingDTO.setCoords(coordsDTO);
        buildingDTO.setSchedules(scheduleDTO);

        return buildingDTO;
    }
}