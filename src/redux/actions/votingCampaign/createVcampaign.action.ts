import { createAsyncThunk } from "@reduxjs/toolkit"
import { VotingCampaighCreationState } from "../../../pages/votingCampaign/add/AddEntry"
import { api } from "../../../utils/axios";
import { CreateVCampaignResponse } from "../../slices/interface/createVCampaign.interface";
export interface PropsData {
  data: VotingCampaighCreationState
  xapi: string
  authToken: string
}
export const createVCampaign = createAsyncThunk(
  "voting-campaign/create",
  async (formData: PropsData) => {
    const fetchOptions = {
      headers: {
        "Authorization": `Bearer ${formData.authToken}`,
        "x-api-key": `Bearer ${formData.xapi} `,
        "Content-Type": "multipart/form-data",
      }
    };
    const response = await api.post<CreateVCampaignResponse>("/voting-campaign", formData.data, {
      headers: fetchOptions.headers
    })
    return response.data
  },
)
