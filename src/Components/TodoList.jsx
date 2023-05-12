import React from 'react';
import { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, deleteTodo, toggleTodo}) => {
    return (
        <div>
            <ul className="list">
      {todos.map((todo) => <TodoItem {...todo} key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>)}
    </ul>
        </div>
    );
};

export default TodoList;