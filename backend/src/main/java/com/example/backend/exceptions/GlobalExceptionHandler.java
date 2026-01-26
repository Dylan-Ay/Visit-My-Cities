package com.example.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(CityNotFoundException.class)
    public ResponseEntity<ErrorMessage> handleCityNotFound(CityNotFoundException e){
        
        ErrorMessage errorMessage = new ErrorMessage(HttpStatus.NOT_FOUND.value(),e.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
    }

    @ExceptionHandler(BuildingNotFoundException.class)
    public ResponseEntity<ErrorMessage> handleBuildingNotFound(BuildingNotFoundException e){

        ErrorMessage errorMessage = new ErrorMessage(HttpStatus.NOT_FOUND.value(),e.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
    }
}
