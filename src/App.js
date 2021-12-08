import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Brands from './Components/Brands'
import Choose from './Components/Choose'
const App = () => {
  return (
    <div className="try">
      <Navbar/>
      <Hero/>
      <Brands/>
    <Choose/>
    </div>
  )
}

export default App
