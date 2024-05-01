import { z } from "zod";
import { ISODateTimeString, stringField } from "./common.schema";
export const CreateVotingCampaign = z.object({
    title: stringField("title"),
    startDateTime: ISODateTimeString("campaign stage start date"),
    endDateTime: ISODateTimeString("campaign stage end date"),
    description: stringField("description"),
    logo: z.instanceof(File),
    banner: z.instanceof(File),
    timeZone: z.string()
})
