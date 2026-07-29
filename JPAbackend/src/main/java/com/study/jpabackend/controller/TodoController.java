package com.study.jpabackend.controller;

import com.study.jpabackend.dto.RequestDto;
import com.study.jpabackend.dto.ResponseDto;
import com.study.jpabackend.service.TodoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Todo API", description = "할 일 관리 API")
@RestController
@RequestMapping("/api/todos")
@RequiredArgsConstructor
public class TodoController {
    private final TodoService todoService;

    @Operation(summary = "할 일 생성", description = "새로운 todo 항목을 등록합니다.")
    @PostMapping
    public ResponseEntity<ResponseDto> createTodo(@RequestBody RequestDto rqdto){
        ResponseDto rpdto = todoService.createTodo(rqdto);
        return ResponseEntity.status(HttpStatus.CREATED).body(rpdto);
    }

    @Operation(summary = "할 일 전체 조회", description = "todo 항목을 전체 조회합니다.")
    @GetMapping
    public ResponseEntity<List<ResponseDto>> getAllTodos(){
        return ResponseEntity.ok(todoService.getAllTodos());
    }

    @Operation(summary = "할 일 단건 조회", description = "ID로 특정 todo 항목을 조회합니다.")
    @GetMapping("/{id}")
    public ResponseEntity<ResponseDto> getTodoById(@PathVariable Long id){
        return ResponseEntity.ok(todoService.getTodoById(id));
    }

    @Operation(summary = "할 일 수정", description = "ID로 특정 Todo 항목의 제목이나 완료 여부를 수정합니다.")
    @PutMapping("/{id}")
    public ResponseEntity<ResponseDto> updateTodo(
            @PathVariable Long id, @RequestBody RequestDto rqdto){
        return ResponseEntity.ok(todoService.updateTodo(id, rqdto));
    }

    @Operation(summary = "할 일 삭제", description = "ID로 특정 Todo 항목을 삭제합니다.")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable Long id){
        todoService.deleteTodo(id);
        return ResponseEntity.noContent().build();
    }

}
