import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'xxx',
    authDomain: 'xxx.firebaseapp.com',
    databaseURL: 'https://xxx.firebaseio.com',
    projectId: 'xxx',
    storageBucket: 'xxx.appspot.com',
    messagingSenderId: 'xxx'
  })
}

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export default firebase
