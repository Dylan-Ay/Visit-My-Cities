package com.example.backend.repository;

import com.example.backend.entities.Building;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BuildingRepository extends JpaRepository<Building, Long> {

    List<Building> findByCityName(String cityName);
    List<Building> findByCityId(Long id);
    List<Building> findByCategoryId(Long id);
}
