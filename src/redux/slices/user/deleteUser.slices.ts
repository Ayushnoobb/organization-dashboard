import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CouponActionsIntitialState } from "../interface/coupon.interface";
import { RootStore } from "../../store";
import { DeleteUserThunk } from "../../actions/user/deleteUser.actions";
const initialState: CouponActionsIntitialState = {
  isPending: false,
  isFulfilled: false,
  isRejected: false
}

export const DeleteUser = createSlice({
  name: '@voting-dashboard/delete-coupon',
  initialState,
  reducers: {
    resetState : (state) => {
      state.isFulfilled = false
      state.isRejected = false
      state.isPending = false
    },
    deleteUser : (state , action : PayloadAction<{id : string}>) =>{
      // state
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(DeleteUserThunk.pending, (state) => {
        state.isPending = true
        state.isFulfilled = false
        state.isRejected = false
      })

      .addCase(DeleteUserThunk.fulfilled, (state, actions: PayloadAction<boolean | undefined>) => {
        state.isFulfilled = actions.payload ? true :  false
        state.isPending = false
        state.isRejected = actions.payload ? false : true
      })
      .addCase(DeleteUserThunk.rejected, (state) => {
        state.isFulfilled = false
        state.isPending = false
        state.isRejected = true
      })
  }
})

export const  { resetState } = DeleteUser.actions
export const DeleteUserData = (state: RootStore) => state.delete_user
export default DeleteUser.reducer