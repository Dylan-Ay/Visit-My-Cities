package com.example.backend.exceptions;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;


@RestControllerAdvice
public class GlobalExceptionHandler {

    private final HttpServletRequest request;

    public GlobalExceptionHandler(HttpServletRequest request) {
        this.request = request;
    }

    @ExceptionHandler(CategoryNotFoundException.class)
    public ResponseEntity<ErrorMessage> handleCategoryNotFound(CategoryNotFoundException e){

        int httpStatus = HttpStatus.NOT_FOUND.value();
        ErrorMessage errorMessage = new ErrorMessage(httpStatus,e.getMessage(), request.getRequestURI());

        return ResponseEntity
                .status(httpStatus)
                .body(errorMessage);
    }

    @ExceptionHandler(CityNotFoundException.class)
    public ResponseEntity<ErrorMessage> handleCityNotFound(CityNotFoundException e){

        int httpStatus = HttpStatus.NOT_FOUND.value();
        ErrorMessage errorMessage = new ErrorMessage(httpStatus,e.getMessage(), request.getRequestURI());

        return ResponseEntity
                .status(httpStatus)
                .body(errorMessage);
    }

//    @ExceptionHandler(BuildingNotFoundException.class)
//    public ResponseEntity<ErrorMessage> handleBuildingNotFound(BuildingNotFoundException e){
//
//        ErrorMessage errorMessage = new ErrorMessage(HttpStatus.NOT_FOUND.value(),e.getMessage());
//        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
//    }

    @ExceptionHandler({UserNotFoundException.class, BadCredentialsException.class, AuthentificationNotFoundException.class})
    public ResponseEntity<ErrorMessage> handleUserNotFoundException(Exception e){

        int httpStatus = HttpStatus.NOT_FOUND.value();
        ErrorMessage errorMessage = new ErrorMessage(httpStatus,e.getMessage(), request.getRequestURI());

        return ResponseEntity
                .status(httpStatus)
                .body(errorMessage);
    }

    @ExceptionHandler(CityExistInFavoritesException.class)
    public ResponseEntity<ErrorMessage> handleCityFavoriteException(CityExistInFavoritesException e){

        int httpStatus = HttpStatus.CONFLICT.value();
        ErrorMessage errorMessage = new ErrorMessage(httpStatus,e.getMessage(), request.getRequestURI());
        return ResponseEntity
                .status(httpStatus)
                .body(errorMessage);
    }

    @ExceptionHandler(BuildingExistInFavoritesException.class)
    public ResponseEntity<ErrorMessage> handleBuildingFavoriteException(BuildingExistInFavoritesException e){

        int httpStatus = HttpStatus.CONFLICT.value();
        ErrorMessage errorMessage = new ErrorMessage(httpStatus,e.getMessage(), request.getRequestURI());
        return ResponseEntity
                .status(httpStatus)
                .body(errorMessage);
    }
}
