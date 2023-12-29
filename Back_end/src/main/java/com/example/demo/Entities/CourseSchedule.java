package com.example.demo.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.sql.Time;
import java.util.Set;

@Entity
@Data
@Table(name = "CourseSchedule")
public class CourseSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String time;


    @Column(nullable = false)
    private String day;

    @Column(nullable = false)
    private Integer Room;

    private String Building;

    @ManyToOne
    @JoinColumn(name = "course_id")
    @JsonIgnore
    private Courses courses;
}
