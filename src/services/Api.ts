import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data', // application/x-www-form-urlencoded      multipart/form-data       application/json
    Accept: '*/*'
  }
})

api.interceptors.response.use(
  response => {
    // Do something with response data

    return response
  },
  async error => {
    console.log('Connection error', error)
    return await Promise.reject(error)
  }
)

api.interceptors.request.use(
  async config => {
    /* const state = store.getState()
    const { user } = state.user
    if (user && user.access_token) {
      // config.headers.Authorization = `Bearer ${user.access_token}`
    } */
    return await Promise.resolve(config)
  },
  async error => {
    return await Promise.reject(error)
  }
)

export default api
