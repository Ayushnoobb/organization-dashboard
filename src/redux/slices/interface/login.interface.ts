export interface Customer {
  email: string
  id: string
  isVerified: boolean
  lastLogin: string | null
  lastPasswordChanged: string | null
  logo: string
  name: string
  phoneNumber: string
}
export interface loginResponseData {
  customer: Customer
  token: string,
}
export interface LoginResponse {
  data: loginResponseData
  message: string
  success: boolean
}
