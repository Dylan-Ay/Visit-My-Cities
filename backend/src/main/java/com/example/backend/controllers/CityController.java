package com.example.backend.controllers;

import com.example.backend.entities.City;
import com.example.backend.services.CityServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/city")
public class CityController {

    private final CityServiceImpl cityServiceImpl;

    public CityController(CityServiceImpl cityServiceImpl) {
        this.cityServiceImpl = cityServiceImpl;
    }

    @PostMapping("/add")
    public ResponseEntity<City> saveCity(@RequestBody City city){
        return new ResponseEntity<>(this.cityServiceImpl.saveCity(city), HttpStatus.CREATED);
    }
    @GetMapping("/cities")
    public ResponseEntity<List<City>> getAllCities(){
        return new ResponseEntity<>(this.cityServiceImpl.getAllCities(), HttpStatus.OK);
    }
}
