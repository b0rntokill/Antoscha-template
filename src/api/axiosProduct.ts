import axios from 'axios'

export const API_URL = 'https://prod.com'

export const AxiosProductInstance = axios.create({
  baseURL: API_URL,
})
