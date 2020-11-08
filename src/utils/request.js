import axios from 'axios'
import { Message } from 'element-ui'

// create an axios instnce
const service = axios.create({
  headers: {
    'Cache-Control': 'no-cache'
  },
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 1000000000000 
})

// request interceptor
service.interceptors.request.use(
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log(error)
    Message({
      message: 'request failed, please try again',
      type: 'error',
      duration: 2 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
