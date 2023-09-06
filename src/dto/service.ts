import { Method } from 'axios'

export interface HandledServiceRequestParams<T = any> {
  params?: any
  headers?: any | T
  responseType?: any
  route?: string
}

export type HandledService = (
  method: Method,
  route: string,
  dataParam?: object
) => any
