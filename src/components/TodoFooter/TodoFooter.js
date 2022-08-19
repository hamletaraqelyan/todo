import React from 'react';
import "./TodoFooter.scss";

const TodoFooter = ({todos, onClearCompleted}) => {
    const completedSize = todos.filter(todo => todo.isCompleted).length;
    return (
        <div className='todoFooter'>
            <span>{completedSize}/{todos.length} Completed</span>
            <button onClick={onClearCompleted}>Clear completed</button>
        </div>
    );
};

export default TodoFooter;
