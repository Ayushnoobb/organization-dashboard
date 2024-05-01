import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ActionInitialState } from "../interface/actions.interface";
import { RootStore } from "../../store";
import { DeleteCandidatesThunk } from "../../actions/candidates/deleteCanidate.sctions";

const deleteCandidateSlice = createSlice({
  name : '@voting-sahboard/deleteCandidateSlice',
  initialState : ActionInitialState,
  reducers : {
    resetState:(state)=>{
      state.isFulfilled = false
      state.isRejected = false
      state.isLoading = false
    },
  },
  extraReducers : (builder) =>{
    builder
    .addCase(DeleteCandidatesThunk.pending , (state) =>{
      state.isLoading = true
    })

    .addCase(DeleteCandidatesThunk.fulfilled , (state , action : PayloadAction<boolean>) =>{
      state.isFulfilled = action.payload || false
      state.isLoading = false
      console.log(action.payload)
      state.isRejected = action.payload ?? true
    })

    .addCase(DeleteCandidatesThunk.rejected , (state) =>{
      state.isFulfilled = false
      state.isLoading = false
      state.isRejected = true
    })
  }
})

export const { resetState } = deleteCandidateSlice.actions
export const CreateCandidateData = (state : RootStore) => state.delete_candidate 
export default deleteCandidateSlice.reducer