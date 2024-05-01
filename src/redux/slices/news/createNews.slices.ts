import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ActionsInitialState } from "../interface/actions.interface";
import { CreateNewsThunk } from "../../actions/news/createNews.actions";
import { RootStore } from "../../store";

const initialState : ActionsInitialState = {
  isLoading : true,
  isRejected : true,
  isFulfilled : true
}

const createNewsSlice = createSlice({
  name : '@voting-dashboard/voting-news-creation-slice',
  initialState,
  reducers : {
    resetState : (state) =>{
      state.isFulfilled = false
      state.isRejected = false
      state.isLoading = false
    }
  },
  extraReducers : (builder) => {
    builder 
      .addCase(CreateNewsThunk.pending , (state) => {
        state.isFulfilled = false
        state.isRejected = false
        state.isLoading = true
      })
      .addCase(CreateNewsThunk.fulfilled , (state ,action : PayloadAction<boolean | undefined>) =>{
        state.isRejected = action.payload ? false : true
        state.isLoading = false    
        state.isFulfilled = action.payload ?? false
      })
      .addCase(CreateNewsThunk.rejected , (state) => {
        state.isFulfilled = false
        state.isLoading = false
        state.isRejected = true
      })
  }
})

export const { resetState } = createNewsSlice.actions
export const CreateNewsData = (state :RootStore) => state.create_news
export default createNewsSlice.reducer