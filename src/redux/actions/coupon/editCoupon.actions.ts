import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataService } from "../../../utils/axios";

export const UpdateCoupon = createAsyncThunk(
  'voting-dashboad/update-coupon',
  async({...restData } : any , thunkAPI) : Promise<boolean | unknown> =>{
    try{
      console.log(restData)
      const {id, ...data } = restData
      console.log(id,data)
      const res = await dataService.putData(`/coupons/${id}`, {...data}); // Use restData without id
      return res.success;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
