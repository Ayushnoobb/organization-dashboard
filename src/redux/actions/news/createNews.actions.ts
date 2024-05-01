import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataService } from "../../../utils/axios";

export const CreateNewsThunk = createAsyncThunk(
  '@voting-dashboard/voting-news-creation',
  async ( data : FormData , thunkAPI :any ) =>{
    try{
      const res = await dataService.postFormData('/news' , data)
      return res.success
    }catch(error : any){
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)