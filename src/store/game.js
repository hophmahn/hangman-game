const gameModule = {
  state: {
    guesser: '',
    inProgress: false
  },
  mutations: {
    setGuesser (state, payload) {
      state.guesser = payload
    },
    setInProgress (state, payload) {
      state.inProgress = payload
    }
  },
  getters: {
    guesser (state) {
      return state.guesser
    },
    inProgress (state) {
      return state.inProgress
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
    }
  }
}

export default gameModule
