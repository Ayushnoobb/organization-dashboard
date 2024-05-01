import React from "react"
import Navbar from "../../../components/navbar/Navbar"

const PerformancePage = () => {
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Performance" showBars />
        </div>
      </div>
    </div>
  )
}
export default PerformancePage
