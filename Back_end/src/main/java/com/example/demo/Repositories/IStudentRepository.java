package com.example.demo.Repositories;


import com.example.demo.Entities.Students;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.io.Serializable;
import java.util.List;

public interface IStudentRepository extends JpaRepository<Students, Serializable> {

    @Query("SELECT l FROM Students l WHERE l.studentName = :username AND l.password = :password")
    Students findByEmailAndPassword(@Param("username") String userName, @Param("password") String password);

    @Query("select l from Students l")
    List<Students> getAllUserLogin();

    @Query("select s.studentName,cs.day,cs.time,c.name,c.courseId  from Students s JOIN s.courses c join  c.courseSchedule cs where s.studentId=?1")
    List<Object[]> gettimetable(Integer id);

    @Query("select c.courseId,c.capacity,c.courseCode,c.credits,c.description,c.name,c.term,c.year,e.facultyName,cs.Room,s.name as sname from Courses c JOIN c.specializations s JOIN c.courseSchedule cs JOIN c.employees e JOIN e.department d where d.departmentId=1 and c.courseId=?1")
    List<Object[]> getcoursedetails(Integer id);
}

