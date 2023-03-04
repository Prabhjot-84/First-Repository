import moment from 'moment';
import React from 'react'
import { Searchtodo } from '../components/todo/Searchtodo';

export const TodoNav = () => {

  const today = new Date();


  return (
    <>
        <div className="todo_nav">

            <div className="m_y">
                <h2 className="month"> {moment(today).format("MMMM")} &nbsp;</h2>
                <h2 className="year"> {moment(today).format("YYYY")} </h2> 
            </div>
            <Searchtodo/>
        </div>  
        {/* todo_navbar */}
    </>
  )
}
