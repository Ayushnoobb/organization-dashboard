import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CouponActionsIntitialState } from "../interface/coupon.interface";
import { DeleteCoupon } from "../../actions/coupon/deleteCoupon.actions";
import { RootStore } from "../../store";
const initialState: CouponActionsIntitialState = {
  isPending: false,
  isFulfilled: false,
  isRejected: false
}

export const DeleteCouponSlice = createSlice({
  name: '@voting-dashboard/delete-coupon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(DeleteCoupon.pending, (state) => {
        state.isPending = true
        state.isFulfilled = false
        state.isRejected = false
      })

      .addCase(DeleteCoupon.fulfilled, (state, actions: PayloadAction<boolean | undefined>) => {
        state.isFulfilled = actions.payload || false
        state.isPending = false
        state.isRejected = true
      })
      .addCase(DeleteCoupon.rejected, (state) => {
        state.isFulfilled = false
        state.isPending = false
        state.isRejected = true
      })
  }
})

export const DeleteCouponData = (state: RootStore) => state.delete_coupon
export default DeleteCouponSlice.reducer