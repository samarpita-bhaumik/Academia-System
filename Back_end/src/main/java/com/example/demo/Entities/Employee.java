package com.example.demo.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "Employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer facultyId;

    @Column(nullable = false)
    private String facultyName;


    @ManyToOne
    @JoinColumn(name = "dept_id")
    @JsonIgnore
    private Department department;

    @OneToMany(mappedBy="employees")
    @JsonIgnore
    private List<Courses> courses;
}
