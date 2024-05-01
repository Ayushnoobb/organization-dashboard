import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VotingAggregatorDataInterface, VotingAggregatorInitialData } from "../interface/votingAggregator.interface";
import { GetVotingAggregatorThunk } from "../../actions/votingAggregator/votingAggrgator.actions";
import store, { RootStore } from "../../store";

const initialState: VotingAggregatorInitialData = {
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
  votingAggregatorData: null
};
export const GetVotingAggregatorData = createSlice({
  name: '@voting-dashboard/voting-aggregator-slice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetVotingAggregatorThunk.pending, (state) => {
        state.isFulfilled = false;
        state.isRejected = false;
        state.isLoading = true;
      })
      .addCase(GetVotingAggregatorThunk.fulfilled, (state, action: PayloadAction<VotingAggregatorDataInterface[] | undefined>) => {
        state.isFulfilled = true;
        state.isLoading = false;
        state.isRejected = action.payload ? true : false;
        state.votingAggregatorData = action.payload ?? null
      })
      .addCase(GetVotingAggregatorThunk.rejected, (state) => {
        state.isFulfilled = false;
        state.isRejected = true;
        state.isLoading = false;
      });
  }
});

export const VotingAggregatordata = (state : RootStore) => state._persist
export default GetVotingAggregatorData.reducer
