import { z } from "zod";
import { ISODateTimeString, NumberField, stringField } from "../common.schema";
export const CreateCampaignStage = z.object({
    title: stringField("title"),
    startDateTime: ISODateTimeString("campaign stage start date"),
    endDateTime: ISODateTimeString("campaign stage end date"),
    smsVotingLimit: stringField("sma limit"),
    emailVotingLimit: stringField("email limit"),
    description: stringField("description"),
    logo: z.instanceof(File),
    banner: z.instanceof(File),
    votingCampaignId: stringField("campaignID")
})
