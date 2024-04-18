package com.example.studentmanagement.repository;

import com.example.studentmanagement.model.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentManagementRepository extends JpaRepository<StudentEntity, Long> {

}
