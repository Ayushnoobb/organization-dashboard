import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CouponActionsIntitialState } from "../interface/coupon.interface";
import { DeleteCoupon } from "../../actions/coupon/deleteCoupon.actions";
import { RootStore } from "../../store";
import { BlockUserThunk } from "../../actions/user/blockUser.actions";
const initialState: CouponActionsIntitialState = {
  isPending: false,
  isFulfilled: false,
  isRejected: false
}

export const BlockUser = createSlice({
  name: '@voting-dashboard/delete-coupon',
  initialState,
  reducers: {
    resetState : (state) => {
      state.isFulfilled = false
      state.isRejected = false
      state.isPending = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(BlockUserThunk.pending, (state) => {
        state.isPending = true
        state.isFulfilled = false
        state.isRejected = false
      })

      .addCase(BlockUserThunk.fulfilled, (state, actions: PayloadAction<boolean | undefined>) => {
        state.isFulfilled = actions.payload ? true :  false
        state.isPending = false
        state.isRejected = actions.payload ? false : true
      })
      .addCase(BlockUserThunk.rejected, (state) => {
        state.isFulfilled = false
        state.isPending = false
        state.isRejected = true
      })
  }
})

export const  { resetState } = BlockUser.actions
export const BlockUserData = (state: RootStore) => state.block_user
export default BlockUser.reducer