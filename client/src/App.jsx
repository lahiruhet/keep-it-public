import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/todo')
      .then(response => setTodos(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:5000/api/todo', { text: newTodo })
      .then(response => {
        setTodos([...todos, response.data]);
        setNewTodo('');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="app-input"
          type="text"
          value={newTodo}
          onChange={event => setNewTodo(event.target.value)}
        />

        <button className="app-button" type="submit">Add</button>
      </form>

      <ul className="app-list">
        {todos.map(todo => (
          <li className="app-item" key={todo._id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
