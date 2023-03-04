import React from "react";

export const DailyExList = ({listval, delItem, edit}) => {

  const editItem = () => {
    edit(listval.val0, true);
  }
  // props.list.map( (list, idx) => {
    return (
      <>
        <div className="daily_input">
          <div className="list_part_1">
            <h3 className="spentat"> {listval.val1} </h3> 
            <h3 className="time"> {listval.val2} </h3>
            <h3 className="dialy_payment">{listval.val3}</h3>
            <h3 className="daily_amount">₹ {listval.val4}</h3>
          </div>
          <div className="list_part_2">
            <i className="fa-solid fa-pen-to-square edit" onClick={editItem}></i>
            <i className="fa-solid fa-trash-can delete" onClick={delItem }></i>
          </div>
        </div>
        {/* daily_input */}
        <hr />
      </>
    );
  // })

};
