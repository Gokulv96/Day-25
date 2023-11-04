import React, { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name,setName] = useState("");
  const [desc,setDesc] = useState("");
  const [editname,setEditName] = useState("");
  const [editdesc,setEditDesc] = useState("");
  const [allTodos,setTodos] = useState([]);
  const [clicked,isClicked] = useState(false);
  const [editindex,setEditindex] = useState(null);
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(name !==""||desc !==""){
    let todoItems = {
      title:name,
      description:desc
    };
    let updateTodo = [...allTodos];
    updateTodo.push(todoItems);
    setTodos(updateTodo);
    setName("");
    setDesc("");
    console.log(allTodos);
  }
  }

  const handleDelete = (index)=>{
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index,1);
    setTodos(reducedTodo);
  }
  const handleEdit = (index) => {
   setName(allTodos[index].title);
   setDesc(allTodos[index].title);
   isClicked(true);
   setEditindex(index);
  }
  const handleUpdate = (e)=>{
    e.preventDefault();
    if(name !==""||desc !==""){
    let updateItems = {
      title:editname,
      description:editdesc
    };
    let editTodo = [...allTodos];
    editTodo.splice(editindex,1,updateItems)
    setTodos(editTodo);
    setEditName("");
    setEditDesc("");
    setName("");
    setDesc("");
    isClicked(false);
    setEditindex(null);
  }
  }
  return (
  <>
  <div className="container">
   <h5>My Todo</h5>
  <form autoComplete='off'>
  <div className="row">
    <div className="col">
    {clicked?<input type="text" name ="todo_name"className="form-control" value={editname} placeholder="Todo name" onChange={(e)=>setEditName(e.target.value)}/>:
       <input type="text" name ="todo_name"className="form-control" value={name} placeholder="Todo name" onChange={(e)=>setName(e.target.value)}/>}
    </div>
    <div className="col">
      {clicked?<input type="text" name ="todo_name"className="form-control" value={editdesc} placeholder="Todo name" onChange={(e)=>setEditDesc(e.target.value)}/>:
       <input type="text" name ="todo_name"className="form-control" value={desc} placeholder="Todo name" onChange={(e)=>setDesc(e.target.value)}/>}
    </div>
    <div className="col">
      {clicked? <button type="button" className="btn btn-success" onClick={handleUpdate}>Update</button>:<button type="button" className="btn btn-success" onClick={handleSubmit}>Add</button>}
    </div>
    </div>
</form>
</div>
<div className="container">
<div className="head">
<h4>My Todos</h4>
<div className="form-group col-md-4">
      <label for="inputState">Filter</label>
      <select id="inputState" className="form-control">
        <option selected>All</option>
        <option>Completed</option>
        <option>Not Completed</option>
      </select>
    </div>
</div>
<div className="row row-cols-1 row-cols-md-3">
  {allTodos.map((items,index)=>(
    <div className="col mb-2" key={index}>
    <div className="card">
      <div className="card-body">
      <p className="card-text">Name:  {items.title}</p>
      <p className="card-text">Description: {items.description}</p>
</div>
<div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control status" onChange={(e)=>setFilter(e.target.value)}>
        <option value ="Not Completed" selected>Not Completed</option>
        <option value = "Completed">Completed</option>
      </select>
    </div>
<div className="edit">
<button type="button" className="btn btn-success" onClick={()=>handleEdit(index)}>Edit</button>
<button type="button" className="btn btn-danger"onClick={()=>handleDelete(index)}>Delete</button>
</div>
  </div>
  </div>
  ))}
  </div>
  </div>
  </>
  )
}

export default App
