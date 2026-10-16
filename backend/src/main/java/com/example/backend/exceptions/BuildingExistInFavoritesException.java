package com.example.backend.exceptions;

public class BuildingExistInFavoritesException extends RuntimeException {
    public BuildingExistInFavoritesException(String message) {
        super(message);
    }
}
