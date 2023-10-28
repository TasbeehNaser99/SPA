import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/products/Products.jsx'
import Home from './components/home/Home.jsx'
import Navbarr from './components/navbar/Navbarr'
import PageNotFound from './components/pageNotFound/PageNotFound'
import { Routes,Route,BrowserRouter} from 'react-router-dom'
import Footer from './components/footer/Footer'
import About from './components/about/About'
function App() {
  return (
    <>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/About" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
  
  
}

export default App
