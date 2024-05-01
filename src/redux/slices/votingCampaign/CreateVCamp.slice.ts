import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createVCampaign } from "../../actions/votingCampaign/createVcampaign.action"
import { CreateVCampaignResponse, CreateVotingCampaignInitialInterface } from "../interface/createVCampaign.interface"
import { RootStore } from "../../store"
const initialState: CreateVotingCampaignInitialInterface = {
  data: null,
  isLoading: false,
  isError: false
}
const createVotingCampaign = createSlice({
  name: "@createVotingCamp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createVCampaign.pending, (state: CreateVotingCampaignInitialInterface) => {
      state.isLoading = true
    }).addCase(createVCampaign.fulfilled, (state: CreateVotingCampaignInitialInterface, action: PayloadAction<CreateVCampaignResponse>) => {
      state.data = action.payload
      state.isLoading = false
    }).addCase(createVCampaign.rejected, (state: CreateVotingCampaignInitialInterface) => {
      state.isError = true
    })
  }
})
export const votingCampaignCreationData = (state: RootStore) => state.create_voting_campaign
export default createVotingCampaign.reducer
