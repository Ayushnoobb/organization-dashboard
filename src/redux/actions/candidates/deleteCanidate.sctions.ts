import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataService } from "../../../utils/axios";

export const DeleteCandidatesThunk = createAsyncThunk(
  '@voting-dashboard/deleteCoupon',
  async (slug : string, thunkAPI) : Promise<any> => {
    try {
      const res = await dataService.deleteData(`/candidates/${slug}`);
      return res.success;
    } catch (error : any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
