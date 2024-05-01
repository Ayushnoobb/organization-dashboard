import { createAsyncThunk } from "@reduxjs/toolkit"
import { StageByCampaignIdInterface } from "../../slices/interface/stageByCampaignId.interface"
interface Props {
  campaignId: string
  xApi: string
}
export const getStageByCampaignId = createAsyncThunk(
  "/voting-campaign/id",
  async (Args: Props) => {
    const response = await fetch(
      `https://voting-user.intersexnepal.org/v1/voting-campaign-stages/voting-campaigns/${Args.campaignId}`,
      {
        method: "GET",
        headers: {
          "x-api-key":
            `Bearer ${Args.xApi}`,
        },
      },
    )
    const data: StageByCampaignIdInterface = await response.json()
    return data
  },
)
