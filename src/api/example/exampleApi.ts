import { AxiosInstance } from '../axios'
import { ExamplePosts } from './types'

const ExampleApi = {
  getExamplePosts() {
    return AxiosInstance.get<ExamplePosts>(`/posts`).then(
      (response) => response.data,
    )
  },
}

export default ExampleApi
