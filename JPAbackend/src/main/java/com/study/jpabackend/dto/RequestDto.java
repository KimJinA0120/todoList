package com.study.jpabackend.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RequestDto {
    /// 클라이언트(프론트엔드) -> 서버(백엔드)
    private String title;
    private boolean checked;
}
