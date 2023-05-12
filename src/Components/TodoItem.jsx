import React from 'react';

const TodoItem = ({completed, id, title, toggleTodo, deleteTodo}) => {
    return (
        <li >
        <label htmlFor={id}>
          <input type="checkbox" checked={completed} id={id} onChange={event => toggleTodo(id, event.target.checked)}/>
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
      </li>
    );
};

export default TodoItem;