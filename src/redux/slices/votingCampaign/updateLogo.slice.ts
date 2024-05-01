import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { updateCampaignLogo } from '../../actions/votingCampaign/updateLogo.action';
import { CampaignUpdateResponse, VotingCampaignInitial } from '../interface/votingcampaign/updateVCampaign.interface';
import { RootStore } from '../../store';
const initialState: VotingCampaignInitial = {
    data: null,
    isLoading: false,
    isError: false
}
const updateCampaignLogoSlice = createSlice({
    name: "@updateCampaignLogo",
    initialState,
    reducers: {
        resetUpdateLogo(state: VotingCampaignInitial) {
            state.data = null
            state.isError = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(updateCampaignLogo.pending, (state: VotingCampaignInitial) => {
            state.isLoading = true
        }).addCase(updateCampaignLogo.fulfilled, (state: VotingCampaignInitial, action: PayloadAction<CampaignUpdateResponse>) => {
            state.data = action.payload
            state.isLoading = false
        }).addCase(updateCampaignLogo.rejected, (state: VotingCampaignInitial) => {
            state.isError = true
        })
    }
});
export const { resetUpdateLogo } = updateCampaignLogoSlice.actions
export const updateCampaignLogoState = (state: RootStore) => state.update_campaign_logo
export default updateCampaignLogoSlice.reducer