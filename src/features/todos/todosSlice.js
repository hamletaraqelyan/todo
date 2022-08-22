export const initialTodos = [
    {
        id: Math.random(),
        text: "Learn JavaScript",
        isCompleted: false
    },
    {
        id: Math.random(),
        text: "Learn CSS",
        isCompleted: false
    },
    {
        id: Math.random(),
        text: "Learn React.js",
        isCompleted: false
    }
];

export const todosReducer = (state = [], action) => {
    if (action.type === 'todo-add') {
        return [
            ...state,
            {
                id: Math.random(),
                text: action.payload.text,
                isCompleted: false
            }
        ]
    } else if (action.type === 'todo-delete') {
        return state.filter(item => item.id !== action.payload.id)
    } else if (action.type === 'todo-complete') {
        return state.map(item => item.id === action.payload.id ? action.payload : item)
    } else if (action.type === 'todo-clearCompleted') {
        return state.filter(item => !item.isCompleted)
    }
    return state;
};

export const selectTodos = state => state.todos;

export const completeTodo = (editedTodo) => ({
    type: "todo-complete",
    payload: editedTodo
})

export const deleteTodo = (todo) => ({
    type: "todo-delete",
    payload: todo
})

export const addTodo = (text) => ({
    type: 'todo-add',
    payload: {
        text: text
    }
})

export const clearCompletedTodo = () => ({
    type: 'todo-clearCompleted'
})
