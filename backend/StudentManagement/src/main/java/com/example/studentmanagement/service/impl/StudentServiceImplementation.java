package com.example.studentmanagement.service.impl;

import com.example.studentmanagement.DTO.StudentDto;
import com.example.studentmanagement.DTO.StudentMapper;
import com.example.studentmanagement.exception.ResourceNotFoundExpection;
import com.example.studentmanagement.model.StudentEntity;
import com.example.studentmanagement.repository.StudentManagementRepository;
import com.example.studentmanagement.service.StudentManagmentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class StudentServiceImplementation implements StudentManagmentService {

    private StudentManagementRepository studentManagementRepository;

    @Override
    public StudentDto addStudent(StudentDto studentDto) {
        //call to  repository to database by dtoMapper which return the studentEntity
        StudentEntity studentEntity= StudentMapper.mapToStudentEntity(studentDto);
        // save that data in database which return Studententity
        StudentEntity savedStudent=studentManagementRepository.save(studentEntity);

        //return the in studentDto format
        return StudentMapper.mapToStudentDto(savedStudent);
    }

    @Override
    public List<StudentDto> getAllStudents() {
        List<StudentEntity> studentEntityList=studentManagementRepository.findAll();
        return studentEntityList.stream().map((student) -> StudentMapper.mapToStudentDto(student))
                .collect(Collectors.toList());


    }

    @Override
    public StudentDto getStudentById(Long id) {
        //call to repository(studententity) to find the given id
        StudentEntity student = studentManagementRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundExpection("Id not Exists"));
        // the data is in studententity(database) => to service form we have to convert the dto
        return StudentMapper.mapToStudentDto(student);
    }

    @Override
    public StudentDto updateStudent(Long id, StudentDto studentDto) {
        StudentEntity updateStudentEntity=studentManagementRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundExpection("Id not Exists"));

        updateStudentEntity.setBranch(studentDto.getBranch());
        updateStudentEntity.setGender(studentDto.getGender());
        updateStudentEntity.setStudentName(studentDto.getStudentName());
        updateStudentEntity.setRollNo(studentDto.getRollNo());

        StudentEntity studentEntity = studentManagementRepository.save(updateStudentEntity);
        return StudentMapper.mapToStudentDto(studentEntity);
    }

    @Override
    public void deleteStudent(Long id) {
        if(studentManagementRepository.existsById(id)) {
            StudentEntity studentEntity=studentManagementRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundExpection("Id not Exists"));
            studentManagementRepository.delete(studentEntity);
        }

    }

}
