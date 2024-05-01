import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ActionInitialState } from "../interface/actions.interface";
import { EditCandidatesThunk } from "../../actions/candidates/editCandidates.actions";
import { RootStore } from "../../store";

const editCandidateSlice = createSlice({
  name : '@voting-sahboard/editCandidateSlice',
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
    .addCase(EditCandidatesThunk.pending , (state) =>{
      state.isLoading = true
    })

    .addCase(EditCandidatesThunk.fulfilled , (state , action : PayloadAction<boolean>) =>{
      state.isFulfilled = action.payload || false
      state.isLoading = false
      console.log(action.payload)
      state.isRejected = action.payload ?? true
    })

    .addCase(EditCandidatesThunk.rejected , (state) =>{
      state.isFulfilled = false
      state.isLoading = false
      state.isRejected = true
    })
  }
})

export const { resetState } = editCandidateSlice.actions
export const CreateCandidateData = (state : RootStore) => state.update_candidate 
export default editCandidateSlice.reducer