
"use client";

import React, { useState, useEffect } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTodo(data);
      } catch (error) {
        throw(error);
      }
    };

    fetchTodo();
  }, []); 

  if (!todo) {
    return <p>No data found</p>;
  }

  return (
    <div>
      <h1>Todo Item</h1>
      <p>User ID: {todo.userId}</p>
      <p>ID: {todo.id}</p>
      <p>Title: {todo.title}</p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default Todo;
