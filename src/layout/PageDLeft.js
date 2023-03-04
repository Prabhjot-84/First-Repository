import React from "react";
// import { DLeftTop } from "./DLeftTop";
import { Eventcalendar } from '../components/event/Eventcalendar';
import { Eventnext } from '../components/event/Eventnext';
import { Eventstat } from '../components/event/Eventstat';
import { Upcomingbox } from '../components/event/Upcomingbox';

export const PageDLeft = (props) => {
  
  return (
    <>
      <div className="PageDLeft">
        {/* <DLeftTop sendb = {props.senda} delb = {props.dela} /> */}

        <div className="dlefttop">

          <div className="dleftupper">
            <Eventcalendar />
            <Eventstat tot = {props.total} attended = {props.attend} /> 
            <Eventnext />
          </div>

          <div className="dleftlower">
            {props.senda.map((ele, idx) => {
              return (
                <Upcomingbox key={idx} value={ele} delitem={() => {props.dela(idx)}} editbutton = {() => {props.editbtn(idx)}} attended={props.attend} chatt = {props.changeatt} />
              );
            })}
          </div> 

        </div>

      </div>
    </>
  );
};
