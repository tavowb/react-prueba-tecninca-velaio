import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AppScreen from '../pages/AppScreen'
import NewScreen from '../pages/NewScreen'
import Wheather from '../pages/Wheather'

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route end path='/app' element={<AppScreen />} />
        <Route end path='/wheater' element={<Wheather />} />
        <Route end path='/news/:id' element={<NewScreen />} />
        <Route path='*' element={<Navigate to='/app' />} />
      </Routes>
    </>
  )
}

export default AppRouter
