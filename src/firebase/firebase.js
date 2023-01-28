// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCwDg-9u3THbc62z3aX55hENqAOmJipDBg',
  authDomain: 'react-noticias-velaio.firebaseapp.com',
  projectId: 'react-noticias-velaio',
  storageBucket: 'react-noticias-velaio.appspot.com',
  messagingSenderId: '1023216486682',
  appId: '1:1023216486682:web:b173ac21080e34ffb5c4a3'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, db, googleAuthProvider }
