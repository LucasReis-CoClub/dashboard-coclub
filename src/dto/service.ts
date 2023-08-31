import { Method } from 'axios'
import { IPagination } from './pagination'

export type HandledServiceRequestParams<T = any> = {
  params?: any
  headers?: any
  responseType?: any
  route?: string
}

export type HandledService = (
  method: Method,
  route: string,
  dataParam?: object
) => any;