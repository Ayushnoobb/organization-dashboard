interface ResponseData {
    banner: string
    description: string
    endDateTime: string
    id: string
    inserted: string
    logo: string
    organizationID: string
    startDateTime: string
    timeZone: string
    title: string
    updated: string
}

export interface CreateVCampaignResponse {
    data: ResponseData | null
    message: string
    success: boolean
}

export interface CreateVotingCampaignInitialInterface {
    data: CreateVCampaignResponse | null
    isLoading: boolean
    isError: boolean
}