export interface InitialDashboardDataInterface {
  dashboardData : null | DashboardData,
  isLoading : boolean ,
  isRejected : boolean,
  isFulfilled : boolean,
  expiry : string | null
}

export interface DashboardDataResponse {
   success : string,
   data : null | DashboardData,
   message : string
}

export interface DashboardData {
  userCount : number ,
  candidateCount : number,
  votingCampaignStageCount : number
}