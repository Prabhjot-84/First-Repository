import React, {useState} from 'react' 

export const Todoedit = (props) => {
    const [todo, settodo] = useState(props.passtodo.val1);
    const [time, settime] = useState(props.passtodo.val2);
    const [todostat, settodostat] = useState(props.passtodo.val3);

    const clickOnCross = () => {
        const interval = setTimeout(() => { 
            props.setchangepopclass("todopopbgbefore");
        }, 0);
        const intervaltwo = setTimeout(() => {
            props.editstate(false);
        }, 600);
    }

    const editFunc = () => {
        props.editvalue(props.passtodo.val0, todo, time, todostat);
        // console.log(todostat);
        const interval = setTimeout(() => { 
            props.setchangepopclass("todopopbgbefore");
        }, 0);
        const intervaltwo = setTimeout(() => {
            props.editstate(false);
        }, 600);
    }


  return (
    <>
        <div className={props.changepopclass}>

            <div className="todopopcontainer">

                <div className="todopoptop">
                    <h1>Todos List</h1>
                    <i className="fa-solid fa-xmark bigcross" onClick={ clickOnCross } ></i>
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
                    value={time} 
                    onChange = { (e) => {settime(e.target.value)}} />
                </div>
 
                <div className="todopopstatus">
                    <h2>Status</h2>
                    <input type="radio" name="sameagain" id="completed" value={todostat} checked = {todostat === 'Completed'} onChange = { () => settodostat('Completed')} />
                    <label className='statusbtn1' htmlFor="completedbtn"> &nbsp;Completed </label>
                    <input type="radio" name="sameagain" id="unfinished" value={todostat} checked = {todostat === 'Unfinished'} onChange = { () => settodostat('Unfinished')} />
                    <label className='statusbtn2' htmlFor="unfinishedbtn"> &nbsp;Unfinished</label>
                </div>

                <button className='todosave' onClick={editFunc} >Edit</button>

            </div>

        </div>
    </>
  )
}
