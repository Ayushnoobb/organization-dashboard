import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateCouponInitialInterface } from "../interface/coupon.interface";
import { CreateCoupon } from "../../actions/coupon/createCoupon.actions";
import { RootStore } from "../../store";

const initialState: CreateCouponInitialInterface = {
  isLoading: false,
  isRejected: false,
  isFulfilled: false
}

export const CreateCouponSlice = createSlice({
  name: '@Voting-dashboard/CreateCoupon',
  initialState,
  reducers : {
    resetState:(state)=>{
      state.isFulfilled = false
      state.isRejected = false
      state.isLoading = false
    },
  },
  extraReducers : (builder)=> {
      builder 
        .addCase(CreateCoupon.pending , (state) => {
          state.isLoading = true
          state.isRejected = false
        })

        .addCase(CreateCoupon.fulfilled , (state , action : PayloadAction<boolean | undefined>) =>{
            console.log(action.payload)
            state.isRejected = action.payload ? false : true
            state.isFulfilled = action.payload ?? false
            state.isLoading = false
        })

        .addCase(CreateCoupon.rejected , (state) => {
          console.log('reject')
          state.isLoading = false
          state.isRejected = true
          state.isFulfilled = false
        })
  },
})

export const  { resetState } = CreateCouponSlice.actions
export const createCouponData = (state: RootStore) => state.create_coupon
export default CreateCouponSlice.reducer