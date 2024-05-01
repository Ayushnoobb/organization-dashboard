import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { CampaignUpdateResponse } from "../../slices/interface/votingcampaign/updateVCampaign.interface"
interface Props {
    id: string
    xApi: string
    authToken: string
    data: {
        title: string
        description: string
        startDateTime: string
        endDateTime: string
        timeZone: string
    }
}
export const updateCampaignById = createAsyncThunk(
    "deleteCampaign",
    async (props: Props) => {
        const response = await axios.put<CampaignUpdateResponse>(
            `https://voting-user.intersexnepal.org/v1/voting-campaign/${props.id}`, props.data, {
            headers: {
                "x-api-key": `Bearer ${props.xApi}`,
                "Authorization": `Bearer ${props.authToken}`,
            },
        },
        )
        return response.data
    },
)