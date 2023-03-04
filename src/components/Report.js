import React from 'react'

export const Report = () => {
  return (
    <>
        <div className="report_box">
            <h2 className="report">Reports</h2>
            <div className="report_row">
                <div className="report_1">
                    <span className="report_h_1">Spent this Month</span>
                    <h2 className="report_v_1">₹ 35000</h2>
                </div>
                <div className="report_2">
                    <span className="report_h_2">Spent Today</span>
                    <h2 className="report_v_2">₹ 650</h2>
                </div>
                <div className="report_3">
                    <span className="report_h_3">Withdrawn this Month</span>
                    <h2 className="report_v_3">₹ 20000</h2>
                </div>
                <div className="report_4">
                    <span className="report_h_4">Big Transactions <br/> this Month</span>
                    <h2 className="report_v_4">₹ 25000</h2>
                </div>
            </div>
        </div>  
        {/* report_box */}
    </>
  )
}
