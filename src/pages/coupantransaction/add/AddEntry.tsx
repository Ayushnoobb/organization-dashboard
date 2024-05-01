import React, { useEffect, useRef, useState } from "react"
import { UIInput } from "../../../ui/uiinput/UIInput"
import Navbar from "../../../components/navbar/Navbar"
import UIButton from "../../../ui/uibutton/UIButton"
import PrevBtn from "../../../ui/prevbutton/BackBtn"
import { CreateCouponSchema } from "../../../utils/zod/Coupon.schema"
import { convertToIsoDateTime } from "../../../utils/helper"
import { dismissToast, errorToast, loadingToast, successToast } from "../../../utils/toastify"
import { useLocation, useNavigate } from "react-router-dom"
import { RangeDatePicker } from "../../../components/date-picker/DatePicker"
import { useAppDispatch } from "../../../utils/redux.utils"
import { getVotingCampaign } from "../../../redux/actions/votingCampaign/votingCamp.action"
import { useSelector } from "react-redux"
import store, { RootStore } from "../../../redux/store"
import { CreateCoupon } from "../../../redux/actions/coupon/createCoupon.actions"
import { dataService } from "../../../utils/axios"
import { resetState } from "../../../redux/slices/coupon/createCoupon.slices"

export const CTAddEntry = () => {
  const location = useLocation()
  const navigate = useNavigate()
  if (!location.state.id) navigate(`/votingcampaign/`)


  const dispatch = useAppDispatch()
  const { data } = useSelector((state : RootStore) => state.votingCampaign)
  const { isFulfilled , isLoading , isRejected } = useSelector((state : RootStore) => state.create_coupon)
  const { x_api } = useSelector((state : RootStore) => state.x_api_key)
  const { data : AuthData } = useSelector((state : RootStore) => state.login)
  const VotingCampaignData = data?.data?.rows?.filter(campaign => location.state.id! === campaign.id).at(0)
  const didMount = useRef<boolean>(false)


  const [state, setstate] = useState<any>({
    name: "",
    votes: 0,
    eligibleCandidateCounts: 0,
    pricing: 0,
    currency: "",
    avaibilityPeriodStart: new Date(),
    avaibilityPeriodEnd: new Date(),
    votingCampaignId: location.state.id,
  })


  const handelchange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (!e.target) return; // Check if e.target is null

    const { name, value } = e.target;
    const newValue = name === 'eligibleCandidateCounts' || name === 'pricing' || name === 'votes' ? parseInt(value , 10) : value;
    setstate((prev : any) => ({ ...prev, [name]: newValue }));
  }

  const handleStartDateChange = (value: any) => {
    setstate((prev: any) => ({ ...prev, avaibilityPeriodStart: value }));
  };

  const handleEndDateChange = (value: any) => {
    setstate((prev: any) => ({ ...prev, avaibilityPeriodEnd: value }));
  };

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true
      dataService.setApiKey(x_api!)
      dispatch(getVotingCampaign())
    }
  }, [])
  useEffect(() => {
    dismissToast()
    isRejected && errorToast('Error creating cupon')
    isLoading && loadingToast('Creating Cupon');
    console.log(isFulfilled , isLoading , isRejected);
    if(isFulfilled){
      successToast('Cupon Created Successfully') 
      navigate(-1)
      dispatch(resetState())
    }
  },[isFulfilled , isLoading , isRejected])

  const submithandler = (e: any) => {
    e.preventDefault()
    try {
      const ValidationResult = CreateCouponSchema.safeParse({
        ...state,
        avaibilityPeriodEnd: convertToIsoDateTime(state.avaibilityPeriodEnd as string),
        avaibilityPeriodStart: convertToIsoDateTime(state.avaibilityPeriodStart as string),
      })
      if (ValidationResult.error) {
        console.log(ValidationResult.error)
        errorToast(ValidationResult.error.issues.at(0)?.message as string)
      }
      dataService.setApiKey(x_api!)
      dataService.setToken(AuthData.token!)
      dispatch(CreateCoupon({
        ...state,
        avaibilityPeriodEnd: convertToIsoDateTime(state.avaibilityPeriodEnd as string),
        avaibilityPeriodStart: convertToIsoDateTime(state.avaibilityPeriodStart as string),
      }))
    } catch (e: any) {
      console.error(e);
    }
  }

  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Add Entry - Coupons" showBars />
        </div>

        <PrevBtn />
        <div className="form-wrapper">
          <form className="form">
            <div className="input">
              <UIInput
                value={state.votingCampaignId}
                onChange={handelchange}
                name="votingCampaignId"
                label="VotingCampaignID"
                type="text"
                readOnly={true}
              />
            </div>
            <div className="input">
              <UIInput
                value={state.name}
                onChange={handelchange}
                name="name"
                label="Coupon Name"
                type="text"
              />
            </div>
            <div className="input">
              <UIInput
                value={state.votes}
                onChange={handelchange}
                name="votes"
                label="Votes"
                type="number"
              />
            </div>
            <div className="input">
              <UIInput
                value={state.eligibleCandidateCounts}
                onChange={handelchange}
                name="eligibleCandidateCounts"
                label="Eligible Candidate"
                type="number"
              />
            </div>

            <div className="input">
              <label>Currency</label>
              <select
                value={state.currency}
                name="currency"
                onChange={handelchange}
              >
                <option value="default">Select Currency</option>
                <option selected value='NPR'>NPR</option>
                <option value='USD'>USD</option>
              </select>
            </div>
            <div className="input">
              <UIInput
                value={state.pricing}
                onChange={handelchange}
                name="pricing"
                label="Pricing"
                type="number"
              />
            </div>
            <div className="input">
              <div className="inputfield">
                <label className="inputfield-label">Avaibility Start date</label>
                <RangeDatePicker
                  value={state.avaibilityPeriodStart}
                  maxDate={VotingCampaignData?.endDateTime.split('T').at(0)}
                  minDate={VotingCampaignData?.startDateTime.split('T').at(0)}
                  onChange={handleStartDateChange} name='avaibilityPeriodStart' />
              </div>
            </div>
            <div className="input">
              <div className="inputfield">
                <label className="inputfield-label">Avaibility End date</label>
                <RangeDatePicker
                  value={state.avaibilityPeriodEnd}
                  maxDate={VotingCampaignData?.endDateTime.split('T').at(0)}
                  minDate={state.avaibilityPeriodStart}
                  onChange={handleEndDateChange} name='avaibilityPeriodEnd' />
              </div>
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
