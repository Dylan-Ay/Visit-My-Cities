package com.example.backend.controllers;

import com.example.backend.entities.Building;
import com.example.backend.services.BuildingServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/building") //prends le JSON envoyer par le client et transforme le en objet Java
public class BuildingController {

    private final BuildingServiceImpl buildingServiceImpl;

    public BuildingController(BuildingServiceImpl buildingServiceImpl) {
        this.buildingServiceImpl = buildingServiceImpl;
    }

    @PostMapping("/add")
    public ResponseEntity<Building> addBuilding(@RequestBody Building building){
       return new ResponseEntity<>(this.buildingServiceImpl.saveBuilding(building), HttpStatus.CREATED) ;
    }
    @GetMapping("/buildings")
    public ResponseEntity<List<Building>> getAllBuildings(){
        return new ResponseEntity<>(this.buildingServiceImpl.getAllBuildings(), HttpStatus.OK);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<List<Building>> getBuildingsByCityId(@PathVariable Long id){
        return new ResponseEntity<>(this.buildingServiceImpl.getBuildingsByCityId(id), HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<List<Building>> getBuildingsByCityName(@PathVariable String name){
        return new ResponseEntity<>(this.buildingServiceImpl.getBuildingsByCityName(name), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteBuilding(@PathVariable Long id){
        this.buildingServiceImpl.deleteBuilding(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Building> getBuildingById(@PathVariable Long id){
        return new ResponseEntity<>(this.buildingServiceImpl.getBuildingById(id),HttpStatus.OK);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Building> updateBuilding(@PathVariable Long id, @RequestBody Building building){
        return new ResponseEntity<>(this.buildingServiceImpl.updateBuilding(id,building), HttpStatus.OK);
    }

    @GetMapping("/categorie/{id}")
    public ResponseEntity<List<Building>> getBuildingsByCategorieId(@PathVariable Long id){
        return new ResponseEntity<>(this.buildingServiceImpl.getBuildingsByCategorieId(id),HttpStatus.OK );
    }

}
