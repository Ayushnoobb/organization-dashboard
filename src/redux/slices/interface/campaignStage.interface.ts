export interface CreateCampaignStageInt {
    title: string
    startDateTime: string
    endDateTime: string
    smsVotingLimit: string
    emailVotingLimit: string
    description: string
    logo: File | null
    banner: File | null
}
export interface NewState extends CreateCampaignStageInt {
    votingCampaignId: string
}
export interface CampaignCreationResponseInsideData extends CreateCampaignStageInt {
    id: string
    inserted: string
    organizationID: string
    updated: string
    votingCampaignId: string
}
export interface CampaignCreationResponseData {
    data: CampaignCreationResponseInsideData | null
    message: string
    success: boolean
}

