import TodoContext from "./Context";
import { useState } from 'react';

function ContextProvider({ children }) {
    const [todos, setTodos] = useState([]);
    // function 

    function handleAdd(todo) {
        setTodos(prev => ([
            ...prev,
            todo
        ]))
    }
    function handleDel(index) {
        const newTodos = todos.filter((_, ind) => ind !== index)
        setTodos(newTodos);
    }

    const value = {
        todos,
        handleAdd,
        handleDel
    }

    return (
        <TodoContext.Provider
            value={value}
        >
            {children}
        </TodoContext.Provider>
    )
}

export default ContextProvider;