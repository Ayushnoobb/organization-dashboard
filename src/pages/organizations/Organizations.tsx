import React from "react"
import Navbar from "../../components/navbar/Navbar"

export const Organizations = () => {
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Organization" showBars />
        </div>
      </div>
    </div>
  )
}
