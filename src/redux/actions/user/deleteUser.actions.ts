import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataService } from "../../../utils/axios";


export const DeleteUserThunk = createAsyncThunk(
  'voting-dashboard/blockuserThunk',
  async (slug : string , thunkAPI : any) =>{
    try {
      const res = await dataService.deleteData(`/users/${slug}`);
      return res.success
    }catch(error : any){
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)