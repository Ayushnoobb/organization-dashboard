import { PayloadAction, createSlice} from "@reduxjs/toolkit";
import { CouponInterface, initialCouponSliceData } from "../interface/coupon.interface";
import { RootStore } from "../../store";
import { GetCouponByID } from "../../actions/coupon/getCouponByID.actions";

export interface initialCandidateByIdData {
  data : CouponInterface | null
  isPending : boolean
  isFulfilled : boolean
  isRejected : boolean
}

const initialState : initialCandidateByIdData = {
  data : null,
  isFulfilled : false,
  isPending : false,
  isRejected : false,
}

export const GetCouponSliceById = createSlice({
  name : '@voting-dashboard/getCouponByCampaignId',
  initialState,
  reducers : {},
  extraReducers : (builder) =>{
    builder
      .addCase(GetCouponByID.pending ,(state) => {
        state.isPending = true
        state.isRejected = false  
        state.isFulfilled = false
      } )
      .addCase(GetCouponByID.fulfilled ,(state , action : PayloadAction<CouponInterface | undefined>) => {
        state.isPending = false
        state.isRejected = false
        state.isFulfilled = true

        // returning fulfilled response
        state.data = action.payload ?? null
      } )
      .addCase(GetCouponByID.rejected , (state) => {
        state.isPending = false
        state.isFulfilled = false
        state.isRejected = true
      })
  }
})

export const GetCouponByIdData = (state: RootStore) => state.coupon_by_id
export default GetCouponSliceById.reducer



