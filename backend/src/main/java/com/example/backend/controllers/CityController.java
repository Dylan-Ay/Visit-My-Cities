package com.example.backend.controllers;

import com.example.backend.entities.City;
import com.example.backend.services.CityServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cities")
public class CityController {

    private final CityServiceImpl cityServiceImpl;

    public CityController(CityServiceImpl cityServiceImpl) {
        this.cityServiceImpl = cityServiceImpl;
    }

    @GetMapping
    public ResponseEntity<List<City>> getAllCities(){
        return ResponseEntity.ok(
                this.cityServiceImpl.getAllCities()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<City> getCityById(@PathVariable Long id){
        return ResponseEntity.ok(
                this.cityServiceImpl.getCityById(id)
        );
    }

    @GetMapping("/search")
    public ResponseEntity<City> getCityByName(@RequestParam String name){
        return ResponseEntity.ok(
                this.cityServiceImpl.getCityByName(name)
        );
    }

    @PostMapping
    public ResponseEntity<City> createCity(@RequestBody City city){
        return ResponseEntity.ok(
                this.cityServiceImpl.createCity(city)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCity(@PathVariable Long id){
         this.cityServiceImpl.deleteCity(id);
         return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<City> updateCity(@PathVariable Long id, @RequestBody City city){

        return ResponseEntity.ok(
                this.cityServiceImpl.updateCity(id, city)
        );
    }
}
