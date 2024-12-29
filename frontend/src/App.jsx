import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import Doctors from './pages/Doctors'
import MyAppointments from './pages/MyAppointments'
import Profile from './pages/Profile'
import Appointments from './pages/Appointments'

function App() {

  return (
    <div className='mx-4 sm:mx-[10%]'>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/login' element={<Login />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/about' element={<About />} />
  <Route path='/doctors' element={<Doctors />} />
  <Route path='/doctors/:speciality' element={<Doctors />} />
  <Route path='/my-appointments' element={<MyAppointments />} />
  <Route path='/profile' element={<Profile />} />
  <Route path='/appointment/:docId' element={<Appointments />} />
</Routes>
    </div>
  )
}

export default App
