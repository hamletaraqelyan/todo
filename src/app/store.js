import {createStore, combineReducers} from 'redux';
import {initialTodos, todosReducer} from "../features/todos/todosSlice";

const initialState = {
    todos: initialTodos,
};

const store = createStore(combineReducers({
    todos: todosReducer,
}), initialState);

export default store;
