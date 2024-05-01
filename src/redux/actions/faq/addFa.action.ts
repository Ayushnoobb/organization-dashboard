import { createAsyncThunk } from "@reduxjs/toolkit"
import { FaqInterface } from "../../slices/interface/faq.interface"
import axios from "axios"
const d = {
    question: "Hey",
    answer: "Hey"
}
export const createFaq = createAsyncThunk("x-api-key", async () => {

    const aa = await axios.post("https://voting-user.intersexnepal.org/v1/faq", d, {
        headers: {
            "x-api-key": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb25JZCI6IjMzNGEyZWNmMzg4ODA5MDYiLCJpc3MiOiJ2b3RpbmdfYXBwbGljYXRpb25fb3JnYW5pemF0aW9uX21hbmFnZW1lbnQiLCJpYXQiOjE3MTQwNDQ3MzUsImV4cCI6MTcyODYyMTMyMn0.UsX4ImJt-swIIiyMOon1mfWbOA9O4SU-98IJpx7D53k`,
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMzNGEyZWNmMzg4ODA5MDYiLCJlbWFpbCI6ImF5dXNoQHN1cHJlbWVpdHNvbHV0aW9ucy5jb20iLCJpc1ZlcmlmaWVkIjp0cnVlLCJ1c2VyQWdlbnQiOiJQb3N0bWFuUnVudGltZS83LjM3LjMiLCJpc3MiOiJ2b3RpbmdfYXBwbGljYXRpb25fb3JnYW5pemF0aW9uX21hbmFnZW1lbnQiLCJpYXQiOjE3MTQwNDQ4MDF9.G3mbCrXX4y1fuT7kXfSdvIPLCFYVHtyFsrP1hsPOEdw"
        }
    })
    console.log(aa.data)
    const response = await fetch("https://voting-user.intersexnepal.org/v1/faq", {
        method: "POST",
        headers: {
            "x-api-key": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb25JZCI6IjMzNGEyZWNmMzg4ODA5MDYiLCJpc3MiOiJ2b3RpbmdfYXBwbGljYXRpb25fb3JnYW5pemF0aW9uX21hbmFnZW1lbnQiLCJpYXQiOjE3MTQwNDQ3MzUsImV4cCI6MTcyODYyMTMyMn0.UsX4ImJt-swIIiyMOon1mfWbOA9O4SU-98IJpx7D53k`,
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMzNGEyZWNmMzg4ODA5MDYiLCJlbWFpbCI6ImF5dXNoQHN1cHJlbWVpdHNvbHV0aW9ucy5jb20iLCJpc1ZlcmlmaWVkIjp0cnVlLCJ1c2VyQWdlbnQiOiJQb3N0bWFuUnVudGltZS83LjM3LjMiLCJpc3MiOiJ2b3RpbmdfYXBwbGljYXRpb25fb3JnYW5pemF0aW9uX21hbmFnZW1lbnQiLCJpYXQiOjE3MTQwNDQ4MDF9.G3mbCrXX4y1fuT7kXfSdvIPLCFYVHtyFsrP1hsPOEdw"
        },
        body: JSON.stringify(d)
    })
    const data = await response.json()
    console.log(data)
    return data
})