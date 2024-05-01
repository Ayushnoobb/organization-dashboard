import React from "react"
import Navbar from "../../../components/navbar/Navbar"

export const GlobalTemplate = () => {
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Global Template" showBars />
        </div>
      </div>
    </div>
  )
}
