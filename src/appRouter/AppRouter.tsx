import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/login/Login"
import { Dashboard } from "../pages/dashboard/Dashboard"
// import { Logout } from "../pages/logout/Logout"
import { ManagePlan } from "../pages/manageplan/ManagePlan"
import { EmailNotification } from "../pages/notifications/email/EmailNotification"
import { SMS } from "../pages/notifications/sms/SmsNotification"
import { GlobalTemplate } from "../pages/notifications/global/GlobalTemplate."
import { PushNotification } from "../pages/notifications/pushnotification/PushNotification"
// import { NotificationTemplates } from "../pages/notifications/templates/NotificationTemplates"
import { VotingCampaign } from "../pages/votingCampaign/VotingCampaign"
import { CoupanTransaction } from "../pages/coupantransaction/CoupanTransaction"
import { CTAddEntry } from "../pages/coupantransaction/add/AddEntry"
import { NAddEntry } from "../pages/notifications/add/AddEntry"
import { VCSAddEntry } from "../pages/votingCampaign/votingcampaignstage/add/AddEntry"
import { VotingCampaignStage } from "../pages/votingCampaign/votingcampaignstage/VotingCampaignstage"
import { VotingCampaignAddEntry } from "../pages/votingCampaign/add/AddEntry"
import { VotingCampaignEditEntry } from "../pages/votingCampaign/edit/EditEntry"
import { VCSEditEntry } from "../pages/votingCampaign/votingcampaignstage/edit/EditEntry"
import { NEditEntry } from "../pages/notifications/edit/EditEntry"
import { CTEditEntry } from "../pages/coupantransaction/edit/EditEntry"
import { Reports } from "../pages/reports/Reports"
import { Notifications } from "../pages/notifications/Notifications"
import { CampaignCandidate } from "../pages/votingCampaign/campaigncandidate/CampaignCandidate"
import { Votes } from "../pages/votes/Votes"
import { Result } from "../pages/result/Result"
import { VoteTrends } from "../pages/reports/votetrends/VoteTrends"
import { CampaignStatus } from "../pages/reports/campaignstatus/CampaignStatus"
import { CAddEntry } from "../pages/votingCampaign/campaigncandidate/add/AddEntry"
import { CEditEntry } from "../pages/votingCampaign/campaigncandidate/edit/EditEntry"
import NotFound from "../pages/not-found/PageNotFound"
import { StageReport } from "../pages/reports/StagesReport"
import { CandidateReport } from "../pages/reports/CandidateReport"
import Performance from "../pages/reports/performance/Performance"
import Faq from "../pages/faq/FAQ"
import { UserManagement } from "../pages/usermanagement/UserManagement"
import Layout from "../components/layout/Layout"
import Auth from "../components/Auth"
import { NewsList } from "../pages/news/NewsList"
import AddEntryNews from "../pages/news/add/AddEntry"
import EditEntryNews from "../pages/news/edit/EditEntry"
// import Create from "../pages/ApiTestUi/Create"
function AppRouter({ iscollapse }: { readonly iscollapse: boolean }) {
  return (
    <div className="App" style={{ width: iscollapse ? "83.33%" : "97%" }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          {/** public route */}
          <Route path="login" element={<Login />} />
          {/** Protected Route */}
          {/* <Route element={<ProtectedRoute />}> */}
       
          {/* <Route element={<ProtectedRoute />}> */}
              {/* <Route element={<Auth />}> */}
                <Route index path="dashboard" element={<Dashboard />} />
                <Route path="votingcampaign" element={<VotingCampaign />} />
                <Route path="manageplan" element={<ManagePlan />} />
                <Route path="manageplan" element={<ManagePlan />} />
                <Route path="votingcampaign/votes" element={<Votes />} />
                <Route path="votingcampaign/result" element={<Result />} />
                <Route
                  path="votingcampaign/campaigncandidate/:id"
                  element={<CampaignCandidate />}
                />

                <Route
                  path="votingcampaign/campaigncandidate/:id/:csid"
                  element={<CampaignCandidate />}
                />
                <Route
                  path="votingcampaign/campaigncandidate/:id/addentry"
                  element={<CAddEntry />}
                />
                <Route
                  path="votingcampaign/campaigncandidate/:id/edit/:id"
                  element={<CEditEntry />}
                />
                <Route
                  path="votingcampaign/edit/:id"
                  element={<VotingCampaignEditEntry />}
                />
                <Route
                  path="votingcampaign/addentry"
                  element={<VotingCampaignAddEntry />}
                />
                <Route
                  path="votingcampaign/votingcampaignstage/:id"
                  element={<VotingCampaignStage />}
                />
                <Route
                  path="votingcampaign/votingcampaignstage/:id/edit/:id"
                  element={<VCSEditEntry />}
                />
                <Route
                  path="votingcampaign/votingcampaignstage/:id/addentry"
                  element={<VCSAddEntry />}
                />
                <Route
                  path="votingcampaign/coupan/:id"
                  element={<CoupanTransaction />}
                />
                <Route
                  path="votingcampaign/coupan/:id/edit/:id"
                  element={<CTEditEntry />}
                />
                <Route
                  path="votingcampaign/coupan/:id/addentry"
                  element={<CTAddEntry />}
                />
                <Route path="news" element={<NewsList />} />
                <Route path ='news/addentry' element={<AddEntryNews />} />
                <Route path="news/edit/:id" element={<EditEntryNews />} />

                <Route path="reports" element={<Reports />} />
                <Route path="reports/votetrends" element={<VoteTrends />} />
                <Route path="reports/performance" element={<Performance />} />
                <Route path="reports/campaignstatus" element={<CampaignStatus />} />
                <Route path="reports" element={<Reports />} />
                <Route path="reports/:id" element={<StageReport />} />
                <Route path="reports/:id/:csid" element={<CandidateReport />} />
                <Route path="reports/votetrends" element={<VoteTrends />} />
                <Route path="reports/campaignstatus" element={<CampaignStatus />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="notifications/edit/:id" element={<NEditEntry />} />
                <Route path="notifications/addentry" element={<NAddEntry />} />
                <Route path="notifications/email" element={<EmailNotification />} />
                <Route path="notifications/sms" element={<SMS />} />
                <Route
                  path="notifications/globaltemplate"
                  element={<GlobalTemplate />}
                />
                <Route
                  path="notifications/pushnotification"
                  element={<PushNotification />}
                />
                <Route path="faq" element={<Faq />} />
                <Route path="user" element={<UserManagement />} />
              {/* </Route> */}
            
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}
export default AppRouter
