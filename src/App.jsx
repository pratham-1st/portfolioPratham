import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Mywork from './components/Mywork/Mywork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App