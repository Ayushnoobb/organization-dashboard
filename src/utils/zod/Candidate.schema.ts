import { NumberField, genderField, stringField } from "./common.schema";
import { z } from 'zod'

export const CreateCandidateSchema = z.object(
  {
    name: stringField('Candidate Name'),
    code: stringField('Candidate Code'),
    age: NumberField('Candidate Age', 2),
    gender: genderField('Candidate Gender'),
    nationality: stringField('Candidate Nationality'),
    weight: stringField('Candidate Weight'),
    city: stringField('Candidate City'),
    biography: stringField('Candidate Biography'),
    socialMediaFacebook: stringField('Candidate Facebook link'),
    socialMediaInstagram: stringField('Candidate Instagram Link'),
    socialMediaTwitter: stringField('Candidate Twitter Link'),
    votingCampaignId: stringField('Candidate Voting Campaign')
  }
)

