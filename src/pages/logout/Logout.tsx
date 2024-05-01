import React from "react"
import Navbar from "../../components/navbar/Navbar"

export const Logout = () => {
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Dashboard" showBars />
        </div>
      </div>
    </div>
  )
}
