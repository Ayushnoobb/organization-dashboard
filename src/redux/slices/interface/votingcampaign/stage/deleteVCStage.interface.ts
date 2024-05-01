export interface DeleteResponse {
    message: string
    success: boolean
}

export interface DeleteVCStageInitial {
    data: DeleteResponse | null
    isLoading: boolean
    isError: boolean
}