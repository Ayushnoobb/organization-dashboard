import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CampaignUpdateResponse, VotingCampaignInitial } from '../interface/votingcampaign/updateVCampaign.interface'
import { updateCampaignById } from '../../actions/votingCampaign/updateCampaignById.action'
import { RootStore } from '../../store';
const initialState: VotingCampaignInitial = {
    data: null,
    isLoading: false,
    isError: false
}
const updateVCampaign = createSlice({
    name: "@editVCampaign",
    initialState,
    reducers: {
        resetCampaignUpdate(state: VotingCampaignInitial) {
            state.data = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(updateCampaignById.pending, (state: VotingCampaignInitial) => {
            state.isLoading = true
        }).addCase(updateCampaignById.fulfilled, (state: VotingCampaignInitial, action: PayloadAction<CampaignUpdateResponse>) => {
            state.data = action.payload
            state.isLoading = false
        }).addCase(updateCampaignById.rejected, (state: VotingCampaignInitial) => {
            state.isError = true
        })
    }
});
export const { resetCampaignUpdate } = updateVCampaign.actions
export const updateCampaign = (state: RootStore) => state.update_campaign
export default updateVCampaign.reducer