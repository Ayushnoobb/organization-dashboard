import { PayloadAction, createSlice} from "@reduxjs/toolkit";
import { CouponInterface, initialCouponSliceData } from "../interface/coupon.interface";
import { GetCouponsByVotingCampaignId } from "../../actions/coupon/getCouponByCampaignId.actions";
import { RootStore } from "../../store";

const initialState : initialCouponSliceData = {
  data : null,
  isFulfilled : false,
  isPending : false,
  isRejected : false,
}

export const GetCouponSliceByCampaignId = createSlice({
  name : '@voting-dashboard/getCouponByCampaignId',
  initialState,
  reducers : {},
  extraReducers : (builder) =>{
    builder
      .addCase(GetCouponsByVotingCampaignId.pending ,(state) => {
        state.isPending = true
        state.isRejected = false  
        state.isFulfilled = false
      } )
      .addCase(GetCouponsByVotingCampaignId.fulfilled ,(state , action : PayloadAction<CouponInterface[]>) => {
        state.isPending = false
        state.isRejected = false
        state.isFulfilled = true

        // returning fulfilled response
        state.data = action.payload
      } )
      .addCase(GetCouponsByVotingCampaignId.rejected , (state) => {
        state.isPending = false
        state.isFulfilled = false
        state.isRejected = true
      })
  }
})

export const getCouponByVotingCampaignIdData = (state: RootStore) => state.coupon_by_campaign_id
export default GetCouponSliceByCampaignId.reducer



