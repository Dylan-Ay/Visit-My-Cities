package com.example.backend.services;

import com.example.backend.entities.City;
import com.example.backend.exceptions.CityNotFoundException;
import com.example.backend.repository.CityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImpl implements ICityService{

    private final CityRepository cityRepository;

    public CityServiceImpl(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    @Override
    public City saveCity(City city) {
        return this.cityRepository.save(city);
    }

    @Override
    public List<City> getAllCities() {
        return this.cityRepository.findAll();
    }

    @Override
    public City getCityById(Long id) {
        return this.cityRepository.findById(id).orElseThrow(() ->new CityNotFoundException(id));
    }



    @Override
    public City updateCity(Long id, City city) {
        return null;
    }

    @Override
    public void deleteCity(Long id) {

    }
}
