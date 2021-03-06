import axios from 'axios'

const http = axios.create({
  baseURL: '/api/movie',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

http.interceptors.request.use(
  (config) => {
    const newConfig = Object.assign({}, config)

    newConfig.params = {
      apikey: '0b2bdeda43b5688921839c8ecb20399b',
      ...config.params
    }

    return newConfig
  },
  error => Promise.reject(error)
)

http.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }

    return response.data
  },
  error => Promise.reject(error)
)

export default http
