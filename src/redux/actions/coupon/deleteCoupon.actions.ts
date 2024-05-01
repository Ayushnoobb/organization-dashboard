import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataService } from "../../../utils/axios";

export const DeleteCoupon = createAsyncThunk(
  '@voting-dashboard/delete-coupon',
  async (slug , thunkAPI) : Promise<boolean | undefined> =>{
    try{
      const res = await dataService.deleteData(`/coupons/${slug}`);
      return res?.data.success
    }catch(e : any){
      thunkAPI.rejectWithValue(e)
    }
  }
)