import { RequestService } from './RequestService'

class OxfordDictionaryService {
  static async getLemmas (wordId) {
    try {
      const url = `lemmas/${wordId}`
      const response = await RequestService.get(url)

      return response
    } catch (error) {
      console.log(error)
    }
  }
}

export {
  OxfordDictionaryService
}
