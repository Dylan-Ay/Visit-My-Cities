package com.example.backend.entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

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

        private String name;
        private String image;
        private String address;
        private String postalCode;
        private String country;
        private Integer constructionYear;
        private String architect;
        private String style;

        @Column(columnDefinition = "TEXT")
        private String description;

        private Integer ticketPrice;
        private String visitDuration;
        private String booking;
        private String accessStatus;
        private boolean accessiblePRM;
        private Double latitude;
        private Double longitude;

        @Column(columnDefinition = "TEXT")
        private String schedules;

        @Column(columnDefinition = "TEXT")
        private String coords;

        @ManyToOne
        @JoinColumn(name = "city_id")
        private City city;
        @ManyToOne
        @JsonIgnore
        private Category categories;
        @OneToMany(mappedBy = "building")
        @JsonIgnore
        private List<Favorite> favorites;


}

