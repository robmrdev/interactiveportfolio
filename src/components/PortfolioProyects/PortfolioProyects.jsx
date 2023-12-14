import { useEffect } from 'react';
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

  useEffect(() => {
    const container = containerRef.current
    const element = boxRef.current;
    const right11 = right1.current;
    const right21 = right2.current;
    const right31 = right3.current;
    const right41 = right4.current;
    const right51 = right5.current;
    const path = [
      { x: '45vw', y: '20vh' },
      { x: '25vw', y: '65vh' },
      { x: '45vw', y: '105vh' },
      { x: '25vw', y: '145vh' },
      { x: '45vw', y: '185vh' },
      // { x: '25vw', y: '220vh' },
      // { x: '45vw', y: '230vh' }
    ];

    gsap.to(element, {
      duration: 5,
      motionPath: {
        path: path,
        align: element,
        autoRotate: true,
        // pin: true
      },
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: container,
        start: '-10% 60%',
        end: '85% 60%',
        scrub: true,
        // markers: true,
      },
    });
    const tl = gsap.timeline({
      ease: "expoScale(0.5,7,none)",
      scrollTrigger: {
        trigger: container,
        start: 'top 50%',
        end: '75% 50%',
        scrub: 2,
        duration:500
        // markers: true,
      }
    })
    tl.fromTo(right11, { x: '110vw', opacity: -1 }, { x: '60vw', opacity:1 })
    tl.fromTo(right21, { x: '110vw', opacity: -1 }, { x: '50vw', opacity:1 })
    tl.fromTo(right31, { x: '110vw', opacity: -1 }, { x: '60vw', opacity:1 })
    tl.fromTo(right41, { x: '110vw', opacity: -1 }, { x: '50vw', opacity:1 })
    tl.fromTo(right51, { x: '110vw', opacity: -1 }, { x: '60vw', opacity:1 })
  }, []);




  return (
    <div className='portfolioProyectsWrapper'>
      <div className='portfolioProyectsContainer' ref={containerRef}>
        <img src='./airplane.png' className='box' id='boxId' ref={boxRef} />
        <div className='proyectList'>
          <div className='rightEl' ref={right1} >
            <img src='./uku.jpg' className=' breathAnimationY animation1' />
          </div>
          <div className='rightEl' ref={right2}>
            <img src='./quiz.jpg' className='breathAnimationY animation4' />
          </div>
          <div className='rightEl' ref={right3}>
            <img src='./fakeIkea.jpg' className='breathAnimationY animation2' />
          </div>
          <div className='rightEl' ref={right4}>
            <img src='./oldPortfolio.jpg' className='breathAnimationY animation3' />
          </div>
          <div className='rightEl' ref={right5}>
            <img src='./treeStore.jpg' className='breathAnimationY animation1' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioProyects