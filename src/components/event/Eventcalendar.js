import React from 'react'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'

export const Eventcalendar = () => {

  const datevalue = new Date(2022, 9, 19); 
  
  return (
    <>
      <div className='eventcal'>
        <CalendarComponent value={datevalue} ></CalendarComponent>
      </div>
    </>
  )
}
