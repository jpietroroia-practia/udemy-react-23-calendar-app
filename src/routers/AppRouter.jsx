import React from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import LoginScreen from '../components/auth/LoginScreen'
import CalendarScreen from '../components/calendar/CalendarScreen'

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route
            path='/login'
            element={<LoginScreen />}
          />
          <Route
            path='/calendar'
            element={<CalendarScreen />}
          />
           <Route
            path='/*'
            element={<Navegar/>}
          >
          </Route>
          
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default AppRouter

 const Navegar = () => {
  return (
    <Navigate to="/login"/>
  )
}


