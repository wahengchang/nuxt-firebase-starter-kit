import firebase from '~/utils/firebase'
import userParser from '~/utils/dao/userParser'
export default {
  asyncData: function() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(function(_user) {
        if (_user) {
          console.log('[INFO] Signin user: ', _user)
          const user = userParser(_user)
          return resolve({ user })
        } else {
          window.location = '/login'
        }
      })
    })
  }
}
