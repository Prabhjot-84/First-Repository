import React, {useState} from 'react'

export const Withpop = (props) => {

    const [withfrom, setwithfrom] = useState('');
    const [withdate, setwithdate] = useState(''); 
    const [withstatus, setwithstatus] = useState('');
    const [amount, setamount] = useState('');


  const clickOnCross = () => {
    const interval = setTimeout(() => { 
        props.setchangeclass("withbackbefore");
    }, 0);
    const intervaltwo = setTimeout(() => {
        props.withpopstate(false);
    }, 250);
  }

  const saveFunc = () => {
    props.add(withfrom, withdate, withstatus, amount);
    setwithfrom('');
    setwithdate('');
    setwithstatus('');
    setamount('');
    const interval = setTimeout(() => { 
        props.setchangeclass("withbackbefore");
    }, 0);
    const intervaltwo = setTimeout(() => {
        props.withpopstate(false);
    }, 250);
  }



  return ( 
    <div className={props.changeclass}>
        <div className="withpop">
            <div className="withpoptop">
                <h1>Withdrawals</h1>
                <i className="fa-solid fa-xmark withcross" onClick={ clickOnCross }></i>    
            </div>
            <div className="withfromin">
                <h2>Withdrawn From </h2>
                <input type="text" className='spentatvalue'
                value = {withfrom}
                onChange = { (e) => {setwithfrom(e.target.value)}} />
            </div>
            <div className="withdatein">
                <h2>Date </h2>
                <input type="date" className='withtimevalue'
                value = {withdate}
                onChange = { (e) => setwithdate(e.target.value)} />
            </div>
            <div className="withstatus">
                <h2>Status</h2>
                <input type="radio" name="samename" id="withpaid" onChange={ () => setwithstatus('Withdrawn')} /> <label className='radiobtn' htmlFor="withpaid">Withdrawn</label>
                <input type="radio" name="samename" id="withunpaid" onChange={ () => setwithstatus('Not Withdrawn')} /> <label className='radiobtn' htmlFor="withunpaid">Not Withdrawn</label>
            </div>
            <div className="withamountin">
                <h2>Amount </h2>
                <input type="number" className='withamountvalue'
                value = {amount}
                onChange = { (e) => setamount(e.target.value)} />
            </div>
            <button className="withsave" onClick={saveFunc} >Save</button>
        </div>
    </div>
  )
}
