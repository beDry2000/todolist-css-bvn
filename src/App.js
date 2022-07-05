import AddTodo from './components/AddTodo'
import List from './components/List'
import './App.css'
function App() {
  return (
    <div style={{ pading: '20px 40px' }}
        className='todoApp'
    >
        <AddTodo />
        <List />
    </div>
  )
}
export default App;