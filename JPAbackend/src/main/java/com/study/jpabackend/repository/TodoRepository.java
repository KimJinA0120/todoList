package com.study.jpabackend.repository;

import com.study.jpabackend.entity.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<TodoEntity, Long> {

}
