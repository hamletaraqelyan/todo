import React from 'react';
import "./TodoItem.scss";

const TodoItem = ({todo, onChange, onDelete}) => {

    const handleChange = (e) => {
        onChange({
            ...todo,
            isCompleted: e.target.checked
        })
    }

    const handleDelete = () => {
        onDelete(todo)
    }

    return (
        <div className='todoListItem'>
            <label>
                <input className='checkInput' type="checkbox" checked={todo.isCompleted} onChange={handleChange}/>
                <span className='checkBoxUI'/>
                <span className='todoText'>
                    {todo.text}
                </span>
            </label>
            <button className='todoListItemDelete' onClick={handleDelete}>
                ✕
            </button>
        </div>
    );
};

export default TodoItem;
