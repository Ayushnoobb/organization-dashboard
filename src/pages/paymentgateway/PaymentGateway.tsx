/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import { UIInput } from "../../ui/uiinput/UIInput"
import UIButton from "../../ui/uibutton/UIButton"

export const PaymentGateway = () => {
  const [state, setState] = useState({
    title: "Pay Offline",
    desc: "Pay offline on this account number xxxxxxxxx and send a screenshot to us on this email xxx@xxx.com ",
    id: "pk_test_51NGI3WSJ7RHyuQ0ARpYwHAK6WJYygcXmJTwwcVZsvusgQUSDMybxIpwt86U8uSp5RFBhAn3O9xxxxxxxxxxxxxxxxxxxxxxxxx",
    key: "sk_test_51NGI3WSJ7RHyuQ0AG7eC7wD7kJrpTFKCnNaj3IwIIUVbJcPxE33YonYSyjJt9fEqEfEHWtpZ72Hy0Txxxxxxxxxxxxxxxxxxxxxxxxx",
  })

  const handlechange = (e: any) => {
    const value = e.target.value
    setState((prev) => ({ ...prev, [e.target.name]: value ?? "" }))
  }

  let submithandler = () => {
    console.log(state.title, state.desc, state.id, state.key)
  }

  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Payment Gateway" showBars />
        </div>

        <div className="payment-box">
          <div className="offline-pay">
            <p className="title">Offline Pay</p>

            <div className="input">
              <UIInput
                name="title"
                onChange={handlechange}
                type="text"
                value={state.title}
                label="Title"
              />

              <UIInput
                name="desc"
                onChange={handlechange}
                type="text"
                value={state.desc}
                label="Description"
              />
            </div>
          </div>
          <div className="offline-pay">
            <p className="title">Stripe Gateway</p>

            <div className="input">
              <UIInput
                name="id"
                onChange={handlechange}
                type="text"
                value={state.id}
                label="ID"
              />

              <UIInput
                name="key"
                onChange={handlechange}
                type="text"
                value={state.key}
                label="KEYS"
              />
              <UIButton
                onClick={submithandler}
                label="Update"
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
