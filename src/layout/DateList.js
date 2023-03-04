import React, {useState} from 'react'
import { Dates } from '../components/todo/Dates';
import { TodoList } from '../components/todo/TodoList';

export const DateList = (props) => {

  const addtodoFunc = () => {
    props.popstate(true); 
    const interval = setTimeout(() => {
      props.setchangepopclass("todopopbg");
  }, 0);
  }

  return (
    <>
    <div className="todo_left"> 
    
        <Dates/>

        <div className="todo_list">

          {props.todoslist.map( (ele, idx) => {
              return( 
                <TodoList sendtodo = {ele} key={idx} delete = { () => {props.del(idx)}} oneditfunc = {props.calledit} />
              )
          })}

        </div>  
        {/* todo_list */}

        <div className="new_todo"> 
            <button onClick={addtodoFunc} >  <i className="fa-solid fa-plus"></i> &nbsp; Add New Todo </button>
        </div>
    

    </div>  
    {/* todo_left  */}
    </>
  )
}
