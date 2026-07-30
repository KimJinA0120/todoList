import { useState, useEffect } from 'react'
import {getTodos, createTodo, deleteTodo} from './api/todoApi';
import TodoInput from './components/TodoInput';


function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // 컴포넌트 마운트 시 백엔드에서 데이터 조회
  useEffect(() => {
    fetchTodos();
  }, []);

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

  // 할 일 삭제
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Todo 삭제 실패:', error);
    }
  };

  if (loading) return <p>로딩 중...</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>My Todo List</h1>
      <TodoInput onAdd={handleAdd} />
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 0',
              borderBottom: '1px solid #ddd',
            }}
          >
            <span>{todo.title}</span>
            <button onClick={() => handleDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
