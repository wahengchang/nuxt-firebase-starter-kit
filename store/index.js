import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      sidebar: false,
      user: null
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user
      }
    },
    mutations: {
      toggleSidebar (state) {
        state.sidebar = !state.sidebar
      },
      setUser (state, payload) {
        state.user = payload
      }
    }
  })
}

export default createStore
