import React from 'react'

export const Todostatus = (props) => {
  return (
    <>
        <div className="todo_stats">
            <div className="stats">
              <div className="total_todo">
                <h4>Total Todos : {props.totaltodo} </h4>
              </div>

              <div className="todo_done">
                <h4>Completed Todos : {props.comtodo} </h4>
              </div>

              <div className="todo_unfinish">
                <h4>Unfinished Todos : {props.untodo} </h4>
              </div>
            </div>

            <div className="todo_progress"></div>
          </div>
          {/* todo_stats */}
    </>
  )
}
