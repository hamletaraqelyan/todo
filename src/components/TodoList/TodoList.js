import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";
import {useSelector} from "react-redux";
import {selectTodos} from "../../features/todos/todosSlice";

const TodoList = () => {
    const todos = useSelector(selectTodos);
    return (
        <div className='todoList'>
            {todos.map((todo) =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                />
            )}
        </div>
    );
};

export default TodoList;
