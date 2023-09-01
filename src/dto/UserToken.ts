export interface UserToken {
  accessToken: string
  expiry: Date
  idToken: string
  refreshToken: string
  type: string
}
