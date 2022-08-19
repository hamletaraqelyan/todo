export const todoReducer = (state, action) => {
    if (action.type === 'add') {
        return [
            ...state,
            {
                id: Math.random(),
                text: action.payload.text,
                isCompleted: false
            }
        ]
    } else if (action.type === 'delete') {
        return state.filter(item => item.id !== action.payload.id)
    } else if (action.type === 'complete') {
        return state.map(item => item.id === action.payload.newTodo.id ? action.payload.newTodo : item)
    } else if (action.type === 'clearCompleted') {
        return state.filter(item => !item.isCompleted)
    }
}
