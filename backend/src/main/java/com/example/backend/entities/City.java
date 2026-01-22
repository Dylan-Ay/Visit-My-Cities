package com.example.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "ville")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nom")
    private String name;

    @Column(name = "pays")
    private String country;

    private String description;

    @Column(name = "code_postal")
    private String postalCode;

    @OneToMany(mappedBy = "city", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Building> buildings;


    public City() {}

    public City(String name, String country, String description, String postalCode) {
        this.name = name;
        this.country = country;
        this.description = description;
        this.postalCode = postalCode;
    }

    public City(String name, String country, String description, String postalCode, List<Building> buildings) {
        this.name = name;
        this.country = country;
        this.description = description;
        this.postalCode = postalCode;
        this.buildings = buildings;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public List<Building> getBuildings() {
        return buildings;
    }

    public void setBuildings(List<Building> buildings) {
        this.buildings = buildings;
    }
}
