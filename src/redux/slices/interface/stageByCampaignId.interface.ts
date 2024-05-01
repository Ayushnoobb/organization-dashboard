export interface StageRow {
  id: string
  organizationID: string
  title: string
  description: string
  startDateTime: string
  endDateTime: string
  smsVotingLimit: number
  emailVotingLimit: number
  logo: string
  banner: string
  votingCampaignId: string
  inserted: string
  updated: string
}
export interface StageByCampaignIdInterface {
  success: boolean
  data: {
    count: number
    rows: StageRow[]
  }
  message: string
}

export interface InitialStageByCampaignIdDataInterface {
  data: StageByCampaignIdInterface | null
  isLoading: boolean
  isError: boolean
}
