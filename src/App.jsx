import { useEffect, useRef, useState } from 'react'
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
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Cave from './components/Cave/Cave'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [show, setShow]=useState(false)
  const targetRef = useRef(null);
  const change1 = useRef(null)
  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // useEffect(()=>{
  //   const changeBG1 = change1.current;

  //   gsap.to(changeBG1, {
  //     scrollTrigger:{
  //       trigger: changeBG1,
  //       markers:true,
  //       start: 'top 50%',
  //       end:'10% 10%',
  //       scrub: true,
  //       onEnter:() => {
  //         gsap.to('body', { duration: 5.0, backgroundColor: '#ff0000'})
  //       },
  //       onLeaveBack:() => {
  //         gsap.to('body', { duration: 5.0, backgroundColor: 'blue'})
  //       }
  //   }})
  // },[])

  useEffect(() => {
    const changeBG1 = change1.current;
  
    gsap.to(changeBG1, {
      scrollTrigger: {
        trigger: changeBG1,
        markers: true,
        start: '-5% 50%',
        end: '10% 50%',
        scrub: true,
        onUpdate: (self) => {
          // Interpola manualmente entre los colores de inicio y fin
          const startColor = { r: 0, g: 0, b: 0 }; // RGB para el color de inicio (blue)
          const endColor = { r: 255, g: 255, b: 255 }; // RGB para el color de fin (rojo)
  
          const interpolatedColor = {
            r: startColor.r + (endColor.r - startColor.r) * self.progress,
            g: startColor.g + (endColor.g - startColor.g) * self.progress,
            b: startColor.b + (endColor.b - startColor.b) * self.progress,
          };
  
          const backgroundColor = `rgb(${interpolatedColor.r}, ${interpolatedColor.g}, ${interpolatedColor.b})`;
  
          gsap.to('body', {
            duration: 0.5, // Ajusta la duración según sea necesario
            backgroundColor: backgroundColor,
          });
        },
      },
    });
  }, []);


  return (
    <>
      <ContactForm show ={show} setShow={setShow}/>
      <Hero setShow={setShow} targetRef={scrollToTarget}/>
      <AdTapes/>
      <Cave/>
      <Portfolio ref={change1}/>
      <LikeWhatYouSee setShow={setShow}/>
      <DesignProcess/>
      <OurTeam/>
      <YourWebsite setShow={setShow}/>
      <Footer/>
    </>
  )
}

export default App
