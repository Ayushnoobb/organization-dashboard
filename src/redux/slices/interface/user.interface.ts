export interface UserInterface{
  id : string
  organizationID : string 
  name : string 
  email : string 
  profile : string | null
  isBlocked : boolean
  isVerified : boolean
  accessToken : string | null
  lastPasswordChanged : string | null
  lastLogin : string
  lastLoginIp : string
  lastNotificationActivity : string | null
  inserted : string
  updated : string
}

export interface GetUserResponseInterface {
  success : boolean
  message : string
  data : GetUserResponseDataInterface
}

export interface GetUserResponseDataInterface{
  count : number 
  rows : UserInterface[]
}

export interface GetUserResponseInitialInterface{
  isLoading : boolean
  isRejected : boolean
  isFulfilled : boolean
  data : UserInterface[] | null
  expiry : null | string
}