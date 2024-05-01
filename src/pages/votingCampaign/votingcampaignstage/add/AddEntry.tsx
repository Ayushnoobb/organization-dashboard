import { ChangeEvent, useEffect, useState } from "react"
import Navbar from "../../../../components/navbar/Navbar"
import { UIInput } from "../../../../ui/uiinput/UIInput"
import UIButton from "../../../../ui/uibutton/UIButton"
import PrevBtn from "../../../../ui/prevbutton/BackBtn"
import { useNavigate, useParams } from "react-router-dom"
import { TypedSelector, useAppDispatch } from "../../../../utils/redux.utils"
import { loginData } from "../../../../redux/slices/login/login.slices"
import { xApiKey } from "../../../../redux/slices/XapiKey/xApiKey.slice"
import { convertToIsoDateTime } from "../../../../utils/helper"
import { CreateCampaignStage } from "../../../../utils/zod/campaignstage/campaignStage.schema"
import { errorToast } from "../../../../utils/toastify"
import { CreateCampaignStageInt, NewState } from "../../../../redux/slices/interface/campaignStage.interface"
import { createVCampaignStage } from "../../../../redux/actions/votingCampaign/stages/createCampaignStage.action"
import { votingCampaignStage } from "../../../../redux/slices/votingCampaign/stage/createVCStage.slice"
import { toast } from "react-toastify"

export const VCSAddEntry = () => {
  const [state, setState] = useState<CreateCampaignStageInt>({
    title: "",
    startDateTime: "",
    endDateTime: "",
    smsVotingLimit: "",
    emailVotingLimit: "",
    description: "",
    logo: null,
    banner: null
  })
  const navigate = useNavigate()
  const loginInfo = TypedSelector(loginData)
  const created = TypedSelector(votingCampaignStage)
  const xApi = TypedSelector(xApiKey)
  const { id } = useParams() // campaign id
  const dispatch = useAppDispatch()
  const handelchange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
  const submithandler = (e: any) => {
    e.preventDefault()

    const validateStage = CreateCampaignStage.safeParse({
      ...state,
      startDateTime: convertToIsoDateTime(state.startDateTime),
      endDateTime: convertToIsoDateTime(state.endDateTime),
      votingCampaignId: id as string,
    })
    if (validateStage.error) {
      errorToast(validateStage.error.issues.at(0)?.message as string)
    }
    if (validateStage.success) {
      const newState: NewState = {
        ...state,
        startDateTime: convertToIsoDateTime(state.startDateTime),
        endDateTime: convertToIsoDateTime(state.endDateTime),
        votingCampaignId: id as string
      }
      const Args = {
        data: newState,
        authToken: loginInfo.data.token as string,
        xApiKey: xApi.x_api as string
      }
      dispatch(createVCampaignStage(Args))
    }
  }

  useEffect(() => {
    // handle stage added here
    if (created.data?.success) {
      toast.success("created")
      navigate(`/votingcampaign`)
    }
  }, [created])
  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Add Entry - Voting Campaign stage" showBars />
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
            {/* <div className="input">
              <UIInput
                value={state.votingcampaignid}
                onChange={handelchange}
                name="votingcampaignid"
                label="Voting Campaign ID"
                type="text"
              />
            </div> */}
            <div className="input">
              <UIInput
                onChange={handelchange}
                name="logo"
                label="Logo"
                type="file"
              />
            </div>
            <div className="input">
              <UIInput
                onChange={handelchange}
                name="banner"
                label="Banner"
                type="file"
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
