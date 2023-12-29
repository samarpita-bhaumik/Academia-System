package com.example.demo.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
@Table(name = "Students")
public class Students {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer studentId;

    @Column(nullable = false, unique = true)
    private Integer rollNumber;

    @Column(nullable = false)
    private String studentName;

    @Column(nullable = false, unique = true)
    private String email ;

    private String photographPath;

    @Column(nullable = false)
    private String password;


    @Column(nullable = false)
    private Double cgpa=0.0;

    @Column(nullable = false)
    private Double totalCredits;

    @Column(nullable = false)
    private Long graduationYear;

   @OneToOne
    @JoinColumn(name="specialization_id")
   @JsonIgnore
    private Specialization specialization;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "Student_Courses",  joinColumns = @JoinColumn(name = "student_id", referencedColumnName = "studentId"),
            inverseJoinColumns = @JoinColumn(name = "course_id", referencedColumnName = "courseId"))
    @JsonIgnore
    private Set<Courses> courses;

}
