import {useState} from "react";
import './styles/App.scss';
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoFooter from "./components/TodoFooter/TodoFooter";
import TodoHeader from "./components/TodoHeader/TodoHeader";

function App() {
    const [darkTheme, setDarkTheme] = useState(window?.matchMedia('(prefers-color-scheme: dark)').matches);

    const switchTheme = () => {
        setDarkTheme(!darkTheme);
    }

    return (
        <div className={`App ${darkTheme ? 'dark' : 'light'}`}>
            <div className='todo'>
                <TodoHeader darkTheme={darkTheme} switchTheme={switchTheme}/>
                <TodoForm/>
                <TodoList/>
                <TodoFooter/>
            </div>
        </div>
    );
}

export default App;
