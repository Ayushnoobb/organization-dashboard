import React from "react"
import Navbar from "../../../components/navbar/Navbar"

export const PushNotification = () => {
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Push Notification" showBars />
        </div>
      </div>
    </div>
  )
}
