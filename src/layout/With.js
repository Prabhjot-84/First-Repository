import React, { useState } from 'react'
import { WithList } from '../components/with/WithList';
import {Withpop} from '../components/with/Withpop';
import {Withedit} from '../components/with/Withedit';

export const With = () => {

  const [pop, setpop] = useState(false); 
  const [editpop, seteditpop] = useState(false)
  const [withitem, setwithitem] = useState([]);
  const [itemholder, setitemholder] = useState('');

  const [popclass, setpopclass] = useState("withbackbefore");


  const popup = () => {
    setpop(true)
    const interval = setTimeout(() => {
        setpopclass("withback");
    }, 0);
  }


  const onDelete = (idx) => {
    setwithitem( withitem.filter ( (ele, i) => {
        if(i > idx)
        {
          withitem[i].val0 = (i-1);
        }
        return i !== idx;
    }))
  }



  const sendindex = (i) => {
    withitem.map( (ele, idx) => {
        if(idx === i){
            setitemholder(withitem[idx]);
        }
    })
  }

  const onEdit = (index, abc) => {
    sendindex(index);
    seteditpop(abc);
    const interval = setTimeout(() => {
      setpopclass("withback");
    }, 0);
  }



  const editvalues = (val0, withfrom, withdate, withstatus, amount) => {
    setwithitem(
      withitem.map((ele, idx) => {
        if(idx === val0){
          return{...ele, val0 : val0,
                        val1 : withfrom,
                        val2 : withdate,
                        val3 : withstatus,
                        val4 : amount}
        }
        return ele;
      }
      )
    )
  }



  const addval = (withdrawnfrom, withdate, withstatus, amount) => {
    let sno;
    if(withitem.length === 0){
        sno = 0;
    }
    else{
        sno = withitem[withitem.length-1].val0+1;
    }
    const updatedlist = {
            val0 : sno,
            val1 : withdrawnfrom,
            val2 : withdate,
            val3 : withstatus,
            val4 : amount
        }
    setwithitem([...withitem, updatedlist]);
  }



  return (
    <>
    <div className="withdraw">
    
    <div className="withdraw_h">
        <h2>Withdrawals</h2>
        <div className="add_btn" onClick={ popup }>
            <i className="fa-solid fa-plus"></i> <h2>Add</h2>
        </div>
    </div>  
    {/* Withdraw headings */}


    <div className="withdraw_table">

        <div className="withdraw_list_heading">
            <h3>Withdrawn from</h3>
            <h3>Date</h3>
            <h3>Status</h3>
            <h3>Amount</h3>
        </div> 
        <hr/>

        {pop && <Withpop withpopstate = {setpop}  add={addval} changeclass = {popclass} setchangeclass = {setpopclass}  />}
        {editpop && <Withedit editstate={seteditpop} list={itemholder} madechange={editvalues} editclass = {popclass} seteditclass = {setpopclass} />}

        <div className="withdraw_list">

            {withitem.map( (ele, idx) => {
                return (
                    <WithList listval={withitem[idx]} key ={idx} del={() => onDelete(idx)} editstate={onEdit} />
                )
            })}

        </div>

    </div>  
    {/* withdraw_table */}

    </div>  
     {/* withdrawn  */}

    </>
  )
}
