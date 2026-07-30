import axios from 'axios';

//// 백엔드와 직접 통신하는 곳

// Spring Boot 서버 기본 주소
const API_BASE_URL = 'http://localhost:8080/api/todos';

// 1. 전체 조회
export const getTodos = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
};

// 2. 단건 조회
export const getTodoById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
};

// 3. 할 일 생성
export const createTodo = async (title) => {
    const response = await axios.post(API_BASE_URL, { title, checked: false }); 
        // 사실 백엔드에서 이미 chcked의 빈값을 false로 처리하는 게 있어서 
        // checked: false는 있어도, 없어도 그만이다
    return response.data;
};

// 4. 할 일 수정 (제목 수정 또는 완료 여부 토글)
export const updateTodo = async (id, title, checked) => {
    const response = await axios.put(`${API_BASE_URL}/${id}`, {
        title: title,
        checked: checked
    });
    return response.data;
};


// 5. 할 일 삭제
export const deleteTodo = async (id) => {
    await axios.delete(`${API_BASE_URL}/${id}`);
};