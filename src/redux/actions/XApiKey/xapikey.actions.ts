import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IDENTITY_BASE_URL, ORGANIZATION_ID } from "../../../utils/config";
//@ts-ignore
import { XapiResponse } from "../../slices/interface/xApi.interface";
export const getXApikey = createAsyncThunk(
  'voting-dashboard/x-api-key',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${IDENTITY_BASE_URL}/x-api-key/${ORGANIZATION_ID}`);
      const responseToSend: XapiResponse = response.data
      return responseToSend.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)