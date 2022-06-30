import React, { useState } from "react";

function Edit({editTask: {id, name, des, date}, handleUpdateTask}) {

        const [name2,setName2] = useState(name);
        const [des2,setDes2] = useState(des);
        const [date2,setDate2] = useState(date);
        function handleNewTask (){
            handleUpdateTask({id, name: name2, des: des2, date: date2}, id)
        }

        return (
            <form>
                <fieldset>
                    <legend>Update Task:</legend>
                    <label htmlFor="fname">Task name:</label>
                    <input
                        value={name2}
                        type="text"
                        id="fname"
                        name='fname'
                        onChange={e => setName2(e.target.value)}
                    />
                    <br />
                    <label htmlFor="lname">Task Description:</label>
                    <input
                        value={des2}
                        type="text"
                        id="lname"
                        name='lname'
                        onChange={e => setDes2(e.target.value)}
                    />
                    <br />
                    <label htmlFor="date">Date:</label>
                    <input
                        value={date2}
                        type="date"
                        id="date"
                        name='date'
                        onChange={e => setDate2(e.target.value)}
                    />
                    <br />
                    <input value='Edit' type='button' onClick={e => 
                        {
                            e.preventDefault();
                            handleNewTask();
                        }
                        }/>
                   
                </fieldset>
            </form>
        )
}

export default Edit;
