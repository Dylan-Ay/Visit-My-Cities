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
    public List<City> getAllCities() {
        return this.cityRepository.findAll();
    }

    @Override
    public City getCityById(Long id) {
        return this.cityRepository.findById(id).orElseThrow(() -> new CityNotFoundException("Aucune ville n'a été trouvé avec cet id"));
    }

    @Override
    public City getCityByName(String name) {
       return this.cityRepository.findByName(name).orElseThrow(() -> new CityNotFoundException("La ville '" + name + "' n'existe pas !"));
    }

    @Override
    public City createCity(City city) {
        return this.cityRepository.save(city);
    }

    @Override
    public City updateCity(Long id, City city) {
        City cityToUpdate = getCityById(id);

        cityToUpdate.setName(city.getName());
        cityToUpdate.setCountry(city.getCountry());
        cityToUpdate.setDescription(city.getDescription());
        cityToUpdate.setPostalCode(city.getPostalCode());

       return this.cityRepository.save(cityToUpdate);
    }

    @Override
    public void deleteCity(Long id) {
        this.cityRepository.delete(getCityById(id));
    }
}
