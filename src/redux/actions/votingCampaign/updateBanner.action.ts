import { createAsyncThunk } from "@reduxjs/toolkit"
import { CampaignUpdateResponse } from "../../slices/interface/votingcampaign/updateVCampaign.interface"
import { api } from "../../../utils/axios"

interface Props {
    id: string
    data: {
        banner: File
    }
    xapi: string
    authToken: string
}
export const updateCampaignBanner = createAsyncThunk(
    "deleteCampaign",
    async (props: Props) => {
        const response = await api.patch<CampaignUpdateResponse>(
            `/voting-campaign/banner/${props.id}`, props.data, {
            headers: {
                "x-api-key": `Bearer ${props.xapi}`,
                "Authorization": `Bearer ${props.authToken}`,
                "Content-Type": "multipart/form-data",
            },
        })
        return response.data
    },
)