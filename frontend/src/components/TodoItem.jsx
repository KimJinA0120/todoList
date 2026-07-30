import { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete, onUpdateTitle }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.title);

    // 수정 완료 저장
    const handleSave = () => {
        if (!editText.trim()) return; // 빈 문자열이면 저장하지 않음
        onUpdateTitle(todo.id, editText, todo.checked);
        setIsEditing(false);
    };

    // 날짜 포맷 함수 (YYYY-MM-DD)
    const formatDate = (dateString) => {
        if (!dateString) return '';
        return dateString.split('T')[0]; // 'T'를 기준으로 분리하여 날짜 부분만 반환
    };

return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 0',
        borderBottom: '1px solid #eee',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
        {/* 완료 여부 체크박스 (checked 필드 사용) */}
        <input
          type="checkbox"
          checked={todo.checked || false}
          onChange={() => onToggle(todo.id, todo.title, !todo.checked)}
        />

        {/* 수정 모드와 일반 표시 모드 분기 */}
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            style={{ padding: '4px 8px', flex: 1, marginRight: '10px' }}
          />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                textDecoration: todo.checked ? 'line-through' : 'none',
                color: todo.checked ? '#aaa' : '#000',
                fontSize: '16px',
              }}
            >
              {todo.title}
            </span>
            {/* 생성 날짜 표시 */}
            {todo.createdAt && (
              <span style={{ fontSize: '11px', color: '#999', marginTop: '2px' }}>
                {formatDate(todo.createdAt)}
              </span>
            )}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '5px' }}>
        {isEditing ? (
          <>
            <button onClick={handleSave}>저장</button>
            <button onClick={() => setIsEditing(false)}>취소</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>수정</button>
            <button onClick={() => onDelete(todo.id)}>삭제</button>
          </>
        )}
      </div>
    </li>
  );

}

export default TodoItem;