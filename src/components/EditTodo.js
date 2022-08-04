import axios from 'axios';
import React, { Fragment, useState } from 'react';

function EditTodo({todo}) {

  const [description,setDescription] = useState(todo.description);  

  const editDescription = async (e) => {
    e.preventDefault();
    try {
        axios.put(`http://localhost:5000/todos/${todo.todo_id}`,{
            description
        }).then(()=>{});
    } catch (err) {
        console.error(err);
    }
  }

  return (
    <Fragment>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
            Edit
        </button>

        <div class="modal" id={`id${todo.todo_id}`} onClick={(e)=>setDescription(todo.description)}>
            <div class="modal-dialog">
            <div class="modal-content">

        <div class="modal-header">
            <h4 class="modal-title">Edit Todo</h4>
            <button type="button" class="close" data-dismiss="modal" onClick={(e)=>setDescription(todo.description)}>&times;</button>
        </div>

        <div class="modal-body">
            <input className='form-control' value={description} onChange={(e)=> setDescription(e.target.value)}/>
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={(e)=>editDescription(e)}>Edit</button>

            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={(e)=>setDescription(todo.description)}>Close</button>
        </div>

        </div>
        </div>
        </div>
    </Fragment>
  )
}

export default EditTodo;
