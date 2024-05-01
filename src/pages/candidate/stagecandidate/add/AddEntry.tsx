import React, { useState } from "react"
import Navbar from "../../../../components/navbar/Navbar"
import { UIInput } from "../../../../ui/uiinput/UIInput"
import UIButton from "../../../../ui/uibutton/UIButton"
import PrevBtn from "../../../../ui/prevbutton/BackBtn"

// "id":"2ed2893",
// "candidateId":"7613c0f30540549b",
// "votingCampaignStageId":"bb78fc767e49a446"

export const StageCandidateAddEntry = () => {
  const [state, setstate] = useState({
    candidateId: "",
    votingCampaignStageId: "",
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
          <Navbar name="Add Entry - Voting Campaign" showBars />
        </div>

        <PrevBtn />
        <div className="form-wrapper">
          <form className="form">
            <div className="input">
              <UIInput
                value={state.candidateId}
                onChange={handelchange}
                name="candidateId"
                label="Candidate Id"
                type="text"
              />
            </div>
            <div className="input">
              <UIInput
                value={state.votingCampaignStageId}
                onChange={handelchange}
                name="votingCampaignStageId"
                label="VotingCampaignStageId"
                type="text"
              />
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
