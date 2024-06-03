import AddTask from "./Components/AddTask"
import ViewTask from "./Components/ViewTask"
import { useState } from 'react'
import './style.css'

function App() {
const AllT = JSON.parse(localStorage.getItem("task")) ? JSON.parse(localStorage.getItem("task")) : []
 const [alltask,setAlltask] = useState(AllT);
 const [single,setSingle] = useState("");
 const [editid,setEditid] = useState("");

  const Addtask = (data) =>{
      let All = [...alltask,data];
      localStorage.setItem("task",JSON.stringify(All));
      setAlltask(All);

  }

  // Delet
  const DeletTask =(id) =>{
    let DeletT = alltask.filter((item)=> item.id !== id);
    localStorage.setItem("task",JSON.stringify(DeletT));
    setAlltask(DeletT);
    alert("delet...")
    return false;
  }

  const EditTask =(id) =>{
    let All = [...alltask];
    let s = All.find((val) => val.id === id);
    setSingle(s);
    setEditid(id);
    
  }
  const UpdateTask = (data) =>{
    let All = [...alltask];
    let UpTask = All.map((val) =>{
      if(val.id === editid){
        val.task = data.task
      }
      return val;
    })
    localStorage.setItem("task",JSON.stringify(UpTask));
    setAlltask(UpTask);
    setEditid("");
    setSingle("");
  }

  return (
   <>
   <div className='todo'>
  <div className="py-3">
  <AddTask
   Addtask ={Addtask}
   Viewtask ={alltask}
   single ={single}
   editid = {editid}
   UpdateTask ={UpdateTask}
   />
  </div>
   <div className="pt-3">
   <ViewTask
   Viewtask ={alltask}
   EditTask ={EditTask}
   DeletTask ={DeletTask}
   />
   </div>
   </div>
   </>
  )
}

export default App
