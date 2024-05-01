import { useEffect, useRef, useState } from "react";
import { dataService } from "../../../utils/axios";
import { GetCouponByID } from "../../../redux/actions/coupon/getCouponByID.actions";
import { RootStore } from "../../../redux/store";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../utils/redux.utils";
import { UpdateCoupon } from "../../../redux/actions/coupon/editCoupon.actions";
import { UpdateCandidateSchema } from "../../../utils/zod/Coupon.schema";
import { UIInput } from "../../../ui/uiinput/UIInput";
import UIButton from "../../../ui/uibutton/UIButton";
import PrevBtn from "../../../ui/prevbutton/BackBtn";
import Navbar from "../../../components/navbar/Navbar";
import { dismissToast, errorToast, loadingToast, successToast } from "../../../utils/toastify";
import { resetState } from "../../../redux/slices/coupon/editCoupon.slices";

export const CTEditEntry = () => {
  const { id } = useParams();
  const didMount = useRef<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { x_api } = useSelector((state: RootStore) => state.x_api_key);
  const { data: AuthData } = useSelector((state: RootStore) => state.login);
  const {  isRejected , isFulfilled , isPending } = useSelector((state: RootStore) => state.update_coupon)
  const [editing , setEditing] = useState<boolean>(false)
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      if (!id) navigate(-1);
      dataService.setApiKey(x_api!);
      dispatch(GetCouponByID(id!));
    }
  }, [dispatch, id, navigate, x_api]);

  const { data: couponData } = useSelector((state: RootStore) => state.coupon_by_id);

  const [state, setstate] = useState({
    id: "",
    name: "",
    votes: 0,
    eligibleCandidateCounts: 0,
    pricing: 0,
    currency: "NRP",
    avaibilityPeriodStart: "",
    avaibilityPeriodEnd: "",
    votingCampaignId: "",
  });

  useEffect(() => {
    if (couponData) {
      const { id, name, votes, eligibleCandidateCounts, pricing, currency, avaibilityPeriodStart, avaibilityPeriodEnd, votingCampaignId } = couponData;
      setstate({
        id,
        name,
        votes,
        eligibleCandidateCounts,
        pricing :parseInt(pricing.toString() , 10) ,
        currency,
        avaibilityPeriodStart,
        avaibilityPeriodEnd,
        votingCampaignId,
      });
    }
  }, [couponData]);
  useEffect(() =>{
    (isRejected || isPending || isFulfilled) && dismissToast()
    if(isRejected){
      errorToast('Error editing coupon');dispatch(resetState())
    }
    if(isPending){
      isPending && loadingToast('editing cuopn ');
    }
    if(isFulfilled && editing){
      successToast('Coupon Edit Successfully') 
      setEditing(false);
      dispatch(resetState())
      navigate(-1)
    }
  },[isFulfilled , isPending , isRejected])

  const handelchange = (e: any) => {
    const { name, value } = e.target;
    const newValue = name === 'eligibleCandidateCounts' || name === 'pricing' || name === 'votes' ? parseInt(value , 10) : value;
    setstate((prev : any) => ({ ...prev, [name]: newValue }));
  };

  const submithandler = (e: any) => {
    e.preventDefault();
    setEditing(true)
    const validationResult = UpdateCandidateSchema.safeParse({ ...state , pricing : parseInt(state.pricing.toString() , 10) });
    if (validationResult.error) {
      errorToast(validationResult.error.message)
      return;
    }
    const putData = { ...state };
    dataService.setApiKey(x_api!);
    dataService.setToken(AuthData.token!);
    dispatch(UpdateCoupon({...state , pricing : parseInt(state.pricing.toString() ,10) }));
  };

  return (
    <div className="framecontainer">
      <div className="framecontainer-content">
        <div className="dashboard">
          <Navbar name="Edit Entry - CoupanTransaction" showBars />
        </div>

        <PrevBtn />
        <div className="form-wrapper">
          <form className="form">
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
              <UIInput
                value={state.pricing}
                onChange={handelchange}
                name="pricing"
                label="Pricing"
                type="text"
              />
            </div>

            <div className="input">
              <label>Currency</label>
              <select
                value={state.currency}
                name="currency"
                onChange={handelchange}
              >
                <option value="NRP">NRP</option>
                <option value="USD">USD</option>
              </select>
            </div>
            <div className="input">
              <UIInput
                value={state.avaibilityPeriodStart}
                onChange={handelchange}
                name="avaibilityPeriodStart"
                label="AvaibilityPeriodStart"
                type="text"
                readOnly={true}
              />
            </div>
            <div className="input">
              <UIInput
                value={state.avaibilityPeriodEnd}
                onChange={handelchange}
                name="avaibilityPeriodEnd"
                label="AvaibilityPeriodEnd"
                type="text"
                readOnly={true}
              />
            </div>
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
  );
};
