import React from 'react';
import "./TodoHeader.scss";
import {ReactComponent as DarkThemeIcon} from '../../media/icons/darkThemeIcon.svg';
import {ReactComponent as LightThemeIcon} from '../../media/icons/lightThemeIcon.svg';

const TodoHeader = ({darkTheme, switchTheme}) => {
    return (
        <div className='todoHeader'>
            TODO
            <button onClick={switchTheme} title={`Switch to ${darkTheme ? 'light theme' : 'dark theme'}`}>
                {darkTheme ?
                    <LightThemeIcon/>
                    :
                    <DarkThemeIcon/>
                }
            </button>
        </div>
    );
};

export default TodoHeader;
