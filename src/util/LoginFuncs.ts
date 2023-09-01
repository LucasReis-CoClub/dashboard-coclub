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
