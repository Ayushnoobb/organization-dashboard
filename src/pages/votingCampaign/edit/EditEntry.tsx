import React, { ElementRef, useEffect, useRef, useState } from "react"
import Navbar from "../../../components/navbar/Navbar"
import { UIInput } from "../../../ui/uiinput/UIInput"
import UIButton from "../../../ui/uibutton/UIButton"
import PrevBtn from "../../../ui/prevbutton/BackBtn"
import { useLocation, useNavigate, useNavigation, useParams } from "react-router-dom"
import { loginData } from "../../../redux/slices/login/login.slices"
import { TypedSelector, useAppDispatch } from "../../../utils/redux.utils"
import { xApiKey } from "../../../redux/slices/XapiKey/xApiKey.slice"
import { updateCampaignById } from "../../../redux/actions/votingCampaign/updateCampaignById.action"
import { updateVCampaignSchema } from "../../../utils/zod/voting_campaign/updateVCampaign.schema"
import { Rows } from "../../../redux/slices/votingCampaign/votingCamp.slice"
import { convertIsoToNormalDateTime, convertToIsoDateTime } from "../../../utils/helper"
import toast, { Toaster } from "react-hot-toast"
import { resetCampaignUpdate, updateCampaign } from "../../../redux/slices/votingCampaign/updateVCampaign.slice"
import { S3_URL } from "../../../constants/constants"
import { FaCamera } from "react-icons/fa6"
import { updateCampaignLogo } from "../../../redux/actions/votingCampaign/updateLogo.action"
import { resetUpdateLogo, updateCampaignLogoState } from "../../../redux/slices/votingCampaign/updateLogo.slice"
import { updateCampaignBanner } from "../../../redux/actions/votingCampaign/updateBanner.action"
// "id": "48583f4a5094bbf3",
// "organizationID": "dccf2183a9ff686a",
// "title": "tow",
// "description": "ahdfsdasd",
// "logo": "3205126abc8e3267",
// "banner": "a87f394ab91bae99",
// "startDateTime": "2024-03-30T07:45:21.894Z",
// "endDateTime": "2024-03-31T07:49:21.894Z",
// "timeZone": "ABC",
// "updated": "2024-03-29T09:40:39.378Z",
// "inserted": "2024-03-29T09:40:39.378Z"

export const VotingCampaignEditEntry = () => {
  const location = useLocation()
  const campaignData: Rows = location?.state?.campaign
  let { id } = useParams()
  const navigation = useNavigate()
  const loginInfo = TypedSelector(loginData)
  const logoState = TypedSelector(updateCampaignLogoState)
  const xapiKey = TypedSelector(xApiKey)
  const updateCampaignState = TypedSelector(updateCampaign)
  const dispatch = useAppDispatch()
  const fileRef = useRef<ElementRef<"input">>(null)
  const bannerRef = useRef<ElementRef<"input">>(null)
  const [file, setFile] = useState<any>(null)
  const [banner, setBanner] = useState<any>(null)
  const [state, setstate] = useState({
    title: campaignData.title || "",
    description: campaignData.description || "",
    startDateTime: convertIsoToNormalDateTime(campaignData.startDateTime) ?? "",
    endDateTime: convertIsoToNormalDateTime(campaignData.endDateTime) ?? "",
    timeZone: campaignData.timeZone || "NST"
  })

  const handelchange = (e: any) => {
    const value = e.target.value
    setstate((prev) => ({ ...prev, [e.target.name]: value ?? "" }))
  }
  const submithandler = (e: any) => {
    e.preventDefault()
    try {
      const validateData = updateVCampaignSchema.safeParse({
        ...state,
        startDateTime: convertToIsoDateTime(state.startDateTime),
        endDateTime: convertToIsoDateTime(state.endDateTime)
      })
      if (validateData.success) {
        const Args = {
          id: id as string,
          xApi: xapiKey.x_api as string,
          authToken: loginInfo.data.token as string,
          data: validateData.data
        }
        dispatch(updateCampaignById(Args))
      } else {
        console.log(validateData.error)
      }
    } catch (error) {
      console.log("something went wrong")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files)
      setFile(URL.createObjectURL(e.target.files[0]))
  }
  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files)
      setBanner(URL.createObjectURL(e.target.files[0]))
  }
  const handleFileUpload = () => {
    fileRef.current?.click()
  }
  const handleBannerUpload = () => {
    bannerRef.current?.click()
  }
  useEffect(() => {
    if (updateCampaignState.data?.success) {
      toast.success("campaign updated")
      navigation("/votingcampaign")
      dispatch(resetCampaignUpdate())
    }
  }, [updateCampaignState])
  useEffect(() => {
    if (fileRef.current?.files) {
      if (fileRef.current?.files[0]) {
        const pass = {
          id: campaignData.id,
          data: {
            logo: fileRef.current.files[0],
          },
          xapi: xapiKey.x_api as string,
          authToken: loginInfo.data.token as string
        }
        dispatch(updateCampaignLogo(pass))
      }
    }
  }, [file])
  useEffect(() => {
    if (bannerRef.current?.files) {
      if (bannerRef.current?.files[0]) {
        const pass = {
          id: campaignData.id,
          data: {
            banner: bannerRef.current.files[0],
          },
          xapi: xapiKey.x_api as string,
          authToken: loginInfo.data.token as string
        }
        dispatch(updateCampaignBanner(pass))
      }
    }
  }, [banner])
  useEffect(() => {
    if (logoState.data?.success) {
      toast.success("Logo updated")
      navigation("/votingcampaign")
      dispatch(resetUpdateLogo())
    }
    if (logoState.isError) {
      toast.error("something went wrong")
      dispatch(resetUpdateLogo())
    }
  }, [logoState])
  return (
    <div className="framecontainer">
      <Toaster />
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Edit Entry - Voting Campaign" showBars />
        </div>
        <PrevBtn />
        <div className="form-wrapper">
          <div className="z-30 h-auto relative mb-10 flex overflow-hidden">
            <FaCamera size={20} className="absolute -z-20 right-5 top-5 cursor-pointer text-pink-500 "
              onClick={handleBannerUpload}
            />
            <input type="file" ref={bannerRef} className="hidden" onChange={handleBannerChange} />
            <img src={banner ?? S3_URL.concat(campaignData.banner)} alt="bannerimage" className="absolute w-full -z-30" />
            <div className="overflow-hidden bg-cyan-400 h-48 w-48 flex items-center justify-center rounded-full border-2 border-gray-300 ">
              <input type="file" ref={fileRef} className="hidden" onChange={handleChange} />
              <FaCamera size={20} className="absolute left-40 bottom-6 cursor-pointer text-pink-500 "
                onClick={handleFileUpload}
              />
              <img src={file ?? S3_URL.concat(campaignData.logo)} alt="Logo" className="object-cover h-48 w-48" />
            </div>
          </div>
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
                value={state.timeZone}
                onChange={handelchange}
                name="timeZone"
                label="timeZone"
                type="text"
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
