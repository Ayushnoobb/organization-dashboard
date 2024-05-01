import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ActionsInitialState } from "../interface/actions.interface";
import { RootStore } from "../../store";
import { EditNewsThunk } from "../../actions/news/editNews.actions";

const initialState : ActionsInitialState = {
  isLoading : true,
  isRejected : true,
  isFulfilled : true
}

const deleteNewsSlice = createSlice({
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
      .addCase(EditNewsThunk.pending , (state) => {
        state.isFulfilled = false
        state.isRejected = false
        state.isLoading = true
      })
      .addCase(EditNewsThunk.fulfilled , (state ,action : PayloadAction<boolean | undefined>) =>{
        state.isRejected = action.payload ? false : true
        state.isLoading = false    
        state.isFulfilled = action.payload ? true : false
      })
      .addCase(EditNewsThunk.rejected , (state) => {
        state.isFulfilled = false
        state.isLoading = false
        state.isRejected = true
      })
  }
})

export const { resetState } = deleteNewsSlice.actions
export const DeleteNewsData = (state :RootStore) => state.delete_news
export default deleteNewsSlice.reducer