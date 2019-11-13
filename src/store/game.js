import { WordService } from '@/services/WordService'

const gameModule = {
  state: {
    guesser: '',
    inProgress: false,
    result: '',
    word: ''
  },
  mutations: {
    setGuesser (state, payload) {
      state.guesser = payload
    },
    setInProgress (state, payload) {
      state.inProgress = payload
    },
    setResult (state, payload) {
      state.result = payload
    },
    setNewWord (state, payload) {
      state.word = payload
    }
  },
  getters: {
    guesser (state) {
      return state.guesser
    },
    inProgress (state) {
      return state.inProgress
    },
    result (state) {
      return state.result
    },
    word (state) {
      return state.word
    }
  },
  actions: {
    async startGame ({ commit }, payload) {
      commit('setGuesser', payload)
      commit('setInProgress', true)
    },
    async stopGame ({ commit }) {
      commit('setGuesser', '')
      commit('setInProgress', false)
    },
    async setResult ({ commit }, payload) {
      commit('setResult', payload)
    },
    async setNewWordForPlayer ({ commit }) {
      const word = await WordService.generateNewValidWord()
      commit('setNewWord', word)
    },
    async setNewWordForComputer ({ commit }, payload) {
      //
    }
  }
}

export default gameModule
