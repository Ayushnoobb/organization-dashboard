import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NewsInterface, NewsSliceInitialState } from "../interface/news.interface";
import { GetAllNewsData, GetIndividualNewsData } from "../../actions/news/NewsData.actions";
import { RootStore } from "../../store";
import { addMinutesAndConvertToISOString } from "../../../utils/helper";

const initialState : NewsSliceInitialState = {
  all_news_data : {
    data : null,
    isPending : false,
    isRejected : false,
    isFulfilled : false,
    expiry : null
  }
}
export const NewsDataSlice = createSlice({
  name :'@voting-dashboard/voting-news',
  initialState,
  reducers : {},
  extraReducers : (builder) => {
    builder
    // Get all news
      .addCase(GetAllNewsData.pending , (state) => {
        state.all_news_data.isPending = true
        state.all_news_data.isRejected = false
        state.all_news_data.isFulfilled = false
      })
      .addCase(GetAllNewsData.fulfilled , (state , action : PayloadAction<NewsInterface[] | undefined>) => {
        state.all_news_data.isPending = false
        state.all_news_data.isRejected = action.payload ? false : true
        state.all_news_data.isFulfilled = action.payload ? true : false
        state.all_news_data.data = action.payload ?? null
        state.all_news_data.expiry = action.payload ? addMinutesAndConvertToISOString(new Date(), 1) : null
      })
      .addCase(GetAllNewsData.rejected , (state) => {
        state.all_news_data.isPending = false
        state.all_news_data.isFulfilled = false
        state.all_news_data.isRejected = true
      })
  }
})

export const VotingNewsData = (state :RootStore) => state.news
export default NewsDataSlice.reducer
