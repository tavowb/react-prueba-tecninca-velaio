import { firebase, googleAuthProvider } from '../firebase/firebase'
import { types } from '../types/types'

//* *inicio de sesion con Google
export const googlelogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.displayName, user.email))
      })
  }
}

//* *inicio de sesion con Email y password
export const emailAndPLogin = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.displayName, user.email))
      })
  }
}

//* * Registrar en FireBase
export const register = (email, password, username) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: username })

        dispatch(login(user.displayName, user.email))
      })
  }
}

//* * Iniciar sesion
export const login = (id, username, email) => {
  return {
    type: types.login,
    payload: {
      id,
      username,
      email
    }
  }
}

//* * Cerrar sesion */
export const logout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut()

    dispatch({
      type: types.logout
    })
  }
}
