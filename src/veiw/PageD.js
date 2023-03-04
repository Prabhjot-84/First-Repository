import React, {useState} from 'react'
import {PageDLeft} from '../layout/PageDLeft';
import {Eventform} from '../components/event/Eventform';
import {Eventedit} from '../components/event/Eventedit';


export const PageD = () => {
 
  const [item, setitem] = useState([]);
  const [itemholder, setitemholder] = useState('');
  const [pop, setpop] = useState(true);
  const [editpop, seteditpop] = useState(false); 
  const [totalevent, settotalevent] = useState(0);
  const [attevent, setattevent] = useState(0);

  const onDelete = (i) => {
    settotalevent(totalevent-1);
    setitem( item.filter( (e, idx) => {
        return idx !== i;
    }) )
    console.log(i);
  }



  const dontEdit = (i) => {
    if(i === 'dontchange'){
      seteditpop(false);
      setpop(true);
    }
  }



  const onEdit = (index) => {
    item.map( (ele, idx) => {
      if(idx === index){
          setitemholder(item[idx]);
      }
    })
    console.log('edit button called itemholder', itemholder);
    seteditpop(true);
    setpop(false);
  }



  const edit = (val0, date, time, title, description) => {
    setitem(
      item.map((ele, idx) => {
        if(idx === val0){
          return{...ele, val0 : val0,
                        val1 : date,
                        val2 : time,
                        val3 : title,
                        val4 : description}
        }
        return ele;
      }
      )
    )
    seteditpop(false);
    setpop(true);
  }


  const addVal = (date, time, title, description) => {
    let sno;
    if(item.length === 0){
        sno = 0;
    }
    else{
        sno = item[item.length-1].val0+1;
    }
    const updatedlist = {
            val0 : sno,
            val1 : date,
            val2 : time,
            val3 : title,
            val4 : description,
        }
    setitem([...item, updatedlist]);
    settotalevent(sno+1);
  } 

  return (
    <>
        <div className="page_4">
            <PageDLeft senda = {item} dela = {onDelete} editbtn = {onEdit} total={totalevent} attend={attevent} changeatt = {setattevent} />
            { pop && <Eventform info = {addVal}  /> }
            { editpop && <Eventedit noedit = {dontEdit} array = {itemholder} editvalue = {edit} /> }
        </div>
    </>
  )
}
