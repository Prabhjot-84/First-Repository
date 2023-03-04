import React from 'react'

export const Eventstat = (props) => {
  return (
    <>
        <div className="eventstats">

            <div className="totalevents">
              <img src="./img/event.png" alt="" />
              <h4>Total Events</h4>
              <h1> {props.tot} </h1>
            </div>

            <div className="comevent">
              <img src="./img/completed.png" alt="" />
              <h4>Events Attended</h4>
              <h1> {props.attended} </h1>
            </div>

            <div className="missedevent">
              <img src="./img/missed.png" alt="" />
              <h4>Events Missed</h4>
              <h1>2</h1>
            </div>

            <div className="upcomingevent">
              <img src="./img/upcoming.png" alt="" />
              <h4>Upcoming Events</h4>
              <h1>12</h1>
            </div>

        </div>
    </>
  )
}
