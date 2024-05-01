import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataService } from "../../../utils/axios";
import { GetUserResponseDataInterface, GetUserResponseInterface, UserInterface } from "../../slices/interface/user.interface";


export const GetAllUsers = createAsyncThunk(
  'voting-dashboard/getAllUsersThunk',
  async (_ , thunkAPI : any) : Promise<UserInterface[] | undefined> =>{
    try {
      const res : GetUserResponseInterface = await dataService.getData('/users');
      const filterData : GetUserResponseDataInterface = res.data
      console.log(res)
      console.group(filterData)
      return filterData?.rows
    }catch(error : any){
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)