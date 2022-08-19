import {useReducer, useState} from "react";
import './styles/App.scss';
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoFooter from "./components/TodoFooter/TodoFooter";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import {todoReducer} from "./reducers/todoReducer";

function App() {
    const [darkTheme, setDarkTheme] = useState(window?.matchMedia('(prefers-color-scheme: dark)').matches);
    const [todos, dispatch] = useReducer(todoReducer, [
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
    ]);

    const switchTheme = () => {
        setDarkTheme(!darkTheme);
    }

    return (
        <div className={`App ${darkTheme ? 'dark' : 'light'}`}>
            <div className='todo'>
                <TodoHeader darkTheme={darkTheme} switchTheme={switchTheme}/>
                <TodoForm
                    onAdd={(text) => {
                        dispatch({
                            type: 'add',
                            payload: {
                                text: text
                            }
                        })
                    }}/>
                <TodoList todos={todos}
                          onDelete={(todo) => {
                              dispatch({
                                  type: 'delete',
                                  payload: {
                                      id: todo.id
                                  }
                              })
                          }}
                          onChange={(newTodo) => {
                              dispatch({
                                  type: 'complete',
                                  payload: {
                                      newTodo: newTodo
                                  }
                              })
                          }}
                />
                <TodoFooter todos={todos} onClearCompleted={() => {
                    dispatch({
                        type: 'clearCompleted',
                        payload: ''
                    })
                }}/>
            </div>
        </div>
    );
}

export default App;
