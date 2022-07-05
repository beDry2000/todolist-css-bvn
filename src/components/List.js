import useTodoContext from './hooks'
import TodoItem from './TodoItem'
function List() {
    const listData = useTodoContext();
    const { todos } = listData

    return (
        <div className='item-container'>
            {
                todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} index={index}/>
                ))
            }
        </div>
    )
}
export default List;