import { RequestService } from './RequestService'
import { getRandomNumber } from '../helpers/number'
import { OxfordDictionaryService } from './OxfordDictionaryService'

class WordService {
  static words = []

  static async fetchWords () {
    return RequestService.get('words.json', {}, false)
  }

  static async setWords () {
    const words = await WordService.fetchWords()
    WordService.words = [...words.data]
  }

  static async filterByWordLength (length) {
    return WordService.words.filter((item) => item.word.length <= length)
  }

  static async generateNewWord () {
    if (WordService.words.length === 0) {
      await WordService.setWords()
    }

    const upTo6Letters = await WordService.filterByWordLength(6)
    const randomIndex = getRandomNumber(0, upTo6Letters.length)
    const newWord = upTo6Letters[randomIndex].word

    return newWord
  }

  static async isNounAndValid (word) {
    return OxfordDictionaryService.getLemmas(word)
  }

  static async generateNewValidWord () {
    let validWord
    let isValid = false

    do {
      validWord = await WordService.generateNewWord()
      isValid = await WordService.isNounAndValid(validWord)
    } while (isValid === false)

    return validWord
  }
}

export {
  WordService
}
