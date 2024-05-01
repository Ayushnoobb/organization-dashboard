export interface CreateCouponResponseDataInterface {
  id: string,
  name: string,
  avaibilityPeriodStart: string,
  avaibilityPeriodEnd: string,
  pricing: number,
  organizationID: string,
  currency: string,
  eligibleCandidateCounts: number,
  votes: number,
  votingCampaignId: string,
  updated: string,
  inserted: string
}

export interface CreateCouponResponseInterface {
  data: CreateCouponResponseDataInterface | null
  message: string,
  success: boolean
}

export interface CreateCouponInitialInterface {
  isLoading: boolean,
  isRejected: boolean,
  isFulfilled: boolean
}


//! Get coupon by campaign id

export interface initialCouponSliceData {
  data: CouponInterface[] | null,
  isFulfilled: boolean,
  isPending: boolean,
  isRejected: boolean,
}

export interface GetCoupanByCampaignIdResponse {
  success: boolean,
  data: GetCouponByCampaignIdResponseData,
  message: string
}

export interface GetCouponByCampaignIdResponseData {
  count: number,
  rows: CouponInterface[]
}

export interface CouponInterface {
  id: string,
  organizationId: string,
  name: string,
  votes: number,
  eligibleCandidateCounts: number,
  pricing: number,
  currency: string,
  avaibilityPeriodStart: string,
  avaibilityPeriodEnd: string,
  votingCampaignId: string,
  inserted: string,
  updated: string
}

// update & delete

export interface CouponActionsIntitialState {
  isFulfilled: boolean,
  isPending: boolean,
  isRejected: boolean,
}




