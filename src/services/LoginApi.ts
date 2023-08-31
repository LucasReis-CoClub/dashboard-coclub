/*eslint-disable*/
import { AxiosError } from 'axios'
import api from './Api'

export const postAuthLogin = (email: string, password: string) => {
  return api
    .post('https://api.staging.coclub.app/api/auth/login', {
      email,
      password
    })
}
