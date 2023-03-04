import React from "react";

export const BigList = ({listval, delitem, editele}) => {

  const editFunc = () => {
    // editpop(true);
    editele(listval.val0, true); 
  }

  return (
    <>  
      <div className="big_input">
        <div className="big_part_1">  
          <h3 className="sendto"> {listval.val1} </h3>
          <h3 className="big_date"> {listval.val2} </h3>
          <h3 className="big_status"> {listval.val3} </h3>{" "}
          {/* <!-- <span>Sent</span> <span>Pending</span> <span>Decline</span> --> */}
          <h3 className="big_payment"> {listval.val4} </h3>
          <h3 className="big_amount">₹ {listval.val5} </h3>
        </div>
        <div className="big_part_2">
          <i className="fa-solid fa-pen-to-square edit" onClick={  editFunc } ></i>
          <i className="fa-solid fa-trash-can delete" onClick={delitem}></i>
        </div>
      </div>
      {/* big_input */}
      <hr />
    </>
  );
};
