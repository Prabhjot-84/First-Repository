import React from 'react'
import moment from 'moment/moment';
import { useState } from 'react';

export const Dates = () => {

  const today = new Date();

  var day1 = new Date(today);
  day1.setDate(day1.getDate()-3);

  var day2 = new Date(today);
  day2.setDate(day2.getDate()-2);

  var day3 = new Date(today);
  day3.setDate(day3.getDate()-1);

  // var day4 = new Date(day3);
  // day4.setDate(day4.getDate()+1);

  var day5 = new Date(today);
  day5.setDate(day5.getDate()+1);

  var day6 = new Date(day5);
  day6.setDate(day6.getDate()+1);

  var day7 = new Date(day6);
  day7.setDate(day7.getDate()+1);

  return (
    <div className="todo_date">
        {/* <h3 className="empty"></h3> */}
        <h3> {moment(day1).format("Do")} {moment(day1).format("ddd")} </h3>
        <h3> {moment(day2).format("Do")} {moment(day2).format("ddd")} </h3>
        <h3> {moment(day3).format("Do")} {moment(day3).format("ddd")} </h3>
        <h3 className='todo_today' > {moment(today).format("Do")} {moment(today).format("ddd")} </h3>
        <h3> {moment(day5).format("Do")} {moment(day5).format("ddd")} </h3> 
        <h3> {moment(day6).format("Do")} {moment(day6).format("ddd")} </h3>
        <h3> {moment(day7).format("Do")} {moment(day7).format("ddd")} </h3>
    </div>
  )
}
