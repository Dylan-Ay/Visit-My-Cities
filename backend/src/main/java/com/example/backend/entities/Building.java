package com.example.backend.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "batiment")
public class Building {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nom")
    private String name;
    private String description;
    @Column(name = "annee_construction")
    private Integer yearConstruction;
    @Column(name = "image_url")
    private String imageURL;
    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;
    @ManyToMany
    private List<Category> categories;


    public Building() {}

    public Building(String name, String description, int yearConstruction, String imageURL, City city) {
        this.name = name;
        this.description = description;
        this.yearConstruction = yearConstruction;
        this.imageURL = imageURL;
        this.city = city;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Integer getYearConstruction() { return yearConstruction; }
    public void setYearConstruction(Integer yearConstruction) { this.yearConstruction = yearConstruction; }

    public String getImageURL() { return imageURL; }
    public void setImageURL(String imageURL) { this.imageURL = imageURL; }

    public City getCity() { return city; }
    public void setCity(City city) { this.city = city; }
}
