import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Product from './pages/Product'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <BrowserRouter>
         <Navbar/>
          <Routes>
           <Route path="/"element={
          
              <Home />}/>
              <Route path="/product"element={
          
              <Product />}/>
           
         </Routes>
         <Footer/>
         </BrowserRouter>
      </>
  )
}

export default App