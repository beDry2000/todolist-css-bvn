import React from "react";
import { useState } from "react";
import { Form } from "./components/Form";
import { Task } from "./components/Task";

import Edit from "./components/Edit";

function App() {
  // tao 1 bien luu tru cac gia tri tu Form 
  const [task, setTask] = useState([
    { id: 1, name: 'Quet nha', des: 'Ngay 2 lan', date: '2022-02-14' }
  ])
  function handleSubmit(newTask) {
    setTask([...task, { id: `${task[task.length - 1].id} a`, ...newTask }])
  }
  console.log(task)

  // truyen vao < Task /> de xu ly ra giao dien 
  function handleDelete(id) {
    setTask([...task.filter(job => job.id !== id)])
  }


  const [show, setShow] = useState(false);
  const [editTask, setEditTask] =  useState('');

  function handleEdit(id) {
    setShow(!show);
    const el = task.find(el => el.id == id)
    
    setEditTask(el);
  }
  // la newtask va id tu Edit
  function handleUpdateTask(editedTask, id) {
    const el = task.find(el => el.id == id);
    task.splice(task.indexOf(el), 1, editedTask);
    setTask(task)
    setShow(!show);
  }

  return (
    <>
      <Form handleAdd={handleSubmit} />
      <Task task={task} handleDelete={handleDelete} handleUpdate={handleEdit}/>

      {show && <Edit editTask={editTask} handleUpdateTask={handleUpdateTask}/>}
    </>
  )
}

// const App = () => {
//   const [task, setTask] = useState([
//     { id: 1, name: "1", des: "A", date: "12/02/2022" },
//     { id: 2, name: "2", des: "B", date: "12/03/2022" },
//   ]);



//   function handleSubmit(newTask) {
//     setTask([...task, { ...newTask, id: task[task.length - 1].id + 1 }]);
//   }

//   function handleDelete(id) {
//     setTask([...task.filter((el) => el.id !== id)]);
//   }

//   return (
//     <>
//       <Form handleSubmit={handleSubmit} />
//       <Task task={task} handleDelete={handleDelete} />
//     </>
//   );
// };
export default App;