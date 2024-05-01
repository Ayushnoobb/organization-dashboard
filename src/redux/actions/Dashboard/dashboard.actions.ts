import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataService } from "../../../utils/axios";

export const GetDashBoardData = createAsyncThunk(
  'voting-dashboard/dashboard',
  async(_,thunkAPI)=> {
    try{
      const res =  await dataService.getData('/organization-dashboard')
      console.log(res.data)
      return res.data
    }catch(error : any){
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)