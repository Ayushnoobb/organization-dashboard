import { createAsyncThunk } from "@reduxjs/toolkit";
import { CandidateInterface, GetAllCandidateDataInterface, GetAllCandidateInterface } from "../../slices/interface/candidates.interface";
import { dataService } from "../../../utils/axios";
export const GetAllCandidateByVotingCampaignIdThunk = createAsyncThunk(
  '@voting-dashboard/GetAllCandidateByVotingCampaignIdThunk',
  async (slug: string, thunkAPI): Promise<CandidateInterface[] | undefined> => {
    try {
      const initialRespose = await dataService.getData(`/candidates/voting-campaigns/${slug}`);
      const res: GetAllCandidateDataInterface = initialRespose.data
      const refinedRes: CandidateInterface[] = res.rows
      return refinedRes
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message)
    }
  }
)