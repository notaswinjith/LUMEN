import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

import { BrowserRouter } from 'react-router-dom'
// import Product_details from './pages/Product_details'
import Wishlist from './pages/Wishlist'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <BrowserRouter>
         <Navbar/>
         <Wishlist/>
         
         </BrowserRouter>
      </>
  )
}

export default App
