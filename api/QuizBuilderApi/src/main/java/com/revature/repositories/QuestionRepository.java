package com.revature.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer>{

	List<Question> findByCategoryIdCategoryName(String categoryName);
	
}