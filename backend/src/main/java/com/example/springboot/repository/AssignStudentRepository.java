package com.example.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.model.AssignStudent;

@Repository
public interface AssignStudentRepository extends JpaRepository<AssignStudent, Long> {

}
