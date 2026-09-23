package com.example.backend.controllers;

import com.example.backend.dto.BuildingCreateDTO;
import com.example.backend.dto.BuildingDTO;
import com.example.backend.entities.Building;
import com.example.backend.services.BuildingServiceImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/buildings")
public class BuildingController {

    private final BuildingServiceImpl buildingServiceImpl;

    public BuildingController(BuildingServiceImpl buildingServiceImpl) {
        this.buildingServiceImpl = buildingServiceImpl;

    }

    @GetMapping
    public ResponseEntity<List<BuildingDTO>> getAllBuildings() {
        return ResponseEntity.ok(
                this.buildingServiceImpl.getAllBuildings()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<BuildingDTO> getBuildingById(@PathVariable Long id){
        return ResponseEntity.ok(
                this.buildingServiceImpl.getBuildingDtoById(id)
        );
    }

    @GetMapping("/city/{id}")
    public ResponseEntity<List<BuildingDTO>> getBuildingsByCityId(@PathVariable Long id){
        return ResponseEntity.ok(
                this.buildingServiceImpl.getBuildingsByCityId(id)
        );
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<List<BuildingDTO>> getBuildingsByCategoryId(@PathVariable Long id){
        return ResponseEntity.ok(
                this.buildingServiceImpl.getBuildingsByCategoryId(id)
        );
    }

    @PostMapping("/add/add")
    public ResponseEntity<Void> addBuilding(@RequestBody BuildingCreateDTO dto) throws JsonProcessingException {
        this.buildingServiceImpl.saveBuilding(dto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteBuilding(@PathVariable Long id){
        this.buildingServiceImpl.deleteBuilding(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Building> updateBuilding(@PathVariable Long id, @RequestBody Building building){
        return new ResponseEntity<>(this.buildingServiceImpl.updateBuilding(id,building), HttpStatus.OK);
    }
}
