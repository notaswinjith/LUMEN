import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Product from './pages/Product'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <BrowserRouter>
         <Navbar/> 

         <Navbar/>
          <Routes>
           <Route path="/"element={
          
              <Home />}/>
              <Route path="/product"element={
              
              <Product />}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
           
         </Routes>
         <Footer/>

         </BrowserRouter>
      </>
  )
}

export default App