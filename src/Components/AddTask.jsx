import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
//plus
import { FaPlus } from "react-icons/fa";
//edit
import { LuClipboardEdit } from "react-icons/lu";

const AddTask = ({Addtask,editid,single,UpdateTask,Viewtask, EditTask}) => {
    const [task,setTask] = useState("");

    useEffect(()=>{
        setTask(single.task);
    },[single])

    const hendleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id: Date.now(),
            task,
            date: new Date().toLocaleDateString(),
        }
        if(!task){
            alert("Please enter a task")
            return false;
        }
        if(editid){
            UpdateTask(obj);
        }else{
            Addtask(obj);
        }
        
        setTask("");

    }
  return (
   <>
    <div align="center" >
      <h1>TODO App</h1>

      <div className="input-f">
          <form action="" className='d-flex' onSubmit={hendleSubmit}>
            <input className='input ps-2' placeholder='Add New Task' type="text" onChange={(e) => setTask(e.target.value)} value={task || ""} />
            <div className="i-btn">

              {
                editid ? ( <button type="submit"><LuClipboardEdit /></button>) : ( <button type="submit"><FaPlus /></button>)
              }

            </div>
          </form>
        </div>
    </div>
   </>
  )
}

export default AddTask
