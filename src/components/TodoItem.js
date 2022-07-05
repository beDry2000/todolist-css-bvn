import useTodoContext from './hooks';

function TodoItem({ todo, index }) {
    const listData = useTodoContext();
    const { handleDel } = listData;
    console.log(index, todo);


    return (
        <div className='todoItem'>

            <input
                id={index}
                type='checkbox'
            />
            <label
                htmlFor={index}
                className='task'
            >{todo}
            </label>
            <button
                className='btn'
                onClick={() => handleDel(index)}
            >Delete
            </button>
        </div>
    )

}
export default TodoItem;