import React, { useState } from 'react'
import { DailyExList } from '../components/daily/DailyExList';
import {Dailypop} from '../components/daily/Dailypop';
import { Dailyedit } from '../components/daily/Dailyedit';


export const DailyEx = () => {

    const [pop, setpop] = useState(false);
    const [edit, setedit] = useState(false);
    const [dailyitem, setitem] = useState([]);
    const [itemholder, setitemholder] = useState('');

    const [dailypoptrans, setdailypoptrans] = useState("dailybackbefore");
    


    function popup () {
        setpop(true)
        const interval = setTimeout(() => {
            setdailypoptrans("dailyback");
        }, 0);
    }


    function onDelete (i) {
        setitem(dailyitem.filter((e, ind) => {
            if(ind > i)
            {
                dailyitem[ind].val0 = (ind-1);
            }
            return ind!== i;
        }))
    }



    const sendindex = (i) => {
        dailyitem.map( (ele, idx) => {
            if(idx === i){
                setitemholder(dailyitem[i]);
            }
        }) 
    }

    const onEdit = (index, call) => {
        sendindex(index);
        setedit(call);
        const edittransition = setTimeout(() => {
            setdailypoptrans("dailyback");
        }, 0);
    }



    const editValues = (val0, spentat, time, paymentm, amount) => {
        setitem(
            dailyitem.map( (ele, i) => {
                if(i === val0){
                    return {...ele, val0 : val0,
                                    val1 : spentat,
                                    val2 : time, 
                                    val3 : paymentm, 
                                    val4 : amount}
                }
                return ele;
            })
        )
    } 




    const addVal = (spentat, time, paymentm, amount) => {
        let sno;
        if(dailyitem.length === 0){
            sno = 0;
        }
        else{
            sno = dailyitem[dailyitem.length-1].val0+1;
        }
        const updatedlist = {
            val0 : sno,
            val1 : spentat,
            val2 : time,
            val3 : paymentm,
            val4 : amount,
        }
        setitem([...dailyitem, updatedlist]);
    }




  return (
    <>
        <div className="daily_ex">
                        
            <div className="daily_h">
                <h2>Daily Expenses</h2>
                <div className="add_btn" onClick = {popup}>
                <i className="fa-solid fa-plus"></i> <h2>Add</h2>
                </div>
            </div>  
            {/* daily_heading */}

                        
            <div className="daily_table">

                <div className="daily_list_heading">
                    <h3>Spent At</h3>
                    <h3>Time</h3> 
                    <h3>Payment Method</h3>
                    <h3>Amount</h3>
                </div>
                <hr/>

                {pop && <Dailypop dailypopstate = {setpop} newval = {addVal} popclass = {dailypoptrans} setpopclass = {setdailypoptrans} />}
                {edit && <Dailyedit editstate = {setedit} value = {itemholder} madechange = {editValues}  editclass = {dailypoptrans} seteditclass = {setdailypoptrans} /> }

                <div className="daily_list">

                    {dailyitem.map( (item, idx) => {
                        return(
                            <DailyExList listval = {dailyitem[idx]} key = {idx}  delItem = { () => {onDelete(idx)} } edit = {onEdit} />
                        )
                    } )}
                                
                </div>  
                {/* daily_list */}

            </div>  
            {/* daily_table */}

        </div>  
        {/* daily_ex */}
    </>
  )
}
