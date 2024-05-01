import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  InitialStageByCampaignIdDataInterface,
  StageByCampaignIdInterface,
} from "../interface/stageByCampaignId.interface"
import { getStageByCampaignId } from "../../actions/votingCampaign/stageByCampaignId.action"
import { RootStore } from "../../store"
const initialState: InitialStageByCampaignIdDataInterface = {
  data: null,
  isLoading: false,
  isError: false,
}
const stageByCampaignIdSlice = createSlice({
  name: "@stageByCampaignIdSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getStageByCampaignId.pending,
        (state: InitialStageByCampaignIdDataInterface) => {
          state.isLoading = true
        },
      )
      .addCase(
        getStageByCampaignId.fulfilled,
        (
          state: InitialStageByCampaignIdDataInterface,
          actions: PayloadAction<StageByCampaignIdInterface>,
        ) => {
          state.data = actions.payload
          state.isLoading = false
        },
      )
      .addCase(
        getStageByCampaignId.rejected,
        (state: InitialStageByCampaignIdDataInterface) => {
          state.isError = true
        },
      )
  },
})
export const { } = stageByCampaignIdSlice.actions
export const stageByCampaignIdData = (state: RootStore) =>
  state.stageByCampaginId
export default stageByCampaignIdSlice.reducer
