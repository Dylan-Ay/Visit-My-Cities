package com.example.backend.entities;

import com.example.backend.enums.AppRole;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "utilisateurs")
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String username;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private AppRole roles;
    @ManyToMany
    private List<Building> buildings ;

    public AppUser() {
    }

    public AppUser(Long id, String username, String email, String password, AppRole roles) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Building> getBuildings() {
        return buildings;
    }

    public void setBuildings(List<Building> buildings) {
        this.buildings = buildings;
    }

    public AppRole getRoles() {
        return roles;
    }

    public void setRoles(AppRole roles) {
        this.roles = roles;
    }
}
