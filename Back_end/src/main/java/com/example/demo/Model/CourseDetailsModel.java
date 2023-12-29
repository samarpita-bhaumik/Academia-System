package com.example.demo.Model;

import lombok.Data;

@Data
public class CourseDetailsModel {
    Integer courseId;
    Integer capacity;
    String courseCode;
    Double credits;
    String description;
    String name;
    Integer term;
    Integer year;
    String facultyName;
    Integer Room;
    String sname;
}
