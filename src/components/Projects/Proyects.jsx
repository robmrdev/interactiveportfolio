import './Proyects.css'
import React, { useEffect, useRef } from 'react'
import { waveEffect } from '../../utils/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Proyects = () => {
  gsap.registerPlugin(ScrollTrigger);
  const component = useRef()
  const wrapperRef = useRef()


  useEffect(() => {
    const wrapper = wrapperRef.current;
    let ctx = gsap.context(() => {
      let sections = gsap.utils.toArray(".portfolioPanel");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + wrapper.offsetWidth,
          markers: true
        }
      })
    }, [component])
    return () => ctx.revert();
  })

  return (
    <section className='caveWrapper' ref={component}>
      <div className='caveContainer' ref={wrapperRef}>
        <img src="./cave/caveBg.jpg" alt="" className='caveBg' />
        <img src="./cave/topCaveVignetteMargin.png" alt="" className='topCave' />
        <img src="./cave/bottomCave.png" alt="" className='bottomCave' />
        <img src="./cave/caveCharacter.png" alt="" className='caveCharacter' />
        <div className='portfolioWrapper'>
          <div className='portfolioPanel'>
            {waveEffect('Featured Website Proyects')}
            <p>Behold the evolution I've been through over time! At the start, we're talking basic HTML -
              you know, those 'learning' days, the web equivalent of baby steps. But hang on, the magic's
              coming! Brace yourself for websites born from the ashes, rising each time, stronger and fancier!
              Click those images to unveil the chronicles of my coding escapades – each one crazier than the last!</p>
          </div>
          <div className="portfolioPanel">
            <img src='./uku.jpg' />
          </div>
          <div className="portfolioPanel">
            <img src='./quiz.jpg' className='breathAnimationY animation4' />
          </div>
          <div className="portfolioPanel">
            <img src='./fakeIkea.jpg' className='breathAnimationY animation2' />
          </div>
          <div className="portfolioPanel">
            <img src='./oldPortfolio.jpg' className='breathAnimationY animation3' />
          </div>
          <div className="portfolioPanel">
            <img src='./treeStore.jpg' className='breathAnimationY animation1' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proyects