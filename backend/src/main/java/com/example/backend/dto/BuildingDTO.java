package com.example.backend.dto;

import lombok.Data;

import java.util.List;
import java.util.Map;
@Data
public class BuildingDTO {
    private Long id;
    private Long cityId;
    private String name;
    private String image;
    private String address;
    private String postalCode;
    private String city;
    private String country;
    private Integer constructionYear;
    private String architect;
    private String style;
    private String description;
    private Integer ticketPrice;
    private String visitDuration;
    private String booking;
    private String accessStatus;
    private boolean accessiblePRM;

    // Objets imbriqués
    private ScheduleDTO schedules;
    private CoordsDTO coords;

    @Data
    public static class ScheduleDTO {
        private String type;
        private Map<String, List<TimeSlot>> days;
        private String note;
        private String officialHoursUrl;
    }

    @Data
    public static class TimeSlot {
        private String start;
        private String end;
    }

    @Data
    public static class CoordsDTO {
        private double latitude;
        private double longitude;
        private double latitudeDelta;
        private double longitudeDelta;
    }
}
