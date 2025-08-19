
import './TodoListIndex.css';


const TodoListIndex = () => {
  return (
    <div className="todo-container">
      <h1 className="todo-title">Quản lý công việc</h1>
      <div className="todo-add-row">
        <input
          className="todo-input"
          placeholder="Thêm công việc"
          value=""
          readOnly
        />
        <button className="todo-add-btn" disabled>THÊM</button>
      </div>
      <div className="todo-tabs">
        <span className="todo-tab todo-tab-active">TẤT CẢ CÔNG VIỆC</span>
        <div className="todo-tab-underline"></div>
      </div>
      <ul className="todo-list">
        <li className="todo-item completed">
          <label className="todo-checkbox-label">
            <input type="checkbox" checked readOnly />
            <span className="todo-text">Cras justo odio</span>
          </label>
          <div className="todo-actions">
            <button className="todo-action-btn edit" title="Sửa" disabled>
              <svg width="18" height="18" fill="#29b6f6" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25zm17.71-10.04a1.003 1.003 0 0 0 0-1.42l-2.5-2.5a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            </button>
            <button className="todo-action-btn delete" title="Xóa" disabled>
              <svg width="18" height="18" fill="#e53935" viewBox="0 0 24 24"><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-4.5l-1-1z"/></svg>
            </button>
          </div>
        </li>
        <li className="todo-item">
          <label className="todo-checkbox-label">
            <input type="checkbox" readOnly />
            <span className="todo-text">Cras justo odio</span>
          </label>
          <div className="todo-actions">
            <button className="todo-action-btn edit" title="Sửa" disabled>
              <svg width="18" height="18" fill="#29b6f6" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25zm17.71-10.04a1.003 1.003 0 0 0 0-1.42l-2.5-2.5a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            </button>
            <button className="todo-action-btn delete" title="Xóa" disabled>
              <svg width="18" height="18" fill="#e53935" viewBox="0 0 24 24"><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-4.5l-1-1z"/></svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodoListIndex;