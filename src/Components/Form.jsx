import React from 'react';
import { useState } from 'react';

const Form = ({addTodo}) => {
    const [newItem, setNewItem] = useState('');

    function handleSubmit(event) {
        //^ prevent reload/refresh
        event.preventDefault();
    
        // //^ Add todos when user clicks add
        // //* if you want to use the current value of a state you should pass a function to the set method
        if(newItem === "") return
        addTodo(newItem);
    
        //^ Emptying the input after adding
        setNewItem('');
      }
    return (
        <div>
            <form action="" onSubmit={handleSubmit} className="new-item-form">
                <div className="form-row">
                    <label htmlFor="item">New Item</label>
                    <input value={newItem} onChange={event => setNewItem(event.target.value)} type="text" id="item"/>
                </div>
                <button className="btn">Add</button>
            </form>
        </div>
    );
};

export default Form;