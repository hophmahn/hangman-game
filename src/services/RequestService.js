import { API_URL } from '../config/constants'

class RequestService {
  static async get (url, options = {}, baseUrl = true) {
    try {
      const apiBaseUrl = baseUrl ? API_URL : ''
      const fullUrl = `${apiBaseUrl}/${url}`
      const response = await fetch(fullUrl, options)

      return response.json()
    } catch (error) {
      console.log(error)
    }
  }
}

export {
  RequestService
}
