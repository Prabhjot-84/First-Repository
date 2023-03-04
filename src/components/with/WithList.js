import React from 'react'

export const WithList = (props) => {

  const editFunc = () => {
    props.editstate(props.listval.val0, true);
  }

  return (
    <>  

            <div className="withdraw_input">
                <div className="withdraw_part_1">
                    <h3 className="withdrawnfrom"> {props.listval.val1} </h3>  
                    <h3 className="withdraw_date"> {props.listval.val2} </h3>
                    <h3 className="withdraw_status"> {props.listval.val3} </h3>     
                    <h3 className="withdraw_amount">₹ {props.listval.val4} </h3>
                </div>
                <div className="withdraw_part_2">
                    <i className="fa-solid fa-pen-to-square edit" onClick={editFunc}></i>
                    <i className="fa-solid fa-trash-can delete" onClick={props.del}></i>
                </div>
            </div>  
            {/* withdraw_input */}
            <hr/>
            {/* <!-- <span>Sent</span> <span>Pending</span> <span>Decline</span> --></hr> */}
    </>

  )
}
