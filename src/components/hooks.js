import { useContext} from 'react'
import TodoContext from './Context.js'

function useTodoContext() {
    return useContext(TodoContext);
}
export default useTodoContext;