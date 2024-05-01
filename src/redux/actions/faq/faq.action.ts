import { createAsyncThunk } from "@reduxjs/toolkit"
import { FaqInterface } from "../../slices/interface/faq.interface"
export const getFaqs = createAsyncThunk("x-api-key", async () => {
    const response = await fetch("https://voting-user.intersexnepal.org/v1/faq", {
        headers: {
            "x-api-key": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb25JZCI6IjMzNGEyZWNmMzg4ODA5MDYiLCJpc3MiOiJ2b3RpbmdfYXBwbGljYXRpb25fb3JnYW5pemF0aW9uX21hbmFnZW1lbnQiLCJpYXQiOjE3MTQwMjI2NTcsImV4cCI6MTcyODYyMTMyMn0.ee1L2xWsAjtkaSXrq5EXEVz08kh0qk0QfzaDMfpQBBM`
        }
    })
    const data: FaqInterface = await response.json()
    return data
})