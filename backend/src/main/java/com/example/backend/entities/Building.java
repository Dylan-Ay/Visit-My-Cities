package com.example.backend.entities;

import com.example.backend.enums.AccessStatusType;
import com.example.backend.enums.BookingType;
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
@Table(
    uniqueConstraints = {
        @UniqueConstraint(columnNames = {"name", "city"})
    }
)

public class Building {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String name;

    @Column(nullable = false)
    private String image;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private String postalCode;

    private Integer constructionYear;

    private String architect;

    @Column(nullable = false)
    private String style;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(nullable = false)
    private Integer ticketPrice;

    private String visitDuration;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private BookingType booking;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AccessStatusType accessStatus;

    @Column(name = "accessible_PRM")
    private boolean accessiblePRM;

    @Column(nullable = false)
    private Double latitude;

    @Column(nullable = false)
    private Double longitude;

    @Column(columnDefinition = "TEXT")
    private String schedules;

    @ManyToOne
    @JoinColumn(nullable = false)
    private City city;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(nullable = false)
    private Category category;

    @OneToMany(mappedBy = "building")
    @JsonIgnore
    private List<Favorite> favorites;
}
