import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetUserResponseInitialInterface, UserInterface } from "../interface/user.interface";
import { GetAllUsers } from "../../actions/user/getAllUsers.actions";
import { RootStore } from "../../store";
import { addMinutesAndConvertToISOString } from "../../../utils/helper";

const initialState : GetUserResponseInitialInterface = {
  isFulfilled : false,
  isLoading : false,
  isRejected : false,
  data : null,
  expiry : null
}

const GetUserSlice = createSlice({
  name:'@/voting-dashboard/getUserSlice',
  initialState,
  reducers : {},
  extraReducers : (builder) =>{
    builder 
      .addCase(GetAllUsers.pending , (state) => {
        state.isFulfilled = false
        state.isRejected = false
        state.isLoading = true
      })

      .addCase(GetAllUsers.fulfilled , (state , action : PayloadAction<UserInterface[] | undefined>) => {
        console.log(action.payload)
        state.isLoading = false
        state.isRejected = action.payload ? true : false
        state.isFulfilled = action.payload ? true : false
        state.data = action.payload ?? null
        state.expiry = action.payload ? addMinutesAndConvertToISOString(new Date() , 2) : null
      })

      .addCase(GetAllUsers.rejected , (state) => {
        state.isFulfilled = false
        state.isRejected = true
        state.isLoading = false
      })
  }
})

export const GerUserData = ( state : RootStore) => state.get_all_user
export default GetUserSlice.reducer