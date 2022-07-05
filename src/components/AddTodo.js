import useTodoContext from './hooks.js';
import { useState } from 'react';


function AddTodo() {
    const [todo, setTodo] = useState('');
    const { handleAdd } = useTodoContext();
    const handleInput = () => {
        setTodo('');
        document.getElementById('userInput').focus();
        handleAdd(todo);
    }

    console.log('Todo o Add: ', todo)

    return (
        <div className='addtodo'>
            <input
                id='userInput'
                value={todo}
                placeholder='Enter todo ...'
                onChange={e => setTodo(e.target.value)}
            />
            <button
                onClick={handleInput}
                className='btn'
            >Add
            </button>
        </div>
    )

}
export default AddTodo;

