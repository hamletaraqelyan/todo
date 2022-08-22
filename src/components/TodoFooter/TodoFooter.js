import React from 'react';
import "./TodoFooter.scss";
import {useDispatch, useSelector} from "react-redux";
import {clearCompletedTodo, selectTodos} from "../../features/todos/todosSlice";

const TodoFooter = () => {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();

    const completedSize = todos.filter(todo => todo.isCompleted).length;

    return (
        <div className='todoFooter'>
            <span>{completedSize}/{todos.length} Completed</span>
            <button onClick={() => dispatch(clearCompletedTodo())}>Clear completed</button>
        </div>
    );
};

export default TodoFooter;
