import {BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom'
import './App.css'
import DashBoard from './components/Dashboard'
import Profile from './components/dashboard/Profile'
import Orders from './components/dashboard/Orders'
import Setting from './components/dashboard/Setting'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/dashboard" replace/>}></Route>
          <Route path='/dashboard' element={<DashBoard/>}>
            <Route path='profile' element={<Profile/>}/>
            <Route path='orders' element={<Orders/>}/>
            <Route path='setting' element={<Setting/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
