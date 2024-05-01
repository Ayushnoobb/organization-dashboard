import React from "react"
import Navbar from "../../../components/navbar/Navbar"

export const VoteTrends = () => {
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Votes Trends" showBars />
        </div>
      </div>
    </div>
  )
}
