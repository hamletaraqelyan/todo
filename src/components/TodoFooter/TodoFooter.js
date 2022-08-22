import React from 'react';
import "./TodoFooter.scss";
import {useDispatch} from "react-redux";
import {clearCompletedTodos} from "../../features/todos/todosSlice";

const TodoFooter = ({todos}) => {
    const dispatch = useDispatch();

    const completedSize = todos.filter(todo => todo.isCompleted).length;

    const handleClearCompleted = () => {
        dispatch(clearCompletedTodos())
    }

    return (
        <div className='todoFooter'>
            <span>{completedSize}/{todos.length} Completed</span>
            <button onClick={handleClearCompleted}>Clear completed</button>
        </div>
    );
};

export default TodoFooter;
