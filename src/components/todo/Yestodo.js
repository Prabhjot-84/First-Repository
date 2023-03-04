import React from 'react'

export const Yestodo = () => {
  return (
    <>
        <div className="yes_todo">
            <h2 className="yes_todo_h">Yesterday's Unfinished Todos</h2>

            <div className="yes_todo_list">

              <div className="y_todo_list_1">
                {/* <i className="fa-solid fa-file-signature todo_tag personal"></i> */}
                <h3 className="yes_desc">
                  This todo was not completed yesterday
                </h3>
              </div>

              <div className="y_todo_list_1">
                {/* <i className="fa-solid fa-file-signature todo_tag personal"></i> */}
                <h3 className="yes_desc">
                  This todo was not completed yesterday
                </h3>
              </div>
            </div>
          </div>
          {/* yesterdays todo */}
    </>
  )
}
