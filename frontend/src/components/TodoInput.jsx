import { useState } from 'react';

function TodoInput({ onAdd }) {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text);
        setText('');
    };

    return (
        <form onSubmit={handleChange} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="할 일을 입력하세요"
                style={{ padding: '8px', width: '250px', marginRight: '8px' }}
            />
            <button type="submit" style={{ padding: '8px 16px' }}>
                추가
            </button>
        </form>
    );
}

export default TodoInput;