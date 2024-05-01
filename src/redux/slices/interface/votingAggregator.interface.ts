import { CandidateInterface } from "./candidates.interface"

export interface VotingggregatorResponse {
  success : boolean,
  data : VotingAggregatorResponseDataInterface,
  message : string
}

export interface VotingAggregatorResponseDataInterface{
  rows : VotingAggregatorDataInterface[]
  count : number
}

export interface VotingAggregatorDataInterface {
  id : string 
  votes : number 
  organizationID : string 
  votingCampaignId : string 
  votingCampaignStageId : string 
  candidateId : string 
  inserted : string
  updated : string
  candidate : CandidateInterface
}

export interface VotingAggregatorInitialData {
  votingAggregatorData : VotingAggregatorDataInterface[] | null
  isLoading : boolean
  isRejected : boolean
  isFulfilled : boolean
}