package com.example.backend.exceptions;

public class CityExistInFavoritesException extends RuntimeException {
    public CityExistInFavoritesException(String message) {
        super(message);
    }
}
