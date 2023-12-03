import { useState } from 'react'
import './App.css'
import RoutesComponent from './components/RoutesComponent/RoutesComponent'
import AdTapes from './components/AdTapes/AdTapes'
import Portfolio from './components/Portfolio/Portfolio'
import LikeWhatYouSee from './components/LikeWhatYouSee/LikeWhatYouSee'
import DesignProcess from './components/DesignProcess/DesignProcess'
import OurTeam from './components/OurTeam/OurTeam'
import YourWebsite from './components/YourWebsite/YourWebsite'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <RoutesComponent/>
      <AdTapes/>
      <Portfolio/>
      <LikeWhatYouSee/>
      <DesignProcess/>
      <OurTeam/>
      <YourWebsite/>
      <Footer/>
    </>
  )
}

export default App
