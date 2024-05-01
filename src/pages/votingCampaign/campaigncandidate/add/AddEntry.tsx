/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react"
import Navbar from "../../../../components/navbar/Navbar"
import PrevBtn from "../../../../ui/prevbutton/BackBtn"
import { UIInput } from "../../../../ui/uiinput/UIInput"
import UIButton from "../../../../ui/uibutton/UIButton"
import { useLocation, useNavigate } from "react-router-dom"
import { dismissToast, errorToast, loadingToast, successToast } from "../../../../utils/toastify"
import { CreateCandidateSchema } from "../../../../utils/zod/Candidate.schema"
import { generateCode } from "../../../../utils/helper"
import { useDispatch, useSelector } from "react-redux"
import { RootStore } from "../../../../redux/store"
import { useAppDispatch } from "../../../../utils/redux.utils"
import { CreateCandidatesThunk } from "../../../../redux/actions/candidates/CreateCandidates.actions"
import { dataService } from "../../../../utils/axios"
import { resetState } from "../../../../redux/slices/candidates/createCandidates.slices"

export interface LocationProps {
  state: {
    id: string,
    name: string
  }
}

export const CAddEntry: React.FC = () => {
  const { data } = useSelector((state: RootStore) => state.login)
  const { x_api } = useSelector((state: RootStore) => state.x_api_key)
  const { isLoading, isFulfilled, isRejected } = useSelector((state: RootStore) => state.create_candidate)
  const navigate = useNavigate();
  const location: LocationProps = useLocation();
  const dispatch = useAppDispatch();
  const actionDispstch = useDispatch();
  const didMount = useRef<boolean>(false)

  if (!location.state?.id || !location.state?.name) { navigate(-1) }
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [state, setstate] = useState<any>({
    name: "",
    age: 0,
    gender: "",
    nationality: "",
    weight: "",
    socialMediaFacebook: "",
    socialMediaInstagram: "",
    socialMediaTwitter: "",
    biography: "",
    city: '',
    votingCampaignId: location.state.id,
  })

  const handlechange = (e: any) => {
    const { name, value } = e.target
    const newValue = name === "age" ? parseInt(value, 10) : value;
    setstate((prev: any) => ({ ...prev, [name]: newValue ?? "" }));
  }
  const handleFileChange = (e: any) => {
    const file = e.target.files && e.target.files[0];
    setProfilePic(file);
  };

  const submithandler = (e: any) => {
    e.preventDefault()
    if (!profilePic) {
      errorToast('Please Upload file')
      return
    }
    const code = generateCode(state.name)
    const validation = CreateCandidateSchema.safeParse({ code, ...state })
    if (validation.error) {
      errorToast(JSON.parse(validation.error.message).at(0).message);
      return;
    }
    let form = new FormData();
    form.append('code', code);
    form.append('profilePicture', profilePic);
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        form.append(key, state[key]);
      }
    }
    dataService.setApiKey(x_api!)
    dataService.setToken(data.token!)
    dispatch(CreateCandidatesThunk(form))
  }

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true
      isRejected && actionDispstch(resetState())
    }
  }, [])

  useEffect(() => {
    dismissToast();
    isLoading && loadingToast('Your request is processing')
    isRejected && errorToast('Error adding candidate')
    isFulfilled && successToast('Successfully added candidate')
    isFulfilled && (
      actionDispstch(resetState()) &&
      navigate(-1)
    )
  }, [isFulfilled, isLoading, isRejected])

  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Add Entry - Candidate" showBars />
        </div>

        <PrevBtn />
        <div className="form-wrapper">
          <form className="form">
            <div className="input">
              <UIInput
                value={state.name}
                onChange={handlechange}
                name="name"
                label="Name"
                type="text"
              />
            </div>

            <div className="input">
              <UIInput
                value={location.state.id}
                name='votingCampaignId'
                label='Voting Campaign'
                type='text'
                readOnly={true}
              />
            </div>

            <div className="input">
              <UIInput
                value={state.age.toString()}
                onChange={handlechange}
                name="age"
                label="Age"
                type="number"
              />
            </div>
            <div className="input">
              <label className="label">Gender</label>
              <select
                value={state.gender}
                onChange={handlechange}
                name="gender"
              >
                <option selected>Select Gender</option>
                <option>Male</option>
                <option>Fale</option>
                <option>Others</option>
              </select>
            </div>
            <div className="input">
              <UIInput
                value={state.nationality}
                onChange={handlechange}
                name="nationality"
                label="Nationality"
                type="text"
              />
            </div>

            <div className="input">
              <UIInput
                value={state.weight}
                onChange={handlechange}
                name="weight"
                label="Weight in KG"
                type="text"
              />
            </div>
            <div className="input">
              <UIInput
                value={state.socialMediaFacebook}
                onChange={handlechange}
                name="socialMediaFacebook"
                label="SocialMediaFacebook"
                type="name"
              />

            </div>
            <div className="input">
              <UIInput
                value={state.socialMediaInstagram}
                onChange={handlechange}
                name="socialMediaInstagram"
                label="SocialMediaInstagram"
                type="text"
              />
            </div>
            <div className="input">
              <UIInput
                value={state.socialMediaTwitter}
                onChange={handlechange}
                name="socialMediaTwitter"
                label="SocialMediaTwitter"
                type="text"
              />
            </div>

            <div className="input">
              <UIInput
                value={state.city}
                onChange={handlechange}
                name='city'
                label='Candidate City'
                type='text'
              />
            </div>

            <div className="input">
              <label className="label">Profile Picture</label>
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/*" // Accept only image files
              />
            </div>

            <div className="input textarea">
              <label className="label">Biography</label>
              <textarea
                value={state.biography}
                onChange={handlechange}
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
