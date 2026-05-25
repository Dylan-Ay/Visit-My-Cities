package com.example.backend.controllers;

import com.example.backend.entities.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.services.AuthentificationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthentificationController {



    private final AuthentificationService authentificationService;
    private final UserRepository userRepository;


    public AuthentificationController(AuthentificationService authentificationService, UserRepository userRepository) {
        this.authentificationService = authentificationService;
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user){

       return  new ResponseEntity<>(this.authentificationService.register(user), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody User user){

        String token = authentificationService.login(user.getEmail(), user.getPassword());
        User foundUser = userRepository.findByEmail(user.getEmail())
                .orElseThrow(() -> new RuntimeException("Utilisateur introuvable"));

        Map<String, Object> response = new HashMap<>();
        response.put("access_token", token);

        Map<String, Object> userInfo = new HashMap<>();
        userInfo.put("username", foundUser.getUsername());
        userInfo.put("email", foundUser.getEmail());
        userInfo.put("role", foundUser.getRole());
        response.put("user", userInfo);

        return ResponseEntity.ok(response);

    }

}
