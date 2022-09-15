import axios from 'axios'
import router from '@/router'

const my_token ="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";

const api = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000, // indicates 10000ms
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `token ${my_token}` 
  }
})

api.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    let path = '/404'
    if (error.response.status) {
      switch (error.response.status) {
        case 404:
          path = '/404'
          router.push(path)
          break
      }
      return Promise.reject(error.response)
    }
  }
)

export default api
