import React, { useState } from "react";


function Form(props) {
    // tao cac bien luu tru 
    const [name, setName] = useState('');
    const [des, setDes] = useState('');
    const [date, setDate] = useState('');
    function handleAdd() {
        props.handleAdd({ name, des, date })
    }
    
    // truyen vao ham de luu vao bien o App

    return (
        <form>
            <fieldset>
                <legend>Task to do:</legend>
                <label htmlFor="fname">Task name:</label>
                <input
                    type="text"
                    id="fname"
                    name='fname'
                    onChange={e => {
                        setName(e.target.value);
                    }}

                />{" "}
                <br />
                <label htmlFor="lname">Task Description:</label>
                <input
                    type="text"
                    id="lname"
                    name='lname'
                    onChange={e => setDes(e.target.value)}
                />{" "}
                <br />
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name='date'
                    onChange={e => setDate(e.target.value)}
                />{" "}
                <br />
                {/* nen de handle onsubmit vao dau form */}
                <button onClick={e => {
                    handleAdd();
                    e.preventDefault();
                }}>Submit</button>
            </fieldset>
        </form>
    )

}
export { Form }

// const Form = (props) => {
//     const [name, setName] = useState("");
//     const [des, setDes] = useState("");
//     const [date, setDate] = useState("");

//     function handleSubmit() {
//         props.handleSubmit({ name, des, date });
//     }

//     return (
//         <form
//             onSubmit={(e) => {
//                 handleSubmit();
//                 e.preventDefault();
//             }}
//         >
//             <fieldset>
//                 <legend>Task todo:</legend>
//                 <label htmlFor="fname">Task name:</label>
//                 <input
//                     type="text"
//                     id="fname"
//                     name="fname"
//                     onChange={(e) => setName(e.target.value)}
//                 />{" "}
//                 <br />
//                 <label htmlFor="lname">Description:</label>
//                 <input
//                     type="text"
//                     id="lname"
//                     name="lname"
//                     onChange={(e) => setDes(e.target.value)}
//                 />{" "}
//                 <br />
//                 <label htmlFor="date">Date:</label>
//                 <input
//                     type="date"
//                     id="email"
//                     name="email"
//                     onChange={(e) => setDate(e.target.value)}
//                 />
//                 <input type="submit" value="Submit" />
//             </fieldset>
//         </form>
//     );
// };
// export { Form };