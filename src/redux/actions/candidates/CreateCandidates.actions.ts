import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataService } from "../../../utils/axios";

export const CreateCandidatesThunk = createAsyncThunk(
  '@voting-dashboard/createCoupon',
  async (formData : any, thunkAPI) : Promise<any> => {
    try {
      const res = await dataService.postFormData('/candidates', formData);
      console.log(res)
      return res.data;
    } catch (error : any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
