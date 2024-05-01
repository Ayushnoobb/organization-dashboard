import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataService } from "../../../utils/axios";
import { VOTING_USER_BASE_URI } from "../../../utils/config";
import { GetCouponByCampaignIdResponseData } from "../../slices/interface/coupon.interface";

export const GetCouponsByVotingCampaignId = createAsyncThunk(
  '@voting-dashboard/getCouponThunk',
  async (slug : string , thunkAPI) =>{
    try{
      const res  =  await dataService.getData(`${VOTING_USER_BASE_URI}/coupons/voting-campaigns/${slug}`);
      const resData : GetCouponByCampaignIdResponseData = res.data
      return resData.rows

    }catch(error : any){
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)