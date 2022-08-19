import React, {useState} from 'react';
import "./TodoForm.scss";

const TodoForm = ({onAdd}) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            onAdd(text.trim());
            setText('');
        }
    }

    const handleChange = (e) => {
        setText(e.target.value)
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='todoForm'
        >
            <input placeholder='Add new todo...' type="text" value={text} onChange={handleChange}/>
            <button>+</button>
        </form>
    );
};

export default TodoForm;
