import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IndividualNewsSliceInitialState, NewsInterface, NewsSliceInitialState } from "../interface/news.interface";
import { GetIndividualNewsData } from "../../actions/news/NewsData.actions";
import { RootStore } from "../../store";

const initialState : IndividualNewsSliceInitialState = {
  news_by_id : {
    data : null,
    isPending : false,
    isRejected : false,
    isFulfilled : false 
  },
}
export const IndividualNewsDataSlice = createSlice({
  name :'@voting-dashboard/voting-news-individaul',
  initialState,
  reducers : {},
  extraReducers : (builder) => {
    builder

    // get news by id
    .addCase(GetIndividualNewsData.pending , (state) => {
      state.news_by_id.isPending = true
      state.news_by_id.isRejected = false
      state.news_by_id.isFulfilled = false
    })
    .addCase(GetIndividualNewsData.fulfilled , (state , action : PayloadAction<NewsInterface | undefined>) => {
      state.news_by_id.isPending = false
      state.news_by_id.isRejected = action.payload ? false : true
      state.news_by_id.isFulfilled = action.payload ? true : false
      state.news_by_id.data = action.payload ?? null
    })
    .addCase(GetIndividualNewsData.rejected , (state) => {
      state.news_by_id.isPending = false
      state.news_by_id.isFulfilled = false
      state.news_by_id.isRejected = true
    })
  }
})

export const VotingNewsIndividualData = (state :RootStore) => state.individual_news
export default IndividualNewsDataSlice.reducer
