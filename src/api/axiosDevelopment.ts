import axios from 'axios'

export const API_URL = 'https://dev.com'

export const AxiosDevelopmentInstance = axios.create({
  baseURL: API_URL,
})
