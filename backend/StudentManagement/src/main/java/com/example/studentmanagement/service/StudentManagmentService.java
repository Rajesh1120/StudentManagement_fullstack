package com.example.studentmanagement.service;

import com.example.studentmanagement.DTO.StudentDto;

import java.util.List;


public interface StudentManagmentService {


    StudentDto addStudent(StudentDto studentDto);
    List<StudentDto> getAllStudents();
    StudentDto getStudentById(Long id);
    StudentDto updateStudent(Long id, StudentDto studentDto);
    void deleteStudent(Long id);
}
