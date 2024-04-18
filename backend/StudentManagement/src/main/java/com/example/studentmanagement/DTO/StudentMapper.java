package com.example.studentmanagement.DTO;

import com.example.studentmanagement.model.StudentEntity;

public class StudentMapper {

    // This mapper is used for map(transfers the data) from the repository layer and database
    // service layer database which have only one user data to transfer
    public static StudentDto mapToStudentDto(StudentEntity studentEntity) {
        return new StudentDto(
                studentEntity.getId(),
                studentEntity.getRollNo(),
                studentEntity.getStudentName(),
                studentEntity.getGender(),
                studentEntity.getBranch()
        );
    }

    //Database values can access here
    public static StudentEntity mapToStudentEntity(StudentDto studentDto) {
        return new StudentEntity(
                studentDto.getId(),
                studentDto.getRollNo(),
                studentDto.getStudentName(),
                studentDto.getGender(),
                studentDto.getBranch()
        );
    }
}
