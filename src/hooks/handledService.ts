import { HandledService } from 'dto/service'
// import api from '../services/Api'
import axios from 'axios'

export const useHandledService: HandledService = async (method, route, data) => {
  return await axios({
    method,
    data,
    url: 'https://api.staging.coclub.app/api' + route,
    responseType: 'json'
  })
}
