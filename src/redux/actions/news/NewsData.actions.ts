import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataService } from "../../../utils/axios";
import { NewsInterface, individualNewsResponse, initialNewsResponseInterface } from "../../slices/interface/news.interface";

export const GetAllNewsData = createAsyncThunk(
  '@voting-dashboard/voting-all-news-data',
  async ( _ , thunkAPI : any) : Promise<NewsInterface[] | undefined> =>{
    try{
      const res : initialNewsResponseInterface = await dataService.getData('/news')
      const filteredData  = res.data
      return filteredData
    }catch(error : any){
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const GetIndividualNewsData = createAsyncThunk(
  '@voting-dashboard/voting-all-news-data',
  async (slug : string , thunkAPI : any) : Promise<NewsInterface | undefined> =>{
    try{
      const res : individualNewsResponse = await dataService.getData(`/news/${slug}`)
      return res.data
    }catch(error : any){
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)