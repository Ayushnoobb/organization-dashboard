import { createAsyncThunk } from "@reduxjs/toolkit";
import { dataService } from "../../../utils/axios";
import { VotingAggregatorDataInterface, VotingAggregatorResponseDataInterface, VotingggregatorResponse } from "../../slices/interface/votingAggregator.interface";


export const GetVotingAggregatorThunk = createAsyncThunk(
  '@voting-dashboard/voting-aggregator-thunk',
  async (slug: string, ThunkApi: any): Promise<VotingAggregatorDataInterface[] | undefined> => {
    try {
      const res: VotingggregatorResponse = await dataService.getData(`vote-aggregator/candidate-votes-count/voting-campaign-stage/${slug}`)
      const filteredRes: VotingAggregatorResponseDataInterface = res.data
      const returnRes = filteredRes.rows
      return returnRes
    } catch (error: any) {
      return ThunkApi.rejectWithValue(error.message)
    }
  }
)