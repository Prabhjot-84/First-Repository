import React from 'react'

export const Detail = () => {
  return (
    <>
        <div className="detail_box">
            <h2 className="detail">Details</h2>
            <div className="detail_row">
                <div className="detail_1">
                    <span className="detail_h_1">Income</span>
                    <span className="det">
                        <h2>₹ </h2>
                        <input type="text" className="detail_v_1"/>
                    </span> 
                </div>
                <div className="detail_2">
                    <span className="detail_h_2">Savings</span>
                    <span className="det">
                        <h2>₹ </h2>
                        <input type="text" className="detail_v_1"/>
                    </span>
                </div>
            </div>
        </div>  
        {/* detail_box */}
    </>
  )
}
