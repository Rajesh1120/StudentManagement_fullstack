package com.example.studentmanagement.DTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@Data
@NoArgsConstructor
public class StudentDto {

    private Long id;
    private int rollNo;
    private String studentName;
    private String gender;
    private String branch;
}
