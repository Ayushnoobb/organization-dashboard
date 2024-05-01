import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CampaignCreationResponseData } from '../../interface/campaignStage.interface'
import { createVCampaignStage, } from '../../../actions/votingCampaign/stages/createCampaignStage.action'
import { RootStore } from '../../../store'
interface InitialState {
    data: CampaignCreationResponseData | null
    isLoading: boolean
    isError: boolean
}
const initialState: InitialState = {
    data: null,
    isLoading: false,
    isError: false
}
const createVCStageSlice = createSlice({
    name: "@createVotingCampaignStage",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createVCampaignStage.pending, (state: InitialState) => {
            state.isLoading = true
        }).addCase(createVCampaignStage.fulfilled, (state: InitialState, actions: PayloadAction<CampaignCreationResponseData>) => {
            state.data = actions.payload
            state.isLoading = false
        }).addCase(createVCampaignStage.rejected, (state: InitialState) => {
            state.isError = true
        })
    }
});
export const { } = createVCStageSlice.actions
export const votingCampaignStage = (state: RootStore) => state.create_voting_camp_stage
export default createVCStageSlice.reducer