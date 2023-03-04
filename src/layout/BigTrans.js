import React, { useState } from 'react'
import { BigList } from '../components/big/BigList';
import { Bigpop } from '../components/big/Bigpop';
import { Bigedit } from '../components/big/Bigedit';

export const BigTrans = () => {

    const [pop, setpop] = useState(false);
    const [editpop, seteditpop] = useState(false);  
    const [bigitem, setitem] = useState([]);
    const [itemholder, setitemholder] = useState('');

    const [popclass, setpopclass] = useState("bigbackbefore");
  

  const clickFunc = () => {
    setpop(true);
    const interval = setTimeout(() => {
      setpopclass("bigback");
    }, 0);
  }
 

  const onDelete = (i) => {
    setitem( bigitem.filter( (e, idx) => {
        if(idx > i)
        {
          bigitem[idx].val0 = (idx-1);
        }
        return idx !== i;
    }) )
  }



  const sendindex = (i) => {
    bigitem.map( (ele, idx) => {
        if(idx === i){
            setitemholder(bigitem[idx]);
        }
    })
  }

  const onEdit = (index, call) => {
    sendindex(index);
    seteditpop(call);
    const interval = setTimeout(() => {
      setpopclass("bigback");
    }, 0);
  }



  const edit = (val0, sendto, bigdate, selected, payment, amount) => {
    setitem(
      bigitem.map((ele, idx) => {
        if(idx === val0){
          return{...ele, val0 : val0,
                        val1 : sendto,
                        val2 : bigdate,
                        val3 : selected,
                        val4 : payment,
                        val5 : amount}
        }
        return ele;
      }
      )
    )
  }



  const addVal = (sendto, bigdate, paidstatus, payment, amount) => {
    let sno;
    if(bigitem.length === 0){
        sno = 0;
    }
    else{
        sno = bigitem[bigitem.length-1].val0+1;
    }
    const updatedlist = {
            val0 : sno,
            val1 : sendto,
            val2 : bigdate,
            val3 : paidstatus,
            val4 : payment,
            val5 : amount
        }
      setitem([...bigitem, updatedlist]);
  }

  

  return (
    <>
    <div className="big_tran">

        <div className="big_h">
            <h2>Large Transactions</h2>
            <div className="add_btn" onClick={ clickFunc }>
            <i className="fa-solid fa-plus"></i> <h2>Add</h2>
            </div> 
            </div> 
            {/* Large Transaction headings */}
    
    
            <div className="big_table">
    
                <div className="big_list_heading">
                    <h3>Send To</h3>
                    <h3>Date</h3>
                    <h3>Status</h3>
                    <h3>Payment Method</h3>
                    <h3>Amount</h3>
                </div>
                <hr/>

                {pop && <Bigpop bigpopstate = {setpop} newval = {addVal} bigclass = {popclass} setbigclass = {setpopclass} />}
                { editpop && <Bigedit editstate = {seteditpop} array = {itemholder} editvalue={edit} bigclass = {popclass} setbigclass = {setpopclass} />}
    
                <div className="big_list">
    
                    {bigitem.map( (item, idx) => {
                        return (
                            <BigList listval = {bigitem[idx]} key={idx} delitem={() => onDelete(idx)}  editele={onEdit}  />
                            // edititem = { () => onEdit(idx) }
                        )
                    })}
    
                </div>
    
            </div>  
            {/* big_table */}
    
        </div>  
        {/* big_transactions */}

    </>       
  )
}
