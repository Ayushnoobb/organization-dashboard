import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataService } from "../../../utils/axios";

export const EditNewsThunk = createAsyncThunk(
  '@voting-dashboard/voting-news-creation',
  async ( data : any , thunkAPI :any )  :Promise<boolean | undefined> =>{
    const  { id , ...rest } = data
    try{
      const res = await dataService.putData(`/news/${id}` , rest)
      return res.success
    }catch(error : any){
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)