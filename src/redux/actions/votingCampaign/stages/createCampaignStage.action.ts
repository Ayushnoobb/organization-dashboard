import { createAsyncThunk } from "@reduxjs/toolkit"
import { CampaignCreationResponseData, NewState } from "../../../slices/interface/campaignStage.interface";
import { api } from "../../../../utils/axios";
export interface PropsData {
    data: NewState
    xApiKey: string
    authToken: string
}
export const createVCampaignStage = createAsyncThunk(
    "voting-campaign/create",
    async (formData: PropsData) => {
        const fetchOptions = {
            headers: {
                "Authorization": `Bearer ${formData.authToken}`,
                "x-api-key": `Bearer ${formData.xApiKey} `,
                "Content-Type": "multipart/form-data",
            }
        };
        const response = await api.post<CampaignCreationResponseData>("/voting-campaign-stages", formData.data, {
            headers: fetchOptions.headers
        })
        return response.data
    },
)
