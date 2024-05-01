import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootStore } from "../../store"
import { getXApikey } from "../../actions/XApiKey/xapikey.actions"
import { addMinutesAndConvertToISOString } from "../../../utils/helper"
import { XapiResponseInterface } from "../interface/xApi.interface"


export interface InitialXapiKeyInterface {
    isLoading: boolean
    isError: boolean
    expiry: string | null
    x_api: string | null
    isFulfilled: boolean
}

const initialState: InitialXapiKeyInterface = {
    x_api: null,
    expiry: null,
    isLoading: false,
    isError: false,
    isFulfilled: false,
}

const xApiKeySlice = createSlice({
    name: "@voting-dashboard/x-api-key",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getXApikey.pending, (state: InitialXapiKeyInterface) => {
                state.isLoading = true
            })
            .addCase(getXApikey.fulfilled, (state: InitialXapiKeyInterface, action: PayloadAction<XapiResponseInterface>) => {
                const { token } = action.payload
                state.x_api = token ?? null
                state.expiry = token && addMinutesAndConvertToISOString(new Date(), 10)
                state.isFulfilled = token ? true : false
                state.isLoading = false
                state.isError = token ? true : false
            })
            .addCase(getXApikey.rejected, (state: InitialXapiKeyInterface) => {
                state.isError = true
            })
    },
})
export const xApiKey = (state: RootStore) => state.x_api_key
export default xApiKeySlice.reducer