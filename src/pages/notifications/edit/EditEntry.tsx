/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { UIInput } from "../../../ui/uiinput/UIInput"
import Navbar from "../../../components/navbar/Navbar"
import UIButton from "../../../ui/uibutton/UIButton"
import PrevBtn from "../../../ui/prevbutton/BackBtn"

// "id": "1ba2ed2b63c92b91",
// "organizationID": "dccf2183a9ff686a",
// "title": "notification",
// "message": "hello world",
// "userId": "b1817772f081503b",
// "inserted": "2024-03-29T09:44:48.416Z",
// "updated": "2024-03-29T09:44:48.416Z"

export const NEditEntry = () => {
  const [state, setstate] = useState({
    title: "notification",
    message: "hello world",
    userId: "b1817772f081503b",
  })

  const handelchange = (e: any) => {
    const value = e.target.value
    setstate((prev) => ({ ...prev, [e.target.name]: value ?? "" }))
  }

  const submithandler = (e: any) => {
    e.preventDefault()
  }

  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Edit Entry - Notification" showBars />
        </div>

        <PrevBtn />
        <div className="form-wrapper">
          <form className="form">
            <div className="input">
              <UIInput
                value={state.title}
                onChange={handelchange}
                name="title"
                label="Title"
                type="text"
              />
            </div>

            <div className="input">
              <UIInput
                value={state.userId}
                onChange={handelchange}
                name="userId"
                label="User ID"
                type="text"
              />
            </div>

            <div className="input">
              <label>Message</label>
              <textarea
                value={state.message}
                name="message"
                onChange={handelchange}
              ></textarea>
            </div>

            <div className="btn-wrapper">
              <UIButton
                label="Save"
                className="form-btn"
                onClick={submithandler}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
