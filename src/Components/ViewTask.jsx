import React from 'react'
//delet
import { MdDeleteForever } from "react-icons/md";
//edit
import { LuClipboardEdit } from "react-icons/lu";


const ViewTask = ({Viewtask, EditTask,DeletTask}) => {
  return (
    <div align="center">
      <h1>view task</h1>
      <div className='tasklist'>
          {
            Viewtask.map((item) => {
              const { id, task, date } = item;
              return (
                <div className="col-12 d-flext p-3" key={id}>
                  <div className="task-L p-3">
                    <h2 className='d-flex flex-start'>{task}</h2>
                    <h5 className='d-flex flex-start'>{date}</h5>
                    <div className="t-btn text-center d-flex justify-content-center">
                      <button onClick={() => EditTask(id)}><LuClipboardEdit /></button>

                      <button onClick={() => DeletTask(id)}><MdDeleteForever /></button>

                    </div>

                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default ViewTask
