import React, { useState } from 'react'
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';


function Todo() {
    const [todos, setTodos] = useState([]);

    const handleClick = (text) => {
        const newItem = {
            title: text,
            status: false,
            id: Date.now() + text + Math.random(),
        }
        const todolistAfterNewitemAddtion = [...todos, newItem];
        setTodos(todolistAfterNewitemAddtion);
    }

    const handleToggle = (id) => {
        const todoAAfterUpdation = todos.map((todo) => (
            todo.id === id ? { ...todo, status: !todo.status } : todo
        ));
        setTodos(todoAAfterUpdation)
    }

    const handleDelete = (id) => {
        const todoAfterDeletion = todos.filter((todo) => (
            todo.id !== id 
        ))
        setTodos(todoAfterDeletion)
    }
    console.log(todos)
    return (
        <div>
            <AddTodo handleClick={handleClick} />
            <div>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        title={todo.title}
                        status={todo.status}
                        id={todo.id}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete} />
                ))}
            </div>
        </div>
    )
}

export default Todo
