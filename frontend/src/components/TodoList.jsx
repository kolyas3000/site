// src/components/TodoList.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/Auth';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const user = useContext(AuthContext);

    const api = axios.create({
        baseURL: 'http://127.0.0.1:8000/api/',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.tokens.access}`
        },
      });
    


    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await api.get('todos/');
        setTodos(response.data);
    };

    const addTodo = async () => {
        if (newTodo.trim() === '') return;
        const response = await api.post('todos/', { title: newTodo, completed: false });
        setTodos([...todos, response.data]);
        setNewTodo('');
    };

    const deleteTodo = async (id) => {
        await api.delete(`todos/${id}/`);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = async (id, completed) => {
        await api.patch(`todos/${id}/`, { completed: !completed });
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !completed } : todo));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add new todo"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id, todo.completed)}
                        />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.title}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;