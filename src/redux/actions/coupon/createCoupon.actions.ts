import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataService } from "../../../utils/axios";
import { GetCoupanByCampaignIdResponse } from "../../slices/interface/coupon.interface";
export const CreateCoupon = createAsyncThunk(
  '@voting-dashboard/createCouponThunk',
  async (formdata: any, thunkApi) => {
    try {
      const res = await dataService.postData('/coupons', formdata)
      const ResToSend: GetCoupanByCampaignIdResponse = res.data
      return ResToSend.success
    } catch (e: any) {
      thunkApi.rejectWithValue(e)
    }
  }
)