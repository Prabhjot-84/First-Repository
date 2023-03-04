import React, { useState } from "react";
import { Todopop } from "../components/todo/Todopop";
import { DateList } from './DateList';
import { Todostatus } from "../components/todo/Todostatus";
import { Yestodo } from "../components/todo/Yestodo";
import { Idea } from "../components/todo/Idea";
import { Todoedit } from "../components/todo/Todoedit";

export const TodoMain = () => {

  const [pop, setpop] = useState(false);
  const [item, setitem] = useState([]);
  const [editpop, seteditpop] = useState(false); 
  const [itemholder, setitemholder] = useState('');
  const [todototal, settodototal] = useState(0); 
  const [todocom, settodocom] = useState(0);
  const [todoun, settodoun] = useState(0);
  const [statusclass, setstatusclass] = useState("todo_status");

  const [todopopclass, settodopopclass] = useState("todopopbgbefore");

  // const [selectdate, setselectdate] = useState(null);


  const onDelete = (idx) => {

    console.log("itemidx : " , item[idx].val3, " idx : ", idx);

    if(item[idx].val3 === 'Completed'){
      settodocom(todocom-1);
      settodototal(todototal-1);
      setitem(item.filter( (ele, i) => {
        if(i > idx)
        {
          item[i].val0 = (i-1);
        }
        return i !== idx;
      }))
    }

    if(item[idx].val3 === 'Unfinished'){
      settodoun(todoun-1);
      settodototal(todototal-1);
      setitem(item.filter( (ele, i) => {
        if(i > idx)
        {
          item[i].val0 = (i-1);
        }
        return i !== idx;
      }))
    }

  }



  const sendindex = (index) => {
    item.map( (ele, i) => {
      if(index === i){
        setitemholder(item[i]);
      }
    })
  }

  const onEdit = (index, call) => {
    sendindex(index);
    seteditpop(call);
    const interval = setTimeout(() => {
      settodopopclass("todopopbg");
    }, 0);
  }


  const edit = (val0, todo, time, todostatus) => {
    setitem(
      item.map((ele, idx) => {
        if(idx === val0){
          if( todostatus === 'Completed'){
            settodocom(todocom+1);
            settodoun(todoun-1);
          }
          if( todostatus === 'Unfinished'){
            settodoun(todoun+1);
            settodocom(todocom-1);
          }
          return{...ele, val0 : val0,
                        val1 : todo,
                        val2 : time,
                        val3 : todostatus}
        }
        return ele;
      }
      )
    )
  }



  const addVal = (todo, time, todostatus) => {
    let sno;
    if(item.length === 0){
        sno = 0;
    }
    else{
        sno = item[item.length-1].val0+1;
    }
    if( todostatus === 'Completed'){
      settodocom(todocom+1);
    }
    if( todostatus === 'Unfinished'){
      settodoun(todoun+1);
    }
    const updatedlist = {
            val0 : sno,
            val1 : todo,
            val2 : time,
            val3 : todostatus,
        }
    setitem([...item, updatedlist]);
    settodototal(sno+1);
  }
   
  
  return (
    <>
      <div className="todo_main">

        <DateList popstate = {setpop} todoslist = {item} del = {onDelete} calledit = {onEdit} setchangepopclass = {settodopopclass}  />

        <div className="todo_right">
          <Todostatus totaltodo = {todototal} untodo = {todoun} comtodo = {todocom} />
          <Yestodo/>
          {/* <Idea/> */}
        </div>
        {/* todo_right */}

      </div>
      {/* todo_main  */}

      {pop && <Todopop  popstate = {setpop} addtodo = {addVal} changepopclass = {todopopclass} setchangepopclass = {settodopopclass} />}
      
      {editpop && <Todoedit editstate = {seteditpop} passtodo = {itemholder} editvalue = {edit} changepopclass = {todopopclass} setchangepopclass = {settodopopclass} /> }

    </>
  );
};
