import { LoginData } from 'dto/login'
import { ResponseApiError } from 'dto/responseError'

export function ShowLoginErroMessage (err: ResponseApiError) {
  switch (err.errorType) {
    case 'BAD_REQUEST':
      return 'Wrong email or password'
    case 'UNPROCESSABLE_ENTITY':
      return err.message
    default:
      return 'unknow_error'
  }
}

export async function SaveLoginDataAtLocalStorage (loginData: LoginData) {
  localStorage.setItem('accessToken', loginData.accessToken)
  localStorage.setItem('expiry', loginData.expiry.toString())
  localStorage.setItem('idToken', loginData.idToken)
  localStorage.setItem('refreshToken', loginData.refreshToken)
  localStorage.setItem('type', loginData.type)
}
