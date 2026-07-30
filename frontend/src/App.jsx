import { useState, useEffect } from 'react'
import {getTodos, createTodo, deleteTodo, updateTodo } from './api/todoApi';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // 컴포넌트 마운트 시 백엔드에서 데이터 조회
  useEffect(() => {
    fetchTodos();
  }, []);

  // 전체 목록 조회
  const fetchTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.error('Todo 목록을 불러오는데 실패했습니다:', error);
    } finally {
      setLoading(false);
  }
};

// 할 일 추가
  const handleAdd = async (title) => {
    try {
      const newTodo = await createTodo(title);
      setTodos((prev) => [...prev, newTodo]);
    } catch (error) {
      console.error('Todo 추가 실패:', error);
    }
  };

  // Todo 체크박스 상태 토글
  const handleToggle = async (id, title, checked) => {
    try {
      const updated = await updateTodo(id, title, checked);
      setTodos((prev) => prev.map((todo) => (todo.id === id ? updated : todo))
    );
    } catch (error) {
      console.error('Todo 상태 업데이트 실패:', error);
    }
  };

  // Todo 제목 수정
  const handleUpdateTitle = async (id, newTitle, currentChecked) => {
    try {
      const updated = await updateTodo(id, newTitle, currentChecked);
      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? updated : todo))
      );
    } catch (error) {
      console.error('Todo 제목 수정 실패:', error);
    }
  };


  // 할 일 삭제
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Todo 삭제 실패:', error);
    }
  };

  if (loading) return <p style={{ textAlign: 'center', marginTop: '50px' }}>로딩 중...</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '40px auto', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center' }}>My Todo List</h1>
      <TodoInput onAdd={handleAdd} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onUpdateTitle={handleUpdateTitle}
      />
    </div>
  );
}
export default App;
