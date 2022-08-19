import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";

const TodoList = ({todos, onChange, onDelete}) => {
    return (
        <div className='todoList'>
            {todos.map((todo) =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onChange={onChange}
                    onDelete={onDelete}
                />
            )}
        </div>
    );
};

export default TodoList;
