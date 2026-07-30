import axios from 'axios';

//// 백엔드와 직접 통신하는 곳

// Spring Boot 서버 기본 주소
const API_BASE_URL = 'http://localhost:8080/api/todos';

export const getTodos = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
};

export const createTodo = async (title) => {
    const response = await axios.post(API_BASE_URL, { title, checked: false });
    return response.data;
};

export const deleteTodo = async (id) => {
    await axios.delete(`${API_BASE_URL}/${id}`);
};