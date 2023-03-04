import React,{useState} from 'react'

export const Bigedit = (props) => {
  
    const [son, setson] = useState(props.array.val0);
    const [sendto, setsend] = useState(props.array.val1);
    const [bigdate, setbigdate] = useState(props.array.val2);
    const [selected, setselected] = useState(props.array.val3);
    const [payment, setpayment] = useState(props.array.val4);
    const [amount, setamount] = useState(props.array.val5);

    const clickOnCross = () => {
        const interval = setTimeout(() => { 
            props.setbigclass("bigbackbefore");
        }, 0);
        const intervaltwo = setTimeout(() => {
            props.editstate(false);
        }, 250);
    }

  const bigsave = () => {
      props.editvalue(son, sendto, bigdate, selected, payment, amount);
      setsend('');
      setbigdate('');
      setselected('');
      setpayment('');
      setamount('');
      const interval = setTimeout(() => { 
        props.setbigclass("bigbackbefore");
        }, 0);
        const intervaltwo = setTimeout(() => {
            props.editstate(false);
        }, 250);
  }
  
  return (
    <>
    <div className= {props.bigclass}>
        <div className="bigpop">

            <div className="bigpoptop">
                <h1>Large Transaction</h1>
                <i className="fa-solid fa-xmark bigcross" onClick={ clickOnCross } ></i>
            </div>

            <div className="sendtoin">
                <h2>Send To </h2>
                <input type="text" className='sendtovalue'
                // placeholder = {props.array.val1}
                value = {sendto}
                onChange = { (e) => {setsend(e.target.value) } }
                /> 
            </div>
 
            <div className="bigdatein">
                <h2>Date </h2>
                <input type="date" className='bigdatevalue'
                // placeholder = {props.array.val2}
                value = {bigdate}
                onChange = { (e) => { setbigdate(e.target.value) } } 
                />
            </div>

            <div className="bigstatus">
                <h2>Status</h2> 
                <input type="radio" name="samename" id="bigsent" value='Sent' checked = {selected === 'Sent' } onChange = { (e) => setselected(e.target.value) } /> 
                <label className='radiobtn' htmlFor="bigsent">Sent</label>
                <input type="radio" name="samename" id="bigreceive" value='Received' checked = {selected === 'Received' } onChange = { (e) => setselected(e.target.value) } /> 
                <label className='radiobtn' htmlFor="bigsent">Received</label>
                <input type="radio" name="samename" id="bigpending" value='Pending' checked = {selected === 'Pending' } onChange = { (e) => setselected(e.target.value) }  /> 
                <label className='radiobtn' htmlFor="bigpending">Pending</label>
                <input type="radio" name="samename" id="bigdecline" value='Decline' checked = {selected === 'Decline' } onChange = { (e) => setselected(e.target.value) }  /> 
                <label className='radiobtn' htmlFor="bigdecline">Decline</label>
            </div>

            <div className="bigpaymentmethod">
                <h2>Payment Method</h2>
                <input type="radio" name="againsamename" id="bigcash" value='Cash' checked = {payment === 'Cash' } onChange={ (e) => setpayment(e.target.value)} /> 
                <label className='radiobtn' htmlFor="bigcash"> Cash </label> 
                <input type="radio" name="againsamename" id="bigonline" value='Online' checked = {payment === 'Online'} onChange={ (e) => setpayment(e.target.value)} /> 
                <label className='radiobtn' htmlFor="bigonline"> Online </label>
                <input type="radio" name="againsamename" id="bigcard" value='Card' checked = {payment === 'Card'} onChange={ (e) => setpayment(e.target.value)} /> 
                <label className='radiobtn' htmlFor="bigcard"> Card </label> 
                <input type="radio" name="againsamename" id="bigcheque" value='Cheque' checked = {payment === 'Cheque'} onChange={ (e) => setpayment(e.target.value)} /> 
                <label className='radiobtn' htmlFor="bigcheque"> Cheque </label> 
            </div>

            <div className="bigamountin">
                <h2>Amount </h2>
                <input type="number" className='bigamountvalue'
                // placeholder = {props.array.val5}
                value={amount}
                onChange={ (e)=> {setamount(e.target.value) } } 
                />
            </div>

            <button className="bigsave" onClick={bigsave}>Edit</button>

        </div>
        </div>
    </>
  )
}


