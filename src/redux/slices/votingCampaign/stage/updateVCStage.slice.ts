import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { updateVCStage } from '../../../actions/votingCampaign/stages/updateVCStageById.action';
import { UpdateVCStageInitial, UpdateVCStageInterface } from '../../interface/votingcampaign/stage/updateVCStage.interface';
import { RootStore } from '../../../store';
const initialState: UpdateVCStageInitial = {
    data: null,
    isLoading: false,
    isError: false
}
const updateVCStageSlice = createSlice({
    name: "@updateVCStageSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateVCStage.pending, (state: UpdateVCStageInitial) => {
            state.isLoading = true
        }).addCase(updateVCStage.fulfilled, (state: UpdateVCStageInitial, action: PayloadAction<UpdateVCStageInterface>) => {
            state.data = action.payload
            state.isLoading = false
        }).addCase(updateVCStage.rejected, (state: UpdateVCStageInitial) => {
            state.isError = false
        })
    }
});
export const { } = updateVCStageSlice.actions
export const updateCampaignStage = (state: RootStore) => state.update_campaign_stage
export default updateVCStageSlice.reducer