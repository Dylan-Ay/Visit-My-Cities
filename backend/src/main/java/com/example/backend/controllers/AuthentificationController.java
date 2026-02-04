package com.example.backend.controllers;

import com.example.backend.entities.AppUser;
import com.example.backend.services.AuthentificationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthentificationController {

    private final AuthentificationService authentificationService;

    public AuthentificationController(AuthentificationService authentificationService) {
        this.authentificationService = authentificationService;
    }


    @PostMapping("/register")
    public ResponseEntity<AppUser> register(@RequestBody AppUser appUser){

       return  new ResponseEntity<>(this.authentificationService.register(appUser), HttpStatus.OK);
    }
}
