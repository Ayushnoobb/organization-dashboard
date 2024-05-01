import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CouponActionsIntitialState } from "../interface/coupon.interface";
import { UpdateCoupon } from "../../actions/coupon/editCoupon.actions";
import { RootStore } from "../../store";

const initialState: CouponActionsIntitialState = {
  isRejected: false,
  isFulfilled: false,
  isPending: false,
}
export const UpdateCouponSlice = createSlice({
  name: '@voting-dashboard/UpdateSlice',
  initialState,
  reducers: {
    resetState : (state) => {
      state.isFulfilled = false
      state.isPending = false
      state.isRejected = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(UpdateCoupon.pending, (state) => {
        state.isPending = true
        state.isRejected = false
        state.isFulfilled = false
      })

      .addCase(UpdateCoupon.fulfilled, (state, action: PayloadAction<any>) => {
        state.isPending = false
        state.isFulfilled = action.payload || false
        state.isRejected = false
      })
      .addCase(UpdateCoupon.rejected, (state) => {
        state.isFulfilled = false
        state.isRejected = true
        state.isPending = false
      })
  }
})
export const { resetState } = UpdateCouponSlice.actions
export const updateCouponData = (state: RootStore) => state.update_coupon
export default UpdateCouponSlice.reducer