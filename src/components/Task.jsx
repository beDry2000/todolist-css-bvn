import React from "react";


function Task({ task, handleDelete, handleUpdate }) {
    function handleClick(_, id) {
        handleDelete(id);
    }

    function handleEdit(e, id) {
        
        e.preventDefault();
        const el = task.find(el => el.id = id)
        console.log(el);
        handleUpdate(id);
    }
    
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    task.map(toDo => (
                        <tr key={toDo.id}>
                            <td>{toDo.id}</td>
                            <td>{toDo.name}</td>
                            <td>{toDo.des}</td>
                            <td>{toDo.date}</td>
                            <td>
                                {/* bat buoc fai can e ??? neu thay e -> toDo */}
                                <button onClick={e => handleClick(e, toDo.id)}>Delete</button>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={(event) => handleEdit(event, toDo.id)}
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>

          


        </table>
          </>
    )
}

export { Task };
// const Task = (props) => {
//     function handleClick(e, id) {
//         props.handleDelete(id);
//     }

//     return (
//         <table style={{ border: "#000 solid 1px" }}>
//             <tr>
//                 <th>Id </th>
//                 <th>Task name</th>
//                 <th>Description</th>
//                 <th>Date</th>
//             </tr>
//             {props.task.map((el) => {
//                 return (
//                     <tr key={el.id}>
//                         <td>{el.id}</td>
//                         <td>{el.name}</td>
//                         <td>{el.des}</td>
//                         <td>{el.date}</td>
//                         <td>
//                             <button type="button" onClick={(e) => handleClick(e, el.id)}>
//                                 Delete
//                             </button>
//                         </td>
//                     </tr>
//                 );
//             })}
//         </table>
//     );
// };
// export { Task }