package com.study.jpabackend.mapper;

import com.study.jpabackend.dto.RequestDto;
import com.study.jpabackend.dto.ResponseDto;
import com.study.jpabackend.entity.TodoEntity;
import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;

import java.util.List;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface TodoMapper {
    TodoEntity toEntity(RequestDto rqdto);

    ResponseDto toDto(TodoEntity savetodo);

    List<ResponseDto> toDtoList(List<TodoEntity> todos);
}
