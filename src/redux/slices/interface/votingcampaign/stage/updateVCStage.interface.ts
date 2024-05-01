export interface UpdateVCStageInterface {
    message: string
    success: boolean
}
export interface UpdateVCStageInitial {
    data: UpdateVCStageInterface | null
    isLoading: boolean
    isError: boolean
}