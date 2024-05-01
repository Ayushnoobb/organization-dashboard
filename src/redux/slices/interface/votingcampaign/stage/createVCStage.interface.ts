interface CreateVCStageResponseData {
    id: string
    organizationID: string
    title: string
    description: string
    startDateTime: string
    endDateTime: string
    smsVotingLimit: number
    emailVotingLimit: number
    votingCampaignId: string
    logo: string
    banner: string
    updated: string
    inserted: string
}
export interface CreateVCStageResponse {
    data: CreateVCStageResponseData | null
    message: string
    success: boolean
}
export interface CreateVCStageInitial {
    data: CreateVCStageResponse | null
    isLoading: boolean
    isError: boolean
}