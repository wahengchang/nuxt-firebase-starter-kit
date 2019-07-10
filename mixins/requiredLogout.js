import firebase from '~/utils/firebase'
export default {
  mounted: function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        window.location = '/secret'
      } else {
        console.log('[INFO] No Signin')
      }
    })
  }
}
