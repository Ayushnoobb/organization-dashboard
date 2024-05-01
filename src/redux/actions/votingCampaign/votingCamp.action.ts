import { createAsyncThunk } from "@reduxjs/toolkit"
import { ResponseInterface } from "../../slices/votingCampaign/votingCamp.slice"

export const getVotingCampaign = createAsyncThunk(
  "/voting-campaign/all",
  async () => {
    const response = await fetch(
      "https://voting-user.intersexnepal.org/v1/voting-campaign",
      {
        headers: {
          "x-api-key":
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb25JZCI6IjMzNGEyZWNmMzg4ODA5MDYiLCJpc3MiOiJ2b3RpbmdfYXBwbGljYXRpb25fb3JnYW5pemF0aW9uX21hbmFnZW1lbnQiLCJpYXQiOjE3MTI4MTAxNjEsImV4cCI6MTcyODYyMTMyMn0.Yw17ng3ydGpaFe-PSit1qvjLuFyB6FwsNR3p6g5m4qc",
        },
      },
    )
    const data: ResponseInterface = await response.json()
    return data
  },
)
