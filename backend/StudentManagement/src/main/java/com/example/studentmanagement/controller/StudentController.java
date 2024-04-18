package com.example.studentmanagement.controller;
import com.example.studentmanagement.DTO.StudentDto;

import com.example.studentmanagement.service.StudentManagmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentManagmentService studentManagmentService;

    @PostMapping("/add")
    public ResponseEntity<StudentDto> addStudent(@RequestBody StudentDto studentDto) {
        //call the service function addStudent
        StudentDto studentDto1 = studentManagmentService.addStudent(studentDto);
        return new ResponseEntity<>(studentDto1, HttpStatus.CREATED);

    }

    @GetMapping("/allstudents")
    public ResponseEntity<List<StudentDto>> getAllStudents(){
        //call the service function getAllStudents()
        List<StudentDto> studentDtos = studentManagmentService.getAllStudents();
        return new ResponseEntity<>(studentDtos, HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<StudentDto> getStudentById(@PathVariable("id") Long id){
        StudentDto studentDto=studentManagmentService.getStudentById(id);
        return new ResponseEntity<>(studentDto, HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<StudentDto> updateStudent(
            @PathVariable("id") Long id,
            @RequestBody StudentDto studentDto){

        StudentDto studentDto1=studentManagmentService.updateStudent(id, studentDto);
        return new ResponseEntity<>(studentDto1, HttpStatus.OK);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable("id") Long id){
        studentManagmentService.deleteStudent(id);
        return ResponseEntity.ok("Deleted successfully");



    }


}
