/*eslint-disable*/
import { AxiosError } from 'axios'
import api from './Api'

export const postAuthLink = (email: string) => {
  api
    .post('https://api.staging.coclub.app/api/auth/link', {email: "lucas.reisvb@gmail.com"})
    .then((response) => console.log('SUCESS '+ response))
    .catch((error: AxiosError) => console.log(error.response?.data))
}
