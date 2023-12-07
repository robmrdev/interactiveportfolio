import {useEffect } from 'react';
import './PortfolioProyects.css'
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(MotionPathPlugin)

const PortfolioProyects = () => {

    const containerRef = useRef(null)
    const boxRef = useRef(null);
    const right1 = useRef(null);
    const right2 = useRef(null);
    const right3 = useRef(null);
    const right4 = useRef(null);
    const right5 = useRef(null);
    const right6 = useRef(null);

  useEffect(() => {
    const container = containerRef.current
    const element = boxRef.current;
    const right11 = right1.current
    const right21 = right2.current
    const right31 = right3.current
    const right41 = right4.current
    const right51 = right5.current
    const right61 = right6.current
    const path = [
      { x: '5vw', y: '0vh' },
      { x: '45vw', y: '30vh' },
      { x: '25vw', y: '60vh' },
      { x: '45vw', y: '90vh' },
      { x: '25vw', y: '120vh' },
    //   { x: '45vw', y: '100vh' },
    //   { x: '25vw', y: '120vh' }
    ];

    gsap.to(element, {
      duration: 10, // Ajusta según sea necesario
      motionPath: {
        path: path,
        align: element,
        autoRotate: true,
      },
      ease: 'linear',
      scrollTrigger: {
        trigger: container,
        start: 'top 60%',
        end: '70% 40%',
        scrub: 5,
        markers: true
        // pin: true
      },
    });
    const tl = gsap.timeline({scrollTrigger: {
        trigger: container,
        start: 'top 60%',
        end: '70% 40%',
        scrub: 5,
        markers: true
        // pin: true
      }})
    tl.fromTo(right11, {x: '110vw'}, {x:'60vw'})
    tl.fromTo(right21, {x: '110vw'}, {x:'60vw'})
    tl.fromTo(right31, {x: '110vw'}, {x:'60vw'})
    tl.fromTo(right41, {x: '110vw'}, {x:'60vw'})
    tl.fromTo(right51, {x: '110vw'}, {x:'60vw'})
    tl.fromTo(right61, {x: '110vw'}, {x:'60vw'})
  }, []);

    return (
        <div className='portfolioProyectsWrapper'>
            <div className='portfolioProyectsContainer' ref={containerRef}>
                <div className='box' id='boxId' ref={boxRef}></div>
                <div className='rightEl' ref={right1}></div>
                <div className='rightEl' ref={right2}></div>
                <div className='rightEl' ref={right3}></div>
                <div className='rightEl' ref={right4}></div>
                <div className='rightEl' ref={right5}></div>
                <div className='rightEl' ref={right6}></div>
            </div>
        </div>
    )
}

export default PortfolioProyects