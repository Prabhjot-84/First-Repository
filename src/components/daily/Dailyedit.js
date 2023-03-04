import React, {useState} from 'react'

export const Dailyedit = (props) => {
    // console.log('edit has been triggered');
    const [spentat, setspent]  = useState(props.value.val1);
    const [time, settime]  = useState(props.value.val2);
    const [paymentm, setpaymentm]  = useState(props.value.val3);
    const [amount, setamount]  = useState(props.value.val4);

    const dailyedit = () => {
        props.madechange(props.value.val0, spentat, time, paymentm, amount);
        setspent('');
        settime('');
        setpaymentm('');
        setamount('');
        const interval = setTimeout(() => {
            props.seteditclass("dailybackbefore");
        }, 0);
        const intervaltwo = setTimeout(() => {
            props.editstate(false);
        }, 250);
    }


    const clickOnCross = () => {
        const interval = setTimeout(() => {
            props.seteditclass("dailybackbefore");
        }, 0);
        const intervaltwo = setTimeout(() => {
            props.editstate(false);
        }, 250); 
    }



  return (  
    <div className={props.editclass}>
        <div className="dailypop">

            <div className="dailypoptop">
                <h1>Daily Expenses</h1>
                <i className="fa-solid fa-xmark dailycross" onClick={ clickOnCross}></i>
            </div>

            <div className="spentatin">
                <h2>Spent At </h2>
                <input type="text" className='spentatvalue' 
                // placeholder = {props.value.val1}
                value = {spentat}
                onChange = { (e) => { setspent(e.target.value) } } 
                />
            </div>

            <div className="dailytimein">
                <h2>Time &nbsp;</h2>
                <input type="time" className='dailytimevalue' 
                // placeholder={props.value.val2}
                value={time}
                onChange = { (e) => { settime(e.target.value) } } 
                />
            </div>

            <div className="dialypaymentmethod">
                <h2>Payment Method</h2>
                <input type="radio" name="samename" id="dailycash" checked = {paymentm === 'Cash'} onChange={(e) => setpaymentm('Cash')} /> 
                <label className='radiobtn' htmlFor="dailycash"> Cash </label> 
                <input type="radio" name="samename" id="dailyonline" checked = {paymentm === 'Online'} onChange={(e) => setpaymentm('Online')} /> 
                <label className='radiobtn' htmlFor="dailyonline"> Online </label>
                <input type="radio" name="samename" id="dailycard" checked = {paymentm === 'Card'} onChange={(e) => setpaymentm('Card')} /> 
                <label className='radiobtn' htmlFor="dailycard"> Card </label> 
            </div>

            <div className="dailyamountin">
                <h2>Amount </h2>
                <input type="number" className='dailyamountvalue' 
                // placeholder={props.value.val4}
                value={amount}
                onChange = { (e) => setamount(e.target.value)}
                />
            </div>

            <button className="dailysave" onClick={dailyedit}>Edit</button>

        </div>
    </div>
  )
}
