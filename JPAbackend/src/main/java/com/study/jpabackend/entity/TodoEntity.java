package com.study.jpabackend.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "todo")
public class TodoEntity extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(nullable = false)
    private boolean checked;

    @Builder
    public TodoEntity(String title, boolean checked){
        this.title = title;
        this.checked = checked;
    }

    public void toggleChecked(){
        this.checked = !this.checked;

    }

    public void update(String title, boolean checked) {
        this.title = title;
        this.checked = checked;
    }
}
