package com.example.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.springboot.model.Class;

@Repository
public interface ClassRepository extends JpaRepository<Class, Long>{

}
