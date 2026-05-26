import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Order from './components/Order'
import Footer from './components/Footer'
import OurWork from './components/OurWork'
import Design from './components/Design'
import ContactForm from './components/ContactForm'
import Reviews from './components/Reviews'

const App = () => {
  return (
   <>
   <header>
      <Navbar />
   </header>
   <main>
     <Hero />
     <About/>
     <Design/>
     <OurWork/>
     <Services />
     <Order />
     <Reviews />
     <ContactForm/>
   </main>
   <footer>
     <Footer/>
   </footer>
   </>
  )
}

export default App

