import { combineReducers, configureStore } from "@reduxjs/toolkit"
import systemReducer from "./slices/systemSlice"
import storage from "redux-persist/lib/storage"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist"
import { PERSIST_KEY, PERSIST_VERSION } from "../utils/config"
import votingCampainSlice from "./slices/votingCampaign/votingCamp.slice"
import stageByCampaignIdSlice from "./slices/votingCampaign/stageByCampaignId.slice"
import loginSlice from "./slices/login/login.slices"
import dashboardSlice from "./slices/dashboard/dashboard.slice"
import xApiKeySlice from "./slices/XapiKey/xApiKey.slice"
import CouponByCampaignReducer from "./slices/coupon/getCouponByCampaignId.slices"
import CreateCouponSliceReducer from "./slices/coupon/createCoupon.slices";
import UpdateCouponReducer from "./slices/coupon/editCoupon.slices"
import DeleteCouponReducer from "./slices/coupon/deleteCoupon.slices"
import GetAllCandidatesByVotingCampaignReducers from "./slices/candidates/getAllCandidatesByCampaign.slice"
import faqSlice from "./slices/faq/faq.slice"
import createVCStageSlice from "./slices/votingCampaign/stage/createVCStage.slice"
import CreateCandidatesReducer from "./slices/candidates/createCandidates.slices"
import editCandidatesReducer from "./slices/candidates/editCandidates.slice"
import deleteCandidatesReducer from "./slices/candidates/deleteCandidates.slices"
import couponByIdReducer from "./slices/coupon/couponById.slices"
import GetAllCandidateByVotingStageIdReducer from "./slices/candidates/getAllCandidatesbyVotingStageId.slices"
import createVotingCampaign from './slices/votingCampaign/CreateVCamp.slice';
import updateVCampaign from './slices/votingCampaign/updateVCampaign.slice';
import updateVCStageSlice from "./slices/votingCampaign/stage/updateVCStage.slice"
import deleteVCStageSlice from './slices/votingCampaign/stage/deletVCStageByID.slice';
import votingAggregatorReducer from "./slices/votingAggregator/votingAggregator.slices"
import getUsersReducer from "./slices/user/getUsers.slices"
import BlockUserReducer  from "./slices/user/blockUser.slices"
import  DeleteUserReducer  from "./slices/user/deleteUser.slices"
import NewsDataReducer  from "./slices/news/allnews.slices"
import IndividualNewsDataReducer  from "./slices/news/newsById.slices"
import CreateNewsReducer  from "./slices/news/createNews.slices"
import EditNewsReducer from "./slices/news/editNews.slices"
import DeleteNewsReducers from "./slices/news/deleteNews.slices"
import updateCampaignLogoSlice from './slices/votingCampaign/updateLogo.slice';


const persistConfig = {
  key: PERSIST_KEY,
  version: 2,
  storage,
  whitelist: ["systemState", "login", 'x_api_key', 'dashboard', 'get_all_user' , 'news'],
}
const rootReducer = combineReducers({
  systemState: systemReducer,
  votingCampaign: votingCampainSlice,
  stageByCampaginId: stageByCampaignIdSlice,
  login: loginSlice,
  dashboard: dashboardSlice,
  x_api_key: xApiKeySlice,
  coupon_by_campaign_id: CouponByCampaignReducer,
  coupon_by_id: couponByIdReducer,
  create_coupon: CreateCouponSliceReducer,
  update_coupon: UpdateCouponReducer,
  delete_coupon: DeleteCouponReducer,
  faq: faqSlice,
  create_voting_camp_stage: createVCStageSlice,
  get_all_candidates_by_campaign_id: GetAllCandidatesByVotingCampaignReducers,
  get_all_candidates_by_stage_id : GetAllCandidateByVotingStageIdReducer,
  create_candidate : CreateCandidatesReducer,
  update_candidate : editCandidatesReducer,
  delete_candidate  : deleteCandidatesReducer,
  voting_aggregator : votingAggregatorReducer,
  get_all_user : getUsersReducer,
  block_user : BlockUserReducer,
  delete_user : DeleteUserReducer,
  news : NewsDataReducer,
  individual_news : IndividualNewsDataReducer,
  create_news : CreateNewsReducer,
  edit_news : EditNewsReducer,
  delete_news : DeleteNewsReducers,
  create_voting_campaign: createVotingCampaign,
  update_campaign: updateVCampaign,
  update_campaign_stage: updateVCStageSlice,
  delete_voting_campaign_stage: deleteVCStageSlice,
  update_campaign_logo: updateCampaignLogoSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)
export default store
