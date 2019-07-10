import * as firebase from 'firebase'
import 'firebase/auth/dist/index.cjs'
import 'firebase/firestore/dist/index.cjs'
import 'firebase/database/dist/index.cjs'

const config = {
  apiKey: process.env.FIREBASE_API_KEY || window.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || window.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL || window.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID || window.FIREBASE_PROJECT_ID,
  messagingSenderId:
    process.env.FIREBASE_MESSAGEING_ID || window.FIREBASE_MESSAGEING_ID,
  appId: process.env.FIREBASE_APP_ID || window.FIREBASE_APP_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const auth = firebase.auth()
export const DB = firebase.database()
export default firebase
