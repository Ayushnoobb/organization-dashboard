import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootStore } from "../../store"
import { getVotingCampaign } from "../../actions/votingCampaign/votingCamp.action"
export interface Rows {
  banner: string
  description: string
  endDateTime: string
  id: string
  inserted: string
  logo: string
  organizationID: string
  startDateTime: string
  timeZone: string
  title: string
  updated: string
}
interface ResponseInnerData {
  rows: Rows[]
  count: number
}
export interface ResponseInterface {
  data: ResponseInnerData
  message: string
  success: string
}
interface InitialVotingCampainInterface {
  data: ResponseInterface | null
  isLoading: boolean
  isError: string
}
const initialState: InitialVotingCampainInterface = {
  data: null,
  isLoading: false,
  isError: "",
}
const votingCampainSlice = createSlice({
  name: "@votingCampaign",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getVotingCampaign.pending,
        (state: InitialVotingCampainInterface) => {
          state.isLoading = true
        },
      )
      .addCase(
        getVotingCampaign.fulfilled,
        (
          state: InitialVotingCampainInterface,
          action: PayloadAction<ResponseInterface>,
        ) => {
          state.data = { ...action.payload }
          state.isLoading = false
        },
      )
      .addCase(
        getVotingCampaign.rejected,
        (state: InitialVotingCampainInterface) => {
          state.isError = "something went wrong"
        },
      )
  },
})
export const { } = votingCampainSlice.actions
export const votingCampaignDatas = (state: RootStore) => state.votingCampaign
export default votingCampainSlice.reducer
