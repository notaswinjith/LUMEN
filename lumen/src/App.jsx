import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
=======
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Product from './pages/Product'
import Footer from './components/Footer'

>>>>>>> 9fb68ab83098c6bd73d4a0eb64fdec5c59deb69f
function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <BrowserRouter>
<<<<<<< HEAD
         <Navbar/> 
=======
         <Navbar/>
          <Routes>
           <Route path="/"element={
          
              <Home />}/>
              <Route path="/product"element={
          
              <Product />}/>
           
         </Routes>
         <Footer/>
>>>>>>> 9fb68ab83098c6bd73d4a0eb64fdec5c59deb69f
         </BrowserRouter>
      </>
  )
}

export default App