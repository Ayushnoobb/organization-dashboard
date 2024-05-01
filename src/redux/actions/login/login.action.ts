import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { LoginResponse } from "../../slices/interface/login.interface"

export interface LoginPostDataInterface {
  email: string
  password: string
}

export const loginHandler = createAsyncThunk("/login", async (loginReqData: LoginPostDataInterface, thunkAPI) => {
  try {
    const response = await axios.post(
      "https://voting-identity.intersexnepal.org/v1/organizations/login", loginReqData)
    const data: LoginResponse = response.data
    return data
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error)
  }
})
