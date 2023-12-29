package com.example.demo.Services;


import com.example.demo.Entities.Students;
import com.example.demo.Repositories.IStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    private IStudentRepository iStudentRepository;

    public Students authenticate(Students login) {
        try {
            return iStudentRepository.findByEmailAndPassword(login.getStudentName(), login.getPassword());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return iStudentRepository.findByEmailAndPassword(login.getStudentName(), login.getPassword());
    }

    public List<Students> getAll(){
        return iStudentRepository.getAllUserLogin();
    }
    public List<Object[]> gettimetable(Integer id){
        return iStudentRepository.gettimetable(id);
    }

    public List<Object[]> getcoursedetails(Integer id){
        return iStudentRepository.getcoursedetails(id);
    }

}
