import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
interface Props {
  id: string
  xApi: string
  authToken: string
}
export const deleteCampaignById = createAsyncThunk(
  "deleteCampaign",
  async (props: Props) => {
    const ress = await axios.delete(
      `https://voting-user.intersexnepal.org/v1/voting-campaign/${props.id}`,
      {
        headers: {
          "x-api-key": `Bearer ${props.xApi}`,
          "Authorization": `Bearer ${props.authToken}`,
        },
      },
    )
    console.log(ress.data)
  },
)
