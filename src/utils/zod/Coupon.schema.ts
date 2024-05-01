import z from 'zod'
import { ISODateTimeString, NumberField, stringField } from './common.schema'

export const CreateCouponSchema = z.object({
  name : stringField('Name'),
  avaibilityPeriodStart : ISODateTimeString('Avaibility Period Start'),
  avaibilityPeriodEnd : ISODateTimeString('Avaibility Period End'),
  eligibleCandidateCounts : NumberField('Eligible Candidate Count' , 2),
  pricing : NumberField('Price' , 9)
})
export const UpdateCandidateSchema = z.object(
  {
    name : stringField('Name'),
    avaibilityPeriodStart : ISODateTimeString('Avaibility Period Start'),
    avaibilityPeriodEnd : ISODateTimeString('Avaibility Period End'),
    eligibleCandidateCounts : NumberField('Eligible Candidate Count' , 2),
    pricing : NumberField('Price' , 2),
    currency : stringField('Currency'),
    votingCampaignId : stringField('Voting Campaign Id'),
    votes : NumberField('Votes')
  }
)
export type CreateCouponSchema = z.infer<typeof CreateCouponSchema>
export type UpdateCouponScheme = z.infer<typeof UpdateCandidateSchema>
