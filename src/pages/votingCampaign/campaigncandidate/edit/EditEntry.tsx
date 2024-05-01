/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react"
import PrevBtn from "../../../../ui/prevbutton/BackBtn"
import Navbar from "../../../../components/navbar/Navbar"
import { UIInput } from "../../../../ui/uiinput/UIInput"
import {
  S3_URL,
  campaignStageData,
  votingCampaignData,
} from "../../../../constants/constants"
import UIButton from "../../../../ui/uibutton/UIButton"
import { useLocation, useNavigate } from "react-router-dom"
import { CandidateInterface } from "../../../../redux/slices/interface/candidates.interface"
import { FaCamera } from "react-icons/fa"
import { CreateCandidateSchema } from "../../../../utils/zod/Candidate.schema"
import { dismissToast, errorToast, loadingToast, successToast } from "../../../../utils/toastify"
import { useAppDispatch } from "../../../../utils/redux.utils"
import { EditCandidatesThunk } from "../../../../redux/actions/candidates/editCandidates.actions"
import { useDispatch, useSelector } from "react-redux"
import { RootStore } from "../../../../redux/store"
import { dataService } from "../../../../utils/axios"
import { resetState } from "../../../../redux/slices/candidates/editCandidates.slice"

export const CEditEntry = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const candidateData: CandidateInterface = location.state?.data
  if (!location.state?.data) navigate(-1);

  const dispatch = useAppDispatch()
  const dispatchActions = useDispatch();

  const { x_api } = useSelector((state: RootStore) => state.x_api_key)
  const { data } = useSelector((state: RootStore) => state.login)
  const { isFulfilled, isRejected, isLoading } = useSelector((state: RootStore) => state.update_candidate)

  const [state, setstate] = useState<Partial<CandidateInterface>>({
    name: candidateData?.name,
    age: candidateData?.age,
    gender: candidateData?.gender,
    nationality: candidateData?.nationality,
    weight: candidateData?.weight,
    city: candidateData?.city,
    biography: candidateData?.biography,
    socialMediaFacebook: candidateData?.socialMediaFacebook,
    socialMediaInstagram: candidateData?.socialMediaInstagram,
    socialMediaTwitter: candidateData?.socialMediaTwitter,
    code: candidateData?.code,
    votingCampaignId: candidateData?.votingCampaignId,
  })

  const handelchange = (e: any) => {
    const { name, value } = e.target
    const newValue = name === "age" ? value.toString() : value
    setstate((prev: any) => ({ ...prev, [name]: newValue }));
  }

  const submithandler = (e: any) => {
    e.preventDefault()
    const validationResult = CreateCandidateSchema.safeParse({ ...state })
    if (validationResult.error) {
      errorToast(JSON.parse(validationResult.error.message).at(0).message);
      return;
    }
    dataService.setApiKey(x_api!)
    dataService.setToken(data.token!)
    const id = candidateData.id
    dispatch(EditCandidatesThunk({ id, ...state, age: state.age?.toString() }))
  }

  const handleFileChange = (e: any) => {
    e.preventDefault()
  }

  const handleImageClick: () => void = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    dismissToast();
    isLoading && loadingToast('Your request is processing')
    isRejected && errorToast('Error updating candidate')
    isFulfilled && successToast('Successfully updated candidate')
    isFulfilled && (
      dispatchActions(resetState()) &&
      navigate(-1)
    )
  }, [isFulfilled, isLoading, isRejected])

  useEffect(() => {
    dispatchActions(resetState())
  }, [])

  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Edit Entry - Candidate" showBars />
        </div>

        <PrevBtn />
        <div className="form-wrapper">
          <form className="relative w-fit flex items-center gap-4">
            <div className="relative mb-6">
              <img src={S3_URL + candidateData?.profilePicture} width={100} height={100} className="rounded-full w-48 h-48 object-cover"></img>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
              <FaCamera onClick={handleImageClick} className="absolute w-8 h-8 bottom-4 right-2 fill-[var(--c-secondary)] cursor-pointer" />
            </div>
            <span className="opacity-[0.8]">#{candidateData?.code}</span>
          </form>
          <form className="form">
            <div className="input">
              <UIInput
                value={state.name}
                onChange={handelchange}
                name="name"
                label="Name"
                type="text"
              />
            </div>

            <div className="input">
              <UIInput
                value={state.votingCampaignId}
                onChange={handelchange}
                name="votingCampaignId"
                label='VotingCampaignId'
                type='text'
                readOnly='true'
              />
            </div>
            <div className="input">
              <UIInput
                value={state.city}
                onChange={handelchange}
                name="city"
                label='City'
                type='text'
              />
            </div>

            <div className="input">
              <UIInput
                value={state.age}
                onChange={handelchange}
                name="age"
                label="Age"
                type="number"
              />
            </div>
            <div className="input">
              <label className="label">Gender</label>
              <select
                value={state.gender}
                onChange={handelchange}
                name="gender"
              >
                {
                  state.gender?.toUpperCase() == 'Male'.toUpperCase() && (
                    <>
                      <option selected>{state.gender}</option>
                      <option>Female</option>
                      <option>Others</option>
                    </>
                  )
                }
                {
                  state.gender?.toUpperCase() == 'Female'.toUpperCase() && (
                    <>
                      <option selected>{state.gender}</option>
                      <option>Male</option>
                      <option>Others</option>
                    </>
                  )
                }
                {
                  state.gender?.toUpperCase() == 'Othsers'.toUpperCase() && (
                    <>
                      <option selected>{state.gender}</option>
                      <option>Male</option>
                      <option>Female</option>
                    </>
                  )
                }
              </select>
            </div>
            <div className="input">
              <UIInput
                value={state.nationality}
                onChange={handelchange}
                name="nationality"
                label="Nationality"
                type="text"
              />
            </div>

            <div className="input">
              <UIInput
                value={state.weight}
                onChange={handelchange}
                name="weight"
                label="Weight in KG"
                type="text"
              />
            </div>
            <div className="input">
              <UIInput
                value={state.socialMediaFacebook}
                onChange={handelchange}
                name="socialMediaFacebook"
                label="Facebook"
                type="name"
              />
            </div>
            <div className="input">
              <UIInput
                value={state.socialMediaInstagram}
                onChange={handelchange}
                name="socialMediaInstagram"
                label="Instagram"
                type="text"
              />
            </div>
            <div className="input">
              <UIInput
                value={state.socialMediaTwitter}
                onChange={handelchange}
                name="socialMediaTwitter"
                label="Twitter"
                type="text"
              />
            </div>

            <div className="input textarea">
              <label className="label">Biography</label>
              <textarea
                value={state.biography}
                onChange={handelchange}
                name="biography"
                className="h-128"
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
