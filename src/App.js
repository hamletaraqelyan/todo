import {Fragment, useState} from "react";
import './styles/App.scss';
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoFooter from "./components/TodoFooter/TodoFooter";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import {useSelector} from "react-redux";
import {selectTodos} from "./features/todos/todosSlice";

function App() {
    const [darkTheme, setDarkTheme] = useState(window?.matchMedia('(prefers-color-scheme: dark)').matches);
    const todos = useSelector(selectTodos);

    const switchTheme = () => {
        setDarkTheme(!darkTheme);
    }

    return (
        <div className={`App ${darkTheme ? 'dark' : 'light'}`}>
            <div className='todo'>
                <TodoHeader darkTheme={darkTheme} switchTheme={switchTheme}/>
                <TodoForm/>
                {todos?.[0] &&
                    <Fragment>
                        <TodoList todos={todos}/>
                        <TodoFooter todos={todos}/>
                    </Fragment>
                }
            </div>
        </div>
    );
}

export default App;
