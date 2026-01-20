package com.example.backend.exceptions;
//exception non vérifier c'est pour ça RuntimeException, pas besoin de throw partout
public class CityNotFoundException extends RuntimeException{

    public CityNotFoundException(Long id){
        super("Ville introuvable avec l'id " + id);
    }
}
