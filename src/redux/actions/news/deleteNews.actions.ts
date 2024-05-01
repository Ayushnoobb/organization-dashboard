import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataService } from "../../../utils/axios";

export const DeleteNewsThunk = createAsyncThunk(
  '@voting-dashboard/voting-news-creation',
  async ( id : string , thunkAPI :any )  :Promise<boolean | undefined> =>{
    try{
      const res = await dataService.deleteData(`/news/${id}`)
      return res.success
    }catch(error : any){
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)