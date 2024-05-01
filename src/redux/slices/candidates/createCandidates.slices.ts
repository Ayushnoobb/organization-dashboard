import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ActionInitialState } from "../interface/actions.interface";
import { CreateCandidatesThunk } from "../../actions/candidates/CreateCandidates.actions";
import { CandidateInterface, CandidateResponseInterface, GetCandidatesInitialInterface } from "../interface/candidates.interface";
import { RootStore } from "../../store";

export const initialState : GetCandidatesInitialInterface = {
  isFulfilled : false,
  isLoading : false,
  isRejected : false,
  data : null
}

export const CreateCandidatesSlices = createSlice({
  name : 'voting-dashboard/create-candidates',
  initialState,
  reducers : {
    resetState:(state)=>{
      state.isFulfilled = false
      state.isRejected = false
      state.isLoading = false
    },
  },
  extraReducers : (builder) => {
    builder 
      .addCase(CreateCandidatesThunk.pending , (state) =>{
        state.isLoading = true
      })

      .addCase(CreateCandidatesThunk.fulfilled , (state , action : PayloadAction<CandidateInterface[]>) =>{
        state.isFulfilled = true
        state.isLoading = false
        console.log(action.payload ? false : true)
        state.isRejected = action.payload ? false : true
        state.data = action.payload || null
      })

      .addCase(CreateCandidatesThunk.rejected , (state) =>{
        state.isFulfilled = false
        state.isLoading = false
        state.isRejected = true
      })
  }
})

export const { resetState } = CreateCandidatesSlices.actions
export const CreateCandidateData = (state : RootStore) => state.create_candidate 
export default CreateCandidatesSlices.reducer
