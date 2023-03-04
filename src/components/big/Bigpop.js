import moment from 'moment/moment';
import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Bigpop = (props) => {
 
    const [sendto, setsend] = useState('');
    const [bigdate, setbigdate] = useState('');
    const [paidstatus, setpaidstatus] = useState('');
    const [payment, setpayment] = useState('');
    const [amount, setamount] = useState('');
    const [jsondate, setjsondate] = useState(null);

    const clickFunc = () => {
        const interval = setTimeout(() => { 
            props.setbigclass("bigbackbefore");
        }, 0);
        const intervaltwo = setTimeout(() => {
            props.bigpopstate(false);
        }, 250);
    }

    const bigsave = () => {
        props.newval(sendto, bigdate, paidstatus, payment, amount);
        setsend('');
        setbigdate('');
        setpaidstatus(''); 
        setpayment('');
        setamount('');
        const interval = setTimeout(() => { 
            props.setbigclass("bigbackbefore");
        }, 0);
        const intervaltwo = setTimeout(() => {
            props.bigpopstate(false);
        }, 250);
    }

  return (
    <>
    <div className={props.bigclass}>
        <div className="bigpop">

            <div className="bigpoptop">
                <h1>Large Transaction</h1>
                <i className="fa-solid fa-xmark bigcross" onClick={ clickFunc } ></i>
            </div>

            <div className="sendtoin">
                <h2>Send To </h2>
                <input type="text" className='sendtovalue bigin'
                value = {sendto}
                onChange = { (e) => {setsend(e.target.value) } } />
            </div>

            <div className="bigdatein">
                <h2>Date </h2>
                <input type="date" className='bigdatevalue bigin'
                required pattern="\d{4}-\d{2}-\d{2}"
                value = {bigdate}
                onChange = { (e) => { setbigdate(e.target.value) } } />
            </div>

            <div className="bigstatus"> 
                <h2>Status</h2> 
                <input type="radio" name="samename" id="bigsent" onChange={() => setpaidstatus('Sent')} /> <label className='radiobtn' htmlFor="bigsent">Sent</label>
                <input type="radio" name="samename" id="bigreceive" onChange={() => setpaidstatus('Received')} /> <label className='radiobtn' htmlFor="bigreceive">Received</label>
                <input type="radio" name="samename" id="bigpending" onChange={() => setpaidstatus('Pending')} /> <label className='radiobtn' htmlFor="bigpending">Pending</label>
                <input type="radio" name="samename" id="bigdecline" onChange={() => setpaidstatus('Decline')} /> <label className='radiobtn' htmlFor="bigdecline">Decline</label>
            </div>

            <div className="bigpaymentmethod">
                <h2>Payment Method</h2>
                <input type="radio" name="againsamename" id="bigcash" onChange={ () => setpayment('Cash')} /> <label className='radiobtn' htmlFor="bigcash"> Cash </label> 
                <input type="radio" name="againsamename" id="bigonline" onChange={ () => setpayment('Online')} /> <label className='radiobtn' htmlFor="bigonline"> Online </label>
                <input type="radio" name="againsamename" id="bigcard" onChange={ () => setpayment('Card')} /> <label className='radiobtn' htmlFor="bigcard"> Card </label> 
                <input type="radio" name="againsamename" id="bigcheque" onChange={ () => setpayment('Cheque')} /> <label className='radiobtn' htmlFor="bigcheque"> Cheque </label> 
            </div>

            <div className="bigamountin ">
                <h2>Amount </h2>
                <input type="number" className='bigamountvalue bigin'
                value={amount}
                onChange={ (e)=> {setamount(e.target.value) } } />
            </div>

            <button className="bigsave" onClick={bigsave}>Save</button>

        </div>
        </div>
    </>
  )
}
