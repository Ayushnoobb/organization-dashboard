// export interface CreateCandidateInterface{

// }

export interface CandidateResponseInterface {
  success : boolean,
  data :CandidateInterface[] ,
  message : string
}

export interface CandidateInterface {
  id : string
  organizationID : string,
  name : string ,
  age : number ,
  gender : string ,
  nationality : string ,
  weight : string,
  city : string,
  biography : string ,
  profilePicture : string ,
  socialMediaFacebook : string,
  socialMediaInstagram : string
  socialMediaTwitter : string ,
  votingCampaignId : string,
  code : string,
  updated : string ,
  inserted : string ,
}

// Get all Candidate
export interface GetCandidatesInitialInterface{
  isLoading : boolean,
  isRejected : boolean,
  isFulfilled : boolean,
  data : CandidateInterface[] | null
}

export interface GetAllCandidateInterface {
  success : boolean,
  data :GetAllCandidateDataInterface ,
  message : string
}

export interface GetAllCandidateDataInterface {
  count : number ,
  rows : CandidateInterface[]
}

export interface CandiateVotingCampaignInterface {
  title : string,
  id : string
}

export interface CandidateVotingStageInterface {
  id : string ,
  votingCampaignStage : CandidateVotingCampaignStageInterface[]
}

export interface CandidateVotingCampaignStageInterface {
  title : string ,
  id : string
}


// Candidate Actions 
export interface CandidatesActionsInitialInterface{
  isLoading : boolean,
  isRejected : boolean,
  isFulfilled : boolean,
}