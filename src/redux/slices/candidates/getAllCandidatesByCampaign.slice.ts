import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CandidateInterface, GetCandidatesInitialInterface } from "../interface/candidates.interface";
import { GetAllCandidateByVotingCampaignIdThunk } from "../../actions/candidates/getAllCandidatesByVotingCampaignId.actions";
import { RootStore } from "../../store";
const initialState: GetCandidatesInitialInterface = {
  isFulfilled: false,
  isLoading: false,
  isRejected: false,
  data: null
}
export const GetAllCandidateByVotingCampaignIdSlice = createSlice({
  name: '@voting-dashboard/getAllCandidatesByVotingCampaignId',
  initialState,
  reducers: {
    resetState: (state) => {
      state.isFulfilled = false
      state.isRejected = false
      state.isLoading = false
      state.data = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetAllCandidateByVotingCampaignIdThunk.pending, (state) => {
        state.isLoading = true
        state.isFulfilled = false
        state.isRejected = false
      })

      .addCase(GetAllCandidateByVotingCampaignIdThunk.fulfilled, (state, action: PayloadAction<CandidateInterface[] | undefined>) => {
        state.isFulfilled = true
        state.isLoading = false
        state.isRejected = action.payload ? false : true
        state.data = action.payload || null
      })

      .addCase(GetAllCandidateByVotingCampaignIdThunk.rejected, (state) => {
        state.isLoading = false
        state.isFulfilled = false
        state.isRejected = true
      })
  }
})

export const { resetState } = GetAllCandidateByVotingCampaignIdSlice.actions
export const GetAllCandidatesByVotingCampaignData = (state: RootStore) => state.get_all_candidates_by_campaign_id
export default GetAllCandidateByVotingCampaignIdSlice.reducer