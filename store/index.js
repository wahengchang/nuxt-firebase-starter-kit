import firebase, {auth, GoogleProvider} from '@/services/fireinit.js'
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
    },
    actions: {
      signInWithGoogle ({commit}) {
        return new Promise((resolve, reject) => {
          auth.signInWithRedirect(GoogleProvider)
          resolve()
        })
      },

      signInWithFacebook ({commit}) {
        return new Promise((resolve, reject) => {
          auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
          resolve()
        })
      },

      signOut ({commit}) {
        auth.signOut().then(() => {
          commit('setUser', null)
        }).catch(error => console.log(error))
      }
    }
  })
}

export default createStore
