import React, { useState } from 'react'

export const Navbar = (props) => {

    const expFunc = () => {
        props.changePageN('main_B');
        const interval = setTimeout(() => {
            props.changeclass("slider_light");
        }, 0);
        const interval2 = setTimeout(() => {
            props.changeclass("slider");
        }, 500);
    } 

    const todoFunc = () => {
        props.changePageN('main_C');
        const interval = setTimeout(() => {
            props.changeclass("slider_light");
        }, 0);
        const interval2 = setTimeout(() => {
            props.changeclass("slider");
        }, 500);
    }

    const eventFunc = () => {
        props.changePageN('main_D');
        const interval = setTimeout(() => {
            props.changeclass("slider_light");
        }, 0);
        const interval2 = setTimeout(() => {
            props.changeclass("slider");
        }, 500);
    }

  return (
    <>
    <div className="navigation">

            <div className="left">
                <i className="fa-solid fa-bars fa-2x"></i>
                <h1 className="logo"> <img src="./img/tracker.png" alt=""/> &nbsp; Ur Tracker</h1>
                <h2 className="home"  >Home</h2>
                <h2 className="expenses" onClick={expFunc} >Finance Manager</h2>
                <h2 className="todos" onClick={todoFunc} >Todos</h2>
                <h2 className="manage" onClick={eventFunc} >Event Manager</h2>
                
                <div className="menu">
                    <h2 className="home">Home</h2>
                    <h2 className="expenses">Expenses</h2>
                    <h2 className="todos">Todos</h2>
                    <h2 className="manage">Event Manager</h2>
                </div>

            </div>    
            {/*  left */}


            
            <div className="right">
                <i className="fa-solid fa-brush theme"></i>
                <div className="notification">
                    <span className="number">2</span>
                    <i className="fa-solid fa-bell"></i>
                </div>
                <h1 className="profile" >Hello ! <span className="name"> &nbsp; Prabhjot Singh </span> &nbsp; <img src="./img/profile.png" alt="" className="profile_img"/> </h1>
            </div>   
            {/*  right  */}


        </div>  
        {/*  navbar  */}
    </>
  );
}
