import React, { useState } from 'react';
import axios from 'axios';

function InputTodo() {

  const [description,setDescription] = useState('');
  
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
        //const body = description;
        axios.post("http://localhost:5000/todos",{
            description
        }).then((response)=>{
  
        })
        setDescription('');
    } catch (err) {
        console.error(err.message)
    }
  }
    
  return (
    <div>
      <h1 className='text-center mt-5'>PERN Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input type="text" className="form-control" value={description} onChange={(e)=>(setDescription(e.target.value))}/>
        <button className="btn btn-success ml-2">Add</button>
      </form>
    </div>
  )
}

export default InputTodo;
