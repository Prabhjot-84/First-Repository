import React, { useState } from 'react'

export const Dailypop = (props) => {

    const [spentat, setspent]  = useState('');
    const [time, settime]  = useState('');
    const [paymentm, setpaymentm]  = useState('');
    const [amount, setamount]  = useState('');


    const clickOnCross = () => {
        const interval = setTimeout(() => { 
            props.setpopclass("dailybackbefore");
        }, 0);
        const intervaltwo = setTimeout(() => {
            props.dailypopstate(false);
        }, 250);
    }


    const dailysave = () => {
        props.newval(spentat, time, paymentm, amount);
        setspent('');
        settime('');
        setpaymentm('');
        setamount('');
        const interval = setTimeout(() => { 
            props.setpopclass("dailybackbefore");
        }, 0);
        const intervaltwo = setTimeout(() => {
            props.dailypopstate(false);
        }, 250);
    }



  return (  
    <div className={props.popclass}>
        <div className="dailypop">
        
            <div className="dailypoptop">
                <h1>Daily Expenses</h1>
                <i className="fa-solid fa-xmark dailycross" onClick={ clickOnCross}></i>
            </div>

            <div className="spentatin">
                <h2>Spent At </h2>
                <input type="text" className='spentatvalue' 
                value = {spentat}
                onChange = { (e) => { setspent(e.target.value) } } />
            </div>

            <div className="dailytimein">
                <h2>Time </h2>
                <input type="time" className='dailytimevalue' 
                value={time}
                onChange = { (e) => { settime(e.target.value) } } />
            </div>

            <div className="dialypaymentmethod">
                <h2>Payment Method</h2>
                <input type="radio" name="samename" id="dailycash" onChange={(e) => setpaymentm('Cash')} /> <label className='radiobtn' htmlFor="dailycash"> Cash </label> 
                <input type="radio" name="samename" id="dailyonline" onChange={(e) => setpaymentm('Online')} /> <label className='radiobtn' htmlFor="dailyonline"> Online </label>
                <input type="radio" name="samename" id="dailycard" onChange={(e) => setpaymentm('Card')} /> <label className='radiobtn' htmlFor="dailycard"> Card </label> 
            </div>

            <div className="dailyamountin">
                <h2>Amount </h2>
                <input type="number" className='dailyamountvalue' 
                value={amount}
                onChange = { (e) => setamount(e.target.value)}
                />
            </div>

            <button className="dailysave" onClick={dailysave}>Save</button>

        </div>
    </div>
  )
}
