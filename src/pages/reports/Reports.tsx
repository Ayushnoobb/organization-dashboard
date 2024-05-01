import React from "react"
import Navbar from "../../components/navbar/Navbar"
import Performance from "../../components/performance/Performance"
export const Reports = () => {
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Report" showBars />

          <div className="report">
            <Performance title="campaign" />

            <div className="voting-trend">
              <h1 className="report-title">Voting Trends</h1>
            </div>

            <div className="status">
              <h1 className="report-title">Campaign Status</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
