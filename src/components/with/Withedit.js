import React,{useState} from 'react'

export const Withedit = (props) => {
    
    const [sno, setsno] = useState(props.list.val0);
    const [withfrom, setwithfrom] = useState(props.list.val1);
    const [withdate, setwithdate] = useState(props.list.val2); 
    const [withstatus, setwithstatus] = useState(props.list.val3);
    const [amount, setamount] = useState(props.list.val4);

    const clickOnCross = () => {
        const interval = setTimeout(() => { 
            props.seteditclass("withbackbefore");
        }, 0);
        const intervaltwo = setTimeout(() => {
            props.editstate(false)
        }, 250);
      }

  const editFunc = () => {
    props.madechange(sno, withfrom, withdate, withstatus, amount);
    setwithfrom('');
    setwithdate(''); 
    setwithstatus('');
    setamount('');
    const interval = setTimeout(() => { 
        props.seteditclass("withbackbefore");
    }, 0);
    const intervaltwo = setTimeout(() => {
        props.editstate(false)
    }, 250);
  }

  return (
    <div className={props.editclass}>
        <div className="withpop">

            <div className="withpoptop">
                <h1>Withdrawals</h1>
                <i className="fa-solid fa-xmark withcross" onClick={ clickOnCross }></i>    
            </div>

            <div className="withfromin">
                <h2>Withdrawn From </h2>
                <input type="text" className='spentatvalue'
                // placeholder= {props.list.val1}
                value = {withfrom}
                onChange = { (e) => {setwithfrom(e.target.value)}} />
            </div>

            <div className="withdatein">
                <h2>Date </h2>
                <input type="date" className='withtimevalue'
                // placeholder= {props.list.val2}
                value = {withdate}
                onChange = { (e) => setwithdate(e.target.value)} />
            </div>

            <div className="withstatus">
                <h2>Status</h2>
                <input type="radio" name="samename" id="withpaid" value='Withdrawn' checked={ withstatus === 'Withdrawn' } onChange={ () => setwithstatus('Withdrawn')} /> 
                <label className='radiobtn' htmlFor="withpaid">Withdrawn</label>
                <input type="radio" name="samename" id="withunpaid" value='Withdrawn' checked={withstatus === 'Not Withdrawn'} onChange={ () => setwithstatus('Not Withdrawn')} /> 
                <label className='radiobtn' htmlFor="withunpaid">Not Withdrawn</label>
            </div>

            <div className="withamountin">
                <h2>Amount </h2>
                <input type="number" className='withamountvalue'
                // placeholder= {props.list.val4}
                value = {amount}
                onChange = { (e) => setamount(e.target.value)} />
            </div>

            <button className="withsave" onClick={editFunc} >Edit</button>

        </div>
    </div>
  )
}
