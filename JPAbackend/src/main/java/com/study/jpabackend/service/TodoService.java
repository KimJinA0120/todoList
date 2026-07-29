package com.study.jpabackend.service;

import com.study.jpabackend.dto.RequestDto;
import com.study.jpabackend.dto.ResponseDto;
import com.study.jpabackend.entity.TodoEntity;
import com.study.jpabackend.mapper.TodoMapper;
import com.study.jpabackend.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TodoService {
    private final TodoRepository todoRepository;
    private final TodoMapper todoMapper;

    @Transactional
    public ResponseDto createTodo(RequestDto rqdto) {
        TodoEntity todo = todoMapper.toEntity(rqdto);
        TodoEntity savetodo = todoRepository.save(todo);
        return todoMapper.toDto(savetodo);
    }

    public List<ResponseDto> getAllTodos() {
        List<TodoEntity> todos = todoRepository.findAll();
        return todoMapper.toDtoList(todos);
    }

    public ResponseDto getTodoById(Long id) {
        TodoEntity todo = todoRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("해당 Todo가 존재하지 않습니다. id=" + id));
        return todoMapper.toDto(todo);
    }

    @Transactional
    public ResponseDto updateTodo(Long id, RequestDto rqdto) {
        TodoEntity todo = todoRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("해당 Todo가 존재하지 않습니다. id=" + id));
        todo.update(rqdto.getTitle(), rqdto.isChecked());

        return todoMapper.toDto(todo);
    }

    @Transactional
    public void deleteTodo(Long id) {
        TodoEntity todo = todoRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("해당 Todo가 존재하지 않습니다. id=" + id));
        todoRepository.delete(todo);
    }
}
