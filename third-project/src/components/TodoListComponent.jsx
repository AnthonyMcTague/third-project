import React, { useState } from 'react';
import './TodoList.css';

const TodoListComponent = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleTodoClick = (index) => {
    setSelectedTodo(index === selectedTodo ? null : index);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'incomplete') {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return (
    <div className="todo-list">
      <div className="todo-sidebar">
        <h2>To do List</h2>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new to do"
        />
        <button className="add-button" onClick={handleAddTodo}>
          Add
        </button>
        <div className="filter-buttons">
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('completed')}>Completed</button>
          <button onClick={() => setFilter('incomplete')}>Incomplete</button>
        </div>
        <ul>
          {filteredTodos.map((todo, index) => (
            <li key={index} className={todo.completed ? 'completed' : ''}>
              <span
                onClick={() => handleToggleTodo(index)}
                className="todo-text"
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              >
                {todo.text}
              </span>
              <button className="remove-button" onClick={() => handleRemoveTodo(index)}>
                X
              </button>
              <button className="expand-button" onClick={() => handleTodoClick(index)}>
                {selectedTodo === index ? 'Collapse' : 'Expand'}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedTodo !== null && (
        <div className="additional-content">
          <h3>Additional Content</h3>
          <textarea
            value={todos[selectedTodo]?.additionalContent || ''}
            onChange={(e) => {
              const updatedTodos = [...todos];
              updatedTodos[selectedTodo].additionalContent = e.target.value;
              setTodos(updatedTodos);
            }}
          />
          <button className="collapse-button" onClick={() => setSelectedTodo(null)}>
            Collapse
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoListComponent;

