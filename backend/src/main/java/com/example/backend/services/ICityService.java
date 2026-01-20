package com.example.backend.services;

import com.example.backend.entities.City;

import java.util.List;

public interface ICityService {


    public List<City> getAllCities();
    public City getCityById(Long id);
    public City saveCity(City city);
    public City updateCity(Long id, City city);
    public void deleteCity(Long id);
}
