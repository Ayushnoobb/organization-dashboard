import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetDashBoardData } from "../../actions/Dashboard/dashboard.actions";
import { DashboardData, InitialDashboardDataInterface } from "../interface/dashboard.interface";
import { RootStore } from "../../store";
import { addMinutesAndConvertToISOString } from "../../../utils/helper";
import { API_EXPIRE_TIME } from "../../../constants/constants";

const initialState: InitialDashboardDataInterface = {
  dashboardData: null,
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
  expiry: null,
}

const dashboardSlice = createSlice({
  name: '@Voting-dashboard/dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        GetDashBoardData.pending,
        (state) => {
          state.isLoading = true;
          state.isFulfilled = false;
          state.isRejected = false;
        }
      )
      .addCase(
        GetDashBoardData.fulfilled,
        (state, action : PayloadAction<DashboardData>) => {
          state.isLoading = false;
          state.isFulfilled = true; 
          state.expiry = addMinutesAndConvertToISOString(new Date(), API_EXPIRE_TIME)
          state.dashboardData = action.payload;
        }
      )
      .addCase(
        GetDashBoardData.rejected,
        (state) => {
          state.isLoading = false;
          state.isRejected = true;
        }
      )
  },
})

export const dashboardData = (state: RootStore) => state.dashboard

export default dashboardSlice.reducer
