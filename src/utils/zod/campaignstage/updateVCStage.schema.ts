import { z } from "zod";
import { ISODateTimeString, stringField } from "../common.schema";
export const updateVotingCampaignStage = z.object({
    title: stringField("title"),
    description: stringField("description"),
    startDateTime: ISODateTimeString("campaign stage start date"),
    endDateTime: ISODateTimeString("campaign stage end date"),
    smsVotingLimit: z.string(),
    emailVotingLimit: z.string(),
    votingCampaignId: z.string()
})
