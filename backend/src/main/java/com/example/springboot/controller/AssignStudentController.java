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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.springboot.exception.ResourceNotFoundException;
import com.example.springboot.model.AssignStudent;
import com.example.springboot.repository.AssignStudentRepository;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class AssignStudentController {
		
	@Autowired
	private AssignStudentRepository assignStudentRepository;
	
	//read all records
	@GetMapping("/records")
	public List<AssignStudent> getAllrecords(){
		return assignStudentRepository.findAll();
	}
	
	//Get records by id
	@GetMapping("/records/{id}")
	public ResponseEntity<AssignStudent> getRecordsById(@PathVariable Long id) 
			throws ResourceNotFoundException{
		AssignStudent s = assignStudentRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Record not exist with id : " + id));
			return ResponseEntity.ok().body(s);
	}
	
	//create record
		@PostMapping("/records")
		public AssignStudent createRecord(@RequestBody AssignStudent s) {
			return assignStudentRepository.save(s);
		}
	
	
	//Delete record
		@DeleteMapping("/records/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteRecord(@PathVariable Long id)
				throws ResourceNotFoundException{
					AssignStudent s = assignStudentRepository.findById(id)
							.orElseThrow(() -> new ResourceNotFoundException("Record not exist with id : " + id));
					
					assignStudentRepository.delete(s);
					
					Map<String, Boolean> response = new HashMap<>();
					response.put("deleted", Boolean.TRUE);
					return ResponseEntity.ok(response);
				}
	

}
