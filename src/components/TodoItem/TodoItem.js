import React from 'react';
import "./TodoItem.scss";
import {useDispatch} from "react-redux";
import {completeTodo, deleteTodo} from "../../features/todos/todosSlice";

const TodoItem = ({todo}) => {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const completed = {
            ...todo,
            isCompleted: e.target.checked
        }
        dispatch(completeTodo({newTodo: completed}))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(todo))
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
