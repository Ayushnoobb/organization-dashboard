import { z } from "zod"
import { ISODateTimeString, stringField } from "../common.schema"
export const updateVCampaignSchema = z.object({
    title: stringField("title"),
    description: stringField("descriptions"),
    startDateTime: ISODateTimeString("start date"),
    endDateTime: ISODateTimeString("End date"),
    timeZone: stringField("timeZone")
})