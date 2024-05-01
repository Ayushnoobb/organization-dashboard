import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FaqDataInterface, FaqInterface } from '../interface/faq.interface';
import { getFaqs } from '../../actions/faq/faq.action';
import { RootStore } from '../../store';
const initialState: FaqDataInterface = {
    data: null,
    isLoading: false,
    isError: false
}
const faqSlice = createSlice({
    name: "@faq",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFaqs.pending, (state: FaqDataInterface) => {
            state.isLoading = true
        }).addCase(getFaqs.fulfilled, (state: FaqDataInterface, action: PayloadAction<FaqInterface>) => {
            console.log(action.payload)
            state.data = { ...action.payload }
            state.isLoading = false
        }).addCase(getFaqs.rejected, (state: FaqDataInterface) => {
            state.isError = true
        })
    }
});
export const faqData = (state: RootStore) => state.faq
export default faqSlice.reducer