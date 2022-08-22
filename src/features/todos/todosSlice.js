import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

export const todosSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Math.random(),
                text: action.payload.text,
                isCompleted: false
            });
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        completeTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.newTodo.id ? action.payload.newTodo : todo);
        },
        clearCompletedTodos: (state) => {
            state.todos = state.todos.filter(todo => !todo.isCompleted);
        }
    }
});

export const {addTodo, deleteTodo, completeTodo, clearCompletedTodos} = todosSlice.actions;

export const selectTodos = (state) => state.todoList.todos;

export default todosSlice.reducer;
