import React, { useState } from "react"
import Navbar from "../../../components/navbar/Navbar"
import UIButton from "../../../ui/uibutton/UIButton"

export const EmailNotification = () => {
  const [emailMethod, setemailMethod] = useState("")
  let handelsubmit = () => {
    console.log()
  }

  let options = ["PHP Mail", "SMPT", "Send Grid API", "Mailjet API"]
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Email Notification Setting" showBars />
        </div>

        <div className="e-container">
          <div className="e-box">
            <div className="top">
              <p>Email Send Method</p>
            </div>

            <div className="userselect">
              <select
                value={emailMethod}
                onChange={(e) => {
                  setemailMethod(e.target.value)
                }}
                name="mail"
                id="mail"
              >
                {options.map((opt, index) => {
                  return <option key={index}>{opt}</option>
                })}
              </select>

              <UIButton
                type="submit"
                label="Submit"
                onClick={handelsubmit}
                className="btn-primary"
                style={{ color: "white" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
