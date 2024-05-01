import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { DeleteResponse } from "../../../slices/interface/votingcampaign/stage/deleteVCStage.interface"
interface Props {
    id: string
    xApi: string
    authToken: string
}
export const deleteCStageById = createAsyncThunk(
    "deleteCampaign",
    async (props: Props) => {
        const response = await axios.delete<DeleteResponse>(
            `https://voting-user.intersexnepal.org/v1/voting-campaign-stages/${props.id}`,
            {
                headers: {
                    "x-api-key": `Bearer ${props.xApi}`,
                    "Authorization": `Bearer ${props.authToken}`,
                },
            },
        )
        return response.data
    },
)
