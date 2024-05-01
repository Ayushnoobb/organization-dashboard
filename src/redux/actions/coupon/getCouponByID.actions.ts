import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataService } from "../../../utils/axios";
import { VOTING_USER_BASE_URI } from "../../../utils/config";

export const GetCouponByID = createAsyncThunk(
  '@voting-dashboard/getCouponByIdThunk',
  async (slug : string , thunkAPI) =>{
    try{
      const res  =  await dataService.getData(`${VOTING_USER_BASE_URI}/coupons/${slug}`);
      return res.data

    }catch(error : any){
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)