import React, {useState} from 'react'

export const Eventform = (props) => {

    const [date, setdate] = useState('');
    const [time, settime] = useState('');
    const [title, settitle] = useState('');
    const [desc, setdesc] = useState('');
    

    const saveFunc = () => {
        props.info(date, time, title, desc); 
        setdate('');
        settime('');
        settitle('');
        setdesc('');
    }

  return (
    <>  

        <div className="PageDRight" >

            <h1 className="eventhead">Add an Event</h1> 

            <div className="eventdetails">

                <div className="eventdate">
                    <h3 className='eventdateh' >Date</h3>
                    <input type="date" className='eventdatein' 
                    // placeholder={props.array.val1}
                    value={date}
                    onChange = { (e) => {setdate(e.target.value)}} />
                </div>

                <div className="eventtime">
                    <h3 className="eventtimeh">Time</h3>
                    <input type="time" className='eventtimein' 
                    // placeholder='Time yo'
                    value={time}
                    onChange = { (e) => { settime(e.target.value)}} />
                </div>

                <div className="eventtitle">
                    <h3 className="eventtitleh">Title</h3>
                    <input type="text" className='eventtitlein' 
                    // placeholder={props.array.val3}
                    value={title}
                    onChange = { (e) => {settitle(e.target.value)}} />
                </div>

                <div className="eventdesc">
                    <h3 className="eventdesch">Description</h3>
                    <textarea name="description" id="eventdescription" cols="30" rows="5"  className='eventdescin' 
                    value={desc} onChange = { (e) => {setdesc(e.target.value)}}></textarea>
                </div>

                <div className="eventsavebtn">
                  <button className="eventsave" onClick={saveFunc} >Add Event</button>
                </div>

            </div>

        </div> 
  
    </>
  )
}
