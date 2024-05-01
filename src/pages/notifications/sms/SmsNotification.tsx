import React, { useState } from "react"
import Navbar from "../../../components/navbar/Navbar"
import UIButton from "../../../ui/uibutton/UIButton"
import { UIInput } from "../../../ui/uiinput/UIInput"

export const SMS = () => {
  const [emailMethod, setemailMethod] = useState("")
  const [state, setstate] = useState({
    apikey:
      "AAAAajheBL0:APA91bFkALYOOezyaw_divqV_jMI4U_wpbcNrLhYw00o8VDkSWmiJpArXOKrC8ysCrpi16wQtvBPjosU95q-qjvGpXFv2Mzba0ENDMns5mBWkKHRvVqe9Z7y2_GoIheompNbpgipiwcu",
  })

  let handelsubmit = () => {
    console.log(emailMethod)
  }

  let handlechange = (e: any) => {
    let value = e.target.value
    setstate((prev) => ({ ...prev, [e.target.name]: value ?? "" }))
  }

  let options = [
    "Clickatell",
    "Infobip",
    "Message Bird",
    "Nexmo",
    "SMS Boardcast",
    "Twilio",
    "Text Magic",
    "Custom API",
  ]
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="SMS Notification Setting" showBars />
        </div>

        <div className="e-container">
          <div className="e-box">
            <div className="userselect">
              <div>
                <p>SMS Send Method</p>
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
              </div>

              <div className="user-input">
                <p>Clickabell Configuration</p>
                <UIInput
                  name="apikey"
                  onChange={handlechange}
                  type="text"
                  value={state.apikey}
                  label="API Keys"
                />
              </div>

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
