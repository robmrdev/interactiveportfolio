import { useRef, useState } from 'react'
import './App.css'
import AdTapes from './components/AdTapes/AdTapes'
import Portfolio from './components/Portfolio/Portfolio'
import LikeWhatYouSee from './components/LikeWhatYouSee/LikeWhatYouSee'
import DesignProcess from './components/DesignProcess/DesignProcess'
import OurTeam from './components/OurTeam/OurTeam'
import YourWebsite from './components/YourWebsite/YourWebsite'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  const [show, setShow]=useState(false)
  const targetRef = useRef(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <ContactForm show ={show} setShow={setShow}/>
      <Hero setShow={setShow} targetRef={scrollToTarget}/>
      <AdTapes/>
      <Portfolio/>
      <LikeWhatYouSee setShow={setShow}/>
      <DesignProcess/>
      <OurTeam/>
      <YourWebsite setShow={setShow}/>
      <Footer/>
    </>
  )
}

export default App
