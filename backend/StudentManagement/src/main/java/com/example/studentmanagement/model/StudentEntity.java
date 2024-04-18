package com.example.studentmanagement.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "student")
public class StudentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="rollno", nullable = false, unique=true)
    private int rollNo;

    @Column(name="student_name", unique=true)
    private String studentName;

    @Column(name="gender")
    private String gender;

    @Column(name="branch")
    private String branch;

}
