import React, { ChangeEvent, useEffect, useState } from "react"
import Navbar from "../../../components/navbar/Navbar"
import { UIInput } from "../../../ui/uiinput/UIInput"
import UIButton from "../../../ui/uibutton/UIButton"
import PrevBtn from "../../../ui/prevbutton/BackBtn"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../redux/store"
import { createVCampaign } from "../../../redux/actions/votingCampaign/createVcampaign.action"
import { TypedSelector } from "../../../utils/redux.utils"
import { loginData } from "../../../redux/slices/login/login.slices"
import { xApiKey } from "../../../redux/slices/XapiKey/xApiKey.slice"
import { convertToIsoDateTime } from "../../../utils/helper"
import { votingCampaignCreationData } from "../../../redux/slices/votingCampaign/CreateVCamp.slice"
import { CreateVotingCampaign } from "../../../utils/zod/campaign.schema"
import { errorToast } from "../../../utils/toastify"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
export interface VotingCampaighCreationState {
  logo: File | null
  title: string
  description: string
  banner: File | null
  startDateTime: string
  endDateTime: string
  timeZone: string
}
export const VotingCampaignAddEntry = () => {
  const [state, setState] = useState<VotingCampaighCreationState>({
    title: "",
    description: "",
    logo: null,
    banner: null,
    startDateTime: "",
    endDateTime: "",
    timeZone: "GMT",
  })
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const loginInfo = TypedSelector(loginData)
  const xapiKey = TypedSelector(xApiKey)
  const votingCamp = TypedSelector(votingCampaignCreationData)
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    if (e.target instanceof HTMLInputElement && e.target.type === "file") {
      const files = e.target.files
      if (files && files.length > 0) {
        setState((prev) => ({ ...prev, [name]: files[0] }))
        return
      }
    }
    setState((prev) => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const finalState = CreateVotingCampaign.safeParse({
        ...state,
        startDateTime: convertToIsoDateTime(state.startDateTime),
        endDateTime: convertToIsoDateTime(state.endDateTime),
      })
      if (finalState.success) {
        const data = {
          data: finalState.data,
          xapi: xapiKey.x_api as string,
          authToken: loginInfo?.data?.token as string
        }
        dispatch(createVCampaign(data))
      } else {
        errorToast(finalState.error.issues.at(0)?.message as string)
      }
    } catch (error) {
    }
  }
  useEffect(() => {
    if (votingCamp.data?.success) {
      toast.success("campaign created")
      navigate("/votingcampaign")
    }
  }, [votingCamp])
  return (
    <div className="framecontainer">
      <Toaster />
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Add Entry - Voting Campaign" showBars />
        </div>
        <PrevBtn />
        <div className="form-wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <div className="input">
              <UIInput
                value={state.title}
                onChange={handleChange}
                name="title"
                label="Title"
                type="text"
              />
            </div>

            <div className="input">
              <UIInput
                onChange={handleChange}
                name="logo"
                label="Logo"
                type="file"
              />
            </div>
            <div className="input">
              <UIInput
                onChange={handleChange}
                name="banner"
                label="Banner"
                type="file"
              />
            </div>
            <div className="input">
              <UIInput
                value={state.startDateTime}
                onChange={handleChange}
                name="startDateTime"
                label="StartDate"
                type="date"
              />
            </div>
            <div className="input">
              <UIInput
                value={state.endDateTime}
                onChange={handleChange}
                name="endDateTime"
                label="EndDate"
                type="date"
              />
            </div>
            <div className="input textarea">
              <label className="label">Description</label>
              <textarea
                value={state.description}
                name="description"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="btn-wrapper">
              <UIButton
                label="Save"
                className="form-btn"
                type="submit" // Add type attribute for form submission
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
