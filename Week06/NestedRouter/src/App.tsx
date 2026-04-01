import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import './App.css'
import DashBoard from './components/Dashboard'
import Profile from './components/dashboard/Profile'
import Orders from './components/dashboard/Orders'
import Setting from './components/dashboard/Setting'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import Checkout from './components/Checkout'

function App() {

  return (
      <BrowserRouter>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/products">Product</Link>         
        </nav>
        <Routes>
          <Route path='/'></Route>
          <Route path='/dashboard' element={<DashBoard/>}>
            <Route path='profile' element={<Profile/>}/>
            <Route path='orders' element={<Orders/>}/>
            <Route path='setting' element={<Setting/>}/>
          </Route>
          <Route path='/products' element={<Product/>}/>
          <Route path='/products/:productId' element={<ProductDetail/>}/>
          <Route path='/checkout/:productId' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
