import React from 'react';
import "./TodoItem.scss";
import {useDispatch} from "react-redux";
import {completeTodo, deleteTodo} from "../../features/todos/todosSlice";

const TodoItem = ({todo}) => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const edited = {
            ...todo,
            isCompleted: e.target.checked
        };
        dispatch(completeTodo(edited));
    }

    return (
        <div className='todoListItem'>
            <label title='Check as done'>
                <input className='checkInput' type="checkbox" checked={todo.isCompleted} onChange={handleChange}/>
                <span className='checkBoxUI'/>
                <span className='todoText'>
                    {todo.text}
                </span>
            </label>
            <button className='todoListItemDelete' onClick={() => dispatch(deleteTodo(todo))} title={`Delete todo`}>
                ✕
            </button>
        </div>
    );
};

export default TodoItem;
