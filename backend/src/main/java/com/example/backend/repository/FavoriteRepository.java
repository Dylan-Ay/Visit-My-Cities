package com.example.backend.repository;
import com.example.backend.entities.User;
import com.example.backend.entities.Building;
import com.example.backend.entities.City;
import com.example.backend.entities.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

    boolean existsByUserAndCity(User user, City city);
    boolean existsByUserAndBuilding(User user, Building building);
    List<Favorite> findByUser(User user);
}
