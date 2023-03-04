import React, {useState} from 'react'

export const TodoList = (props) => {

  const editFunc = () => {
    props.oneditfunc(props.sendtodo.val0, true); 
  }
 

  return (
    <>
        <div className="todo_rows">

            <div className="row_time"> 
                <h3 className="todo_time"> <i className="fa-solid fa-clock-rotate-left"></i> {props.sendtodo.val2} </h3>
            </div>
            <div className="row_todo">
                {/* <i className="fa-solid fa-file-signature todo_tag personal" style={personalStyle} ></i>
                <i className="fa-solid fa-briefcase todo_tag business" style={businessStyle} ></i> */}
                <h3 className="todo_desc"> {props.sendtodo.val1} </h3>
                <h3 className={props.sendtodo.val3} > {props.sendtodo.val3} </h3>
                <i className="fa-solid fa-pen-to-square edit" onClick={editFunc} ></i>
                <i className="fa-solid fa-trash-can delete" onClick={props.delete}></i>
            </div>

        </div>  
        {/* todo_rows */}
    </>
  )
}
