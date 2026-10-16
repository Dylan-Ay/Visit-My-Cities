package com.example.backend.exceptions;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
public class ErrorMessage {
    private int status;
    private String message;
    private LocalDateTime timestamp;
    private String path;

    public ErrorMessage(int status, String message, String path) {
        this.status = status;
        this.message = message;
        this.timestamp = LocalDateTime.now();
        this.path = path;
    }

}
