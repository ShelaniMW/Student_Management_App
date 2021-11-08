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
import com.example.springboot.model.Class;
import com.example.springboot.repository.ClassRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class ClassController {
	
	@Autowired
	private ClassRepository classRepository;
	
	//read all classes
	@GetMapping("/classes")
	public List<Class> getAllClasses(){
		return classRepository.findAll();
	}
	
	//Get class by id
	@GetMapping("/classes/{id}")
	public ResponseEntity<Class> geClassById(@PathVariable Long id) 
			throws ResourceNotFoundException{
		Class c = classRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Class not exist with id : " + id));
			return ResponseEntity.ok().body(c);
	}
	
	//create class
	@PostMapping("/classes")
	public Class createClass(@RequestBody Class c) {
		return classRepository.save(c);
	}
	
	//update class
	@PutMapping("/classes/{id}")
	public ResponseEntity<Class> updateClass(@PathVariable Long id,@RequestBody Class classDetails)
			throws ResourceNotFoundException{
		
		Class c = classRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Class not exist with id : " + id));
		c.setClassName(classDetails.getClassName());
		c.setLocation(classDetails.getLocation());
		


		Class updatedclass = classRepository.save(c);
		return ResponseEntity.ok(updatedclass);
	}
	
	//Delete class
	@DeleteMapping("/classes/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteClass(@PathVariable Long id)
			throws ResourceNotFoundException{
				Class c = classRepository.findById(id)
						.orElseThrow(() -> new ResourceNotFoundException("Class not exist with id : " + id));
				
				classRepository.delete(c);
				
				Map<String, Boolean> response = new HashMap<>();
				response.put("deleted", Boolean.TRUE);
				return ResponseEntity.ok(response);
			}

}
