package com.study.jpabackend.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class ResponseDto {
    ///  서버(백엔드) -> 클라이언트
    private Long id;
    private String title;
    private boolean checked;
    private LocalDateTime createdAt;
    private LocalDateTime updateAt;
}
