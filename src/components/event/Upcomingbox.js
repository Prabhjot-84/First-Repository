import React,{useState} from "react";

export const Upcomingbox = (props) => {

  const [checkedbtn, setcheckedbtn] = useState('checked-btn');
  const [upcomingbottom, setupcomingbottom] = useState('upcomingbottom')

  const checkFunc = () => {

    if(checkedbtn !== 'checkbtnpress'){
      props.chatt(props.attended+1);
    }

    setcheckedbtn('checkbtnpress');
    setupcomingbottom('updatedbottom');
  }

  const delFunc = () => {
    props.delitem();
    if(checkedbtn === 'checkbtnpress'){
      setcheckedbtn('checked-btn');
      setupcomingbottom('upcomingbottom');
      props.chatt(props.attended-1);
    }
  }


  return (
    <>
      <div className="upcomingcontainer">
        <div className="upcomingtop">
          <span className={checkedbtn} onClick={checkFunc} ><i className="fa-solid fa-circle-check checkedbtn" ></i></span>
          <div className="rightbuttons">
            <i className="fa-solid fa-pen-to-square edit" onClick={props.editbutton} ></i>
            <i className="fa-solid fa-trash-can delete" onClick={delFunc}></i>
          </div>
        </div>

        <div className="upcomingmid">
          <h3> {props.value.val3} </h3>
          <h4> {props.value.val4} </h4>
        </div>

        <div className={upcomingbottom}>
          <h3> {props.value.val1} </h3>
          <h3> {props.value.val2} </h3>
        </div>
      </div>

    </>
  );
};
