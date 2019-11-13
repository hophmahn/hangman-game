const gameModule = {
  state: {
    guesser: '',
    inProgress: false,
    result: ''
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
    }
  }
}

export default gameModule
