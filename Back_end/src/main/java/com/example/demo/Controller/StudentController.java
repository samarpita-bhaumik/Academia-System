package com.example.demo.Controller;


import com.example.demo.Entities.Courses;
import com.example.demo.Entities.Students;
import com.example.demo.Model.CourseDetailsModel;
import com.example.demo.Model.TimeTableModel;
import com.example.demo.Services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/login")
    public String login(@RequestBody Students login) {
        Students loginVal = studentService.authenticate(login);
        if(loginVal != null){
            return "Login Successful " + loginVal.getStudentId();
        }else {
            return "Login is not successful";
        }
    }

    @GetMapping("/getAllLoginUsers")
    public List<Students> getAllUsers(){
        return studentService.getAll();
    }

    @CrossOrigin
    @PostMapping("/timetable")
    public ResponseEntity<List<TimeTableModel>> gettimetable(@RequestBody Students students){
        List<Object[]> result = studentService.gettimetable(students.getStudentId());
        List<TimeTableModel> data = new ArrayList<>();

        for(Object[] res: result){
            TimeTableModel cusRes = new TimeTableModel();
            cusRes.setStudentName((String) res[0]);
            cusRes.setDay((String) res[1]);
            cusRes.setTime((String) res[2]);
            cusRes.setName((String) res[3]);
            cusRes.setCourseId((Integer) res[4]);
            data.add(cusRes);
        }

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/coursedetails")
    public ResponseEntity<List<CourseDetailsModel>> getcoursedetails(@RequestBody Courses course){
        List<Object[]> result = studentService.getcoursedetails(course.getCourseId());
        List<CourseDetailsModel> data = new ArrayList<>();

        for(Object[] res: result){
            CourseDetailsModel cusRes = new CourseDetailsModel();
            cusRes.setCourseId((Integer) res[0]);
            cusRes.setCapacity((Integer) res[1]);
            cusRes.setCourseCode((String) res[2]);
            cusRes.setCredits((Double) res[3]);
            cusRes.setDescription((String) res[4]);
            cusRes.setName((String) res[5]);
            cusRes.setTerm((Integer) res[6]);
            cusRes.setYear((Integer) res[7]);
            cusRes.setFacultyName((String) res[8]);
            cusRes.setRoom((Integer) res[9]);
            cusRes.setSname((String) res[10]);
            data.add(cusRes);
        }

        return new ResponseEntity<>(data, HttpStatus.OK);
    }
}

