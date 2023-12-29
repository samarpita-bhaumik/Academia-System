package com.example.demo.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "Courses")
public class Courses {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer courseId;

    @Column(nullable = false,unique = true)
    private String courseCode;

    @Column(nullable = false)
    private String name;

    private String description;

    @Column(nullable = false)
    private Integer year;

    @Column(nullable = false)
    private Integer term;

    @Column(nullable = false)
    private Double credits;

    @Column(nullable = false)
    private Integer capacity;

    @ManyToMany(mappedBy = "courses",fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Students> students;

    @ManyToMany(mappedBy = "courses",fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Specialization> specializations;

    @ManyToOne
    @JoinColumn(name = "emp_id")
    @JsonIgnore
    private Employee employees;

    @OneToMany(mappedBy = "courses")
    @JsonIgnore
    private List<CourseSchedule> courseSchedule;
}
