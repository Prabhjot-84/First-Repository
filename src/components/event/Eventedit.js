import React, {useState} from 'react'

export const Eventedit = (props) => {

    const [style, setstyle] = useState('PageDedit1');

    const [date, setdate] = useState(props.array.val1);
    const [time, settime] = useState(props.array.val2);
    const [title, settitle] = useState(props.array.val3);
    const [desc, setdesc] = useState(props.array.val4);

    const nochangeFunc = () => {
        props.noedit('dontchange');
    }
    

    const saveFunc = () => {
        console.log('inside save changes ');
        props.editvalue(props.array.val0, date, time, title, desc); 
        setdate('');
        settime('');
        settitle('');
        setdesc('');
    }

  return (
    <> 

        <div className={style} >

            <h1 className="eventhead">Edit this Event</h1> 

            <div className="eventdetails">

                <div className="eventdate">
                    <h3 className='eventdateh' >Date</h3>
                    <input type="date" className='eventdatein' 
                    value={date}
                    onChange = { (e) => {setdate(e.target.value)}} />
                </div>

                <div className="eventtime">
                    <h3 className="eventtimeh">Time</h3>
                    <input type="time" className='eventtimein' 
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
                  <button className="eventsave" onClick={saveFunc} >Save Changes</button>
                  <button className='eventnochange' onClick={nochangeFunc} > Undo Changes </button>
                </div>

            </div>

        </div> 

    </>
  )
}
