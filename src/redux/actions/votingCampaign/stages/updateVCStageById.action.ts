import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { UpdateVCStageInterface } from "../../../slices/interface/votingcampaign/stage/updateVCStage.interface"
interface Props {
    id: string
    xApi: string
    authToken: string
    data: any
}
export const updateVCStage = createAsyncThunk(
    "deleteCampaign",
    async (props: Props) => {
        const response = await axios.put<UpdateVCStageInterface>(
            `https://voting-user.intersexnepal.org/v1/voting-campaign-stages/${props.id}`, props.data, {
            headers: {
                "x-api-key": `Bearer ${props.xApi}`,
                "Authorization": `Bearer ${props.authToken}`,
            },
        })
        return response.data
    },
)