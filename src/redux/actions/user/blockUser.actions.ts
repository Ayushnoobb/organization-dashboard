import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataService } from "../../../utils/axios";


export const BlockUserThunk = createAsyncThunk(
  'voting-dashboard/blockuserThunk',
  async (slug : string , thunkAPI : any) =>{
    try {
      const res = await dataService.patchData(`/users/block/${slug}?status=false`);
      return res.success
    }catch(error : any){
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)