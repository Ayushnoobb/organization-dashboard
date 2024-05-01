import React, { useEffect, useState } from "react"
import Navbar from "../../../../components/navbar/Navbar"
import { UIInput } from "../../../../ui/uiinput/UIInput"
import UIButton from "../../../../ui/uibutton/UIButton"
import PrevBtn from "../../../../ui/prevbutton/BackBtn"
import { useLocation, useParams } from "react-router-dom"
import { TypedSelector, useAppDispatch } from "../../../../utils/redux.utils"
import { convertIsoToNormalDateTime, convertToIsoDateTime } from "../../../../utils/helper"
import { loginData } from "../../../../redux/slices/login/login.slices"
import { xApiKey } from "../../../../redux/slices/XapiKey/xApiKey.slice"
import { updateVCStage } from "../../../../redux/actions/votingCampaign/stages/updateVCStageById.action"
import { updateVotingCampaignStage } from "../../../../utils/zod/campaignstage/updateVCStage.schema"
import { StageRow } from "../../../../redux/slices/interface/stageByCampaignId.interface"
import { updateCampaignStage } from "../../../../redux/slices/votingCampaign/stage/updateVCStage.slice"
import toast, { Toaster } from "react-hot-toast"
interface EditVCStage {
  title: string
  description: string
  startDateTime: string
  endDateTime: string
  smsVotingLimit: string
  emailVotingLimit: string
  votingCampaignId: string
}
export const VCSEditEntry = () => {
  const { id, "*": wildcard } = useParams()
  const campaignId = wildcard?.split("/")[2]
  const location = useLocation()
  const campaignData: StageRow = location?.state?.current
  const [state, setstate] = useState<EditVCStage>({
    title: campaignData.title || "",
    description: campaignData.description || "",
    startDateTime: convertIsoToNormalDateTime(campaignData.startDateTime) ?? "",
    endDateTime: convertIsoToNormalDateTime(campaignData.endDateTime) ?? "",
    smsVotingLimit: String(campaignData.smsVotingLimit) || "",
    emailVotingLimit: String(campaignData.emailVotingLimit) || "",
    votingCampaignId: campaignId as string,
  })
  const dispatch = useAppDispatch()
  const loginInfo = TypedSelector(loginData)
  const xapikey = TypedSelector(xApiKey)
  const updateState = TypedSelector(updateCampaignStage)
  const handelchange = (e: any) => {
    const value = e.target.value
    setstate((prev) => ({ ...prev, [e.target.name]: value ?? "" }))
  }
  const submithandler = (e: any) => {
    e.preventDefault()
    try {
      const newState = updateVotingCampaignStage.safeParse({
        ...state,
        startDateTime: convertToIsoDateTime(state.startDateTime),
        endDateTime: convertToIsoDateTime(state.endDateTime)
      })
      if (newState.success) {
        const args = {
          id: id as string,
          data: newState.data,
          xApi: xapikey.x_api as string,
          authToken: loginInfo.data.token as string
        }
        dispatch(updateVCStage(args))
      } else
        console.log(newState.error)
    } catch (error) {
    }
  }
  useEffect(() => {
    if (updateState.data?.success) {
      toast.success("Updated")
      setstate({
        title: "",
        description: "",
        startDateTime: "",
        endDateTime: "",
        smsVotingLimit: "",
        emailVotingLimit: "",
        votingCampaignId: campaignId as string,
      })
    }
  }, [updateState])
  return (
    <div className="framecontainer">
      <Toaster />
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Edit Entry - Voting Campaign" showBars />
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
                value={state.votingCampaignId}
                onChange={handelchange}
                name="votingCampaignId"
                label="Voting Campaign ID"
                type="text"
                disabled={true}
              />
            </div>

            <div className="input">
              <UIInput
                value={state.startDateTime}
                onChange={handelchange}
                name="startDateTime"
                label="StartDateTime"
                type="date"
              />
            </div>
            <div className="input">
              <UIInput
                value={state.endDateTime}
                onChange={handelchange}
                name="endDateTime"
                label="EndDateTime"
                type="date"
              />
            </div>
            <div className="input">
              <UIInput
                value={state.smsVotingLimit}
                onChange={handelchange}
                name="smsVotingLimit"
                label="SMS Voiting Limit"
                type="number"
              />
            </div>
            <div className="input">
              <UIInput
                value={state.emailVotingLimit}
                onChange={handelchange}
                name="emailVotingLimit"
                label="Email Voiting Limit"
                type="number"
              />
            </div>

            <div className="input textarea">
              <label className="label">Description</label>
              <textarea
                value={state.description}
                name="description"
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
