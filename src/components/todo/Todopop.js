import React,{useState} from 'react'

export const Todopop = (props) => {

    const [todo, settodo] = useState('');
    const [time, settime] = useState('');
    const [todostat, settodostat] = useState('Unfinished');

    const clickOnCross = () => {
        const interval = setTimeout(() => { 
            props.setchangepopclass("todopopbgbefore");
        }, 0);
        const intervaltwo = setTimeout(() => {
            props.popstate(false);
        }, 600);
    }

    const saveFunc = () => {
        props.addtodo(todo, time, todostat);
        // console.log('here we are');
        const interval = setTimeout(() => { 
            props.setchangepopclass("todopopbgbefore");
        }, 0);
        const intervaltwo = setTimeout(() => {
            props.popstate(false);
        }, 600);
    }
    


  return (
    <>
        <div className={props.changepopclass}>

            <div className="todopopcontainer">

                <div className="todopoptop">
                    <h1>Todos List</h1> 
                    <i className="fa-solid fa-xmark bigcross" onClick={clickOnCross} ></i>
                </div>

                <div className="tododesc">
                    <h2>Todo</h2>
                    <textarea name="description" id="tododescription" cols="30" rows="5" 
                    value={todo} 
                    onChange = { (e) => {settodo(e.target.value)}} ></textarea>
                </div>
 
                <div className="todopoptime">
                    <h2>Time</h2>
                    <input type="time" 
                    name='timeField'
                    value={time} 
                    onChange = { (e) => {settime(e.target.value)}} />
                </div>

                <div className="todopopstatus">
                    <h2>Status</h2>
                    <input type="radio" name="sameagain" id="completed" value={todostat} onChange = { () => settodostat('Completed')} />
                    <label className='statusbtn1' htmlFor="completedbtn"> &nbsp;Completed </label>
                    <input type="radio" name="sameagain" id="unfinished" value={todostat} onChange = { () => settodostat('Unfinished')} />
                    <label className='statusbtn2' htmlFor="unfinishedbtn"> &nbsp;Unfinished</label>
                </div>

                <button className='todosave' onClick={saveFunc} >Save</button>

            </div>

        </div>
    </>
  )
}
