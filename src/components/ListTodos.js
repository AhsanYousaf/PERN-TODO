import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import EditTodo from './EditTodo';

function ListTodos() {

  const [todoList,setTodoList] = useState([]);
  const getTodos = async () => {
    axios.get("/todos").then((response)=>{
        setTodoList(response.data);
        //console.log(todoList);
    })
  }  
  useEffect(()=>{
    getTodos();
  },[todoList]);

  const deleteTodo = async (id) => {
    try {
        axios.delete(`/todos/${id}`).then((response)=>{});
    } catch (err) {
        console.error(err.message);
    }
  }
    
  return (
    <Fragment>
        {" "}
        <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
            todoList.map((todo)=>(
                <tr key={todo.todo_id}>
                    <td>{todo.description}</td>
                    <td>
                        <EditTodo todo={todo} />
                    </td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>deleteTodo(todo.todo_id)}>Delete</button>
                    </td>
                </tr>
            ))
        }
    </tbody>
  </table>
    </Fragment>
  )
}

export default ListTodos;
