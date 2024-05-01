export interface InnerData {
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

export interface CampaignUpdateResponse {
    data: InnerData | null
    message: string
    success: boolean
}
export interface VotingCampaignInitial {
    data: CampaignUpdateResponse | null
    isLoading: boolean
    isError: boolean
}