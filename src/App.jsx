import React from 'react'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CategorySection from './components/CategorySection.jsx'
import DealsSection from './components/DealsSection.jsx'

export default function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <CategorySection/>
      <DealsSection/>
    </div>
    
  )
}


