import { SourceType } from '../../appTypes'
import { AxiosDevelopmentInstance } from '../axiosDevelopment'
import { AxiosProductInstance } from '../axiosProduct'

const ExampleApi = {
  getPost(source: string | undefined, id: string): any {
    console.log(source, id)

    if (source === SourceType.Development) {
      return AxiosDevelopmentInstance.get<any>(`/${id}`).then(
        (response) => response.data,
      )
    }

    if (source === SourceType.Product) {
      return AxiosProductInstance.get<any>(`/${id}`).then(
        (response) => response.data,
      )
    }

    console.error('Missing Source Type')

    return {}
  },
}

export default ExampleApi
