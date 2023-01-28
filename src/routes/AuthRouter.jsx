import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { firebase } from '../firebase/firebase'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginScreen from '../pages/LoginScreen'
import RegisterScreen from '../pages/RegisterScreen'
import { login } from '../actions/auth'
import AppRouter from './AppRouter'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'

const AuthRouter = () => {
  const dispatch = useDispatch()
  const [log, setLog] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // login
        dispatch(login(user.displayName, user.email))
        setLog(true)
        // TODO: MANEJAR ERRORES DE LOGIN
      } else {
        setLog(false)
      }
    })

    return () => {}
  }, [dispatch])

  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={
            <PublicRouter log={log}>
              <LoginScreen />
            </PublicRouter>
          }
        />

        <Route
          path='/register'
          element={
            <PublicRouter log={log}>
              <RegisterScreen />
            </PublicRouter>
          }
        />

        <Route
          path='*'
          element={
            <PrivateRouter log={log}>
              <AppRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </Router>
  )
}

export default AuthRouter
