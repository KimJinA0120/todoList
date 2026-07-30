import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete, onUpdateTitle }) {
    if (todos.length === 0){
        return <p style={{ color: '#888' }}>등록된 할 일이 없습니다.</p>
    }
    
    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onUpdateTitle={onUpdateTitle}
                />
            ))}
        </ul>
    );
}

export default TodoList;