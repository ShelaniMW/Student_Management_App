package com.example.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.springboot.exception.ResourceNotFoundException;

import com.example.springboot.model.Student;

import com.example.springboot.repository.StudentRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class StudentController {
	
	@Autowired
	private StudentRepository studentRepository;
	
	//read all students
	@GetMapping("/students")
	public List<Student> getAllStudents(){
		return studentRepository.findAll();
	}
	
	//Get class by id
		@GetMapping("/students/{id}")
		public ResponseEntity<Student> geStudentById(@PathVariable Long id) 
				throws ResourceNotFoundException{
			Student student = studentRepository.findById(id)
						.orElseThrow(() -> new ResourceNotFoundException("Student not exist with id : " + id));
				return ResponseEntity.ok().body(student);
		}
		
		//create student
		@PostMapping("/students")
		public Student createStudent(@RequestBody Student student) {
			return studentRepository.save(student);
		}
		
		//update student
		@PutMapping("/students/{id}")
		public ResponseEntity<Student> updateStudent(@PathVariable Long id,@RequestBody Student studentDetails)
				throws ResourceNotFoundException{
			
			Student student = studentRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Student not exist with id : " + id));
			student.setStudentName(studentDetails.getStudentName());
			student.setAddress(studentDetails.getAddress());
			student.setEmail(studentDetails.getEmail());
			student.setPhone(studentDetails.getPhone());
			


			Student updatedStudent = studentRepository.save(student);
			return ResponseEntity.ok(updatedStudent);
		}
		
		//Delete student
		@DeleteMapping("/students/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Long id)
				throws ResourceNotFoundException{
			Student student = studentRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Student not exist with id : " + id));
			
			studentRepository.delete(student);
			
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		}	
			


