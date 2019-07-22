

const state = {
  count: 0
}

const mutations = {
  setCount (state, payload) {
    state.count = payload
  },
  increment (state, payload) {
    state.count += payload
  },
  decrement (state,payload) {
    state.count -= payload
  }
}

const actions = {
  increment: ({commit}, amount) => commit('increment', amount), // {commit} = context.commit
  decrement: ({commit}, amount) => commit('decrement', amount) // {commit} = context.commit
}

const getters = {
  getCount: state => state.count
}

export default {
  state,
  mutations,
  actions,
  getters
}
