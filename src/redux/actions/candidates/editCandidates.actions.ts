import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataService } from "../../../utils/axios";

export const EditCandidatesThunk = createAsyncThunk(
  '@voting-dashboard/editCoupon',
  async ({id , ...formData} :any, thunkAPI) : Promise<any> => {
    try {
      const res = await dataService.putData(`/candidates/${id}`, formData);
      return res.success;
    } catch (error : any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
