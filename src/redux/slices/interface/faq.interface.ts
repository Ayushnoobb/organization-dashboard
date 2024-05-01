interface FaqDataInt {
    id: string
    organizationID: string
    question: string
    answer: string
    inserted: string
    updated: string
}
export interface FaqInterface {
    success: boolean
    data: FaqDataInt[]
    message: string
}
export interface FaqDataInterface {
    data: FaqInterface | null
    isLoading: boolean
    isError: boolean
}