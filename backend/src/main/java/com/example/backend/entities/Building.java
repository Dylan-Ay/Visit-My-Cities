package com.example.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
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
    @JsonIgnore
    private List<Category> categories;
    @OneToMany(mappedBy = "building")
    @JsonIgnore
    private List<Favorite> favorites;


}
