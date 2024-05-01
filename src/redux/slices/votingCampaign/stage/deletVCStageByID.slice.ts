import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DeleteResponse, DeleteVCStageInitial } from '../../interface/votingcampaign/stage/deleteVCStage.interface';
import { deleteCStageById } from '../../../actions/votingCampaign/stages/deleteCStageById.action';
import { RootStore } from '../../../store';
const initialState: DeleteVCStageInitial = {
    data: null,
    isLoading: false,
    isError: false
}
const deleteVCStageSlice = createSlice({
    name: "@deleteVCStage",
    initialState,
    reducers: {
        resetDeleteState(state: DeleteVCStageInitial) {
            state.data = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(deleteCStageById.pending, (state: DeleteVCStageInitial) => {
            state.isLoading = true
        }).addCase(deleteCStageById.fulfilled, (state: DeleteVCStageInitial, action: PayloadAction<DeleteResponse>) => {
            state.data = action.payload
            state.isLoading = false
        }).addCase(deleteCStageById.rejected, (state: DeleteVCStageInitial) => {
            state.isError = true
        })
    }
});
export const { resetDeleteState } = deleteVCStageSlice.actions
export const deleteVCStage = (state: RootStore) => state.delete_voting_campaign_stage
export default deleteVCStageSlice.reducer