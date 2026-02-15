package com.example.backend.controllers;

import com.example.backend.entities.AppUser;
import com.example.backend.services.AuthentificationService;
import com.example.backend.services.JwtService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody AppUser appUser){

        String token = authentificationService.login(appUser.getEmail(), appUser.getPassword());
        return ResponseEntity.ok(token);

    }

}
