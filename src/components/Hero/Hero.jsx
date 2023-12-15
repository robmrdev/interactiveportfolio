import './Hero.css'
import React from 'react';
import { useEffect, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';


const Hero = ({ setShow, targetRef }) => {

    const text = "The web you were looking for is Here!";
    const words = text.split(' ');
    let indexCounter = 0;

    let timeline = gsap.timeline();

    const [mouseOffset, setMouseOffset] = useState({ offsetX: 0, offsetY: 0 });
    const [clientX, setClientX] = useState()
    const [rotateDegree, setRotateDegree] = useState(0)
    useLayoutEffect(() => {
        const parallaxEl = document.querySelectorAll('.parallax')

        let ctx = gsap.context(() => {
            Array.from(parallaxEl).filter(e => !e.classList.contains('text')).forEach((e) => {
                const fromEl = e.getAttribute('data-fromdata');

                let timeline = gsap.timeline();
                timeline.to(".heroContentWrapper", {
                    opacity: 1
                }),
                timeline.from(e, {
                    top: `${fromEl}`,
                    duration: 4,
                    ease: "power3.out"
                })
            })
        });

        return () => ctx.revert()
    }, [])
    useEffect(() => {
        const heroSection = document.querySelector('.heroBackground');

        const handleMouseMove = (event) => {
            if (timeline.isActive()) return;
            const { clientX, clientY } = event;
            const boundingBox = heroSection.getBoundingClientRect();
            const centerX = boundingBox.left + boundingBox.width / 2;
            const centerY = boundingBox.top + boundingBox.height / 2;
            const offsetX = clientX - centerX;
            const offsetY = clientY - centerY;
            let newRotateDegree = ((offsetX / (window.innerWidth / 2)) * 20)
            setRotateDegree(newRotateDegree)
            setClientX(clientX)
            setMouseOffset({ offsetX, offsetY });
        };

        heroSection.addEventListener('mousemove', handleMouseMove);

        return () => {
            heroSection.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach((el) => {
            let speedx = el.dataset.speedx;
            let speedy = el.dataset.speedy;
            let speedz = el.dataset.speedz;
            let rotateSpeed = el.dataset.rotation;

            const isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
            let zValue = (clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
            el.style.transform = ` rotateY(${rotateDegree * rotateSpeed}deg) translateZ(${zValue * speedz}px) translateX(calc( ${-mouseOffset.offsetX * speedx}px)) translateY(calc(${mouseOffset.offsetY * speedy}px))`;
        });
    }, [mouseOffset]);


    return (
        <>
            <header>
                <div>
                    <img src="./logoMedium.png" alt="Robert Mendoza Logo" className='brandLogo' />
                    <p className='lightFont'>Robmr.dev@gmail.com</p>
                </div>
            </header>
            <div className='heroBackground'>
                <div className='heroVignette'></div>
                <img src="./hero/bg5.webp" alt="" srcset="" data-fromdata="4%" data-rotation="0" data-speedx="0.2" data-speedy="0.1" data-speedz="0" className='backgroundImg parallax' />
                <img src="./hero/path3.png" alt="" srcset="" data-fromdata="300%" data-rotation="0.2" data-speedx="0.027" data-speedy="0.018" data-speedz="0.53" className='leftMiddle parallax' />
                <img src="./hero/rightPath.png" alt="" srcset="" data-fromdata="300%" data-rotation="0.05" data-speedx="0.04" data-speedy="0.025" data-speedz="0.32" className='rightFront parallax' />
                <div className='heroWrapper darkFont contentWrapper'>
                    <div data-rotation="0.11" data-speedx="0.02" data-speedy="0.02" data-speedz="0.02" className='heroContentWrapper parallax'>
                        <div className='topTitleWrapper textGlow'>
                            <p className='topTitle textGlow'>I'm Robert Mendoza, an&nbsp;</p>
                            <h1 className='topTitle textGlow'>Argentina Web Developer & designer.</h1>
                        </div>
                        <h3 className='heroText textGlow'>
                            {words.map((word, wordIndex) => (
                                <React.Fragment key={wordIndex}>
                                    {wordIndex > 0 && <span className="wordSpace">&nbsp;</span>}
                                    <div className='heroWord'>
                                        {word.split('').map((letter, letterIndex) => {
                                            indexCounter += 1;
                                            return (
                                                <div
                                                    key={letterIndex}
                                                    className='heroCharacter'
                                                    style={{
                                                        animationDelay: `${
                                                            wordIndex === 0 && letterIndex === 0 ? 1.5 : (0.05 * indexCounter) + 1.5
                                                          }s`
                                                        // animationDelay: `${0.05 * indexCounter}s`
                                                    }}
                                                >
                                                    {letter === ' ' ? '\u00A0' : letter}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </React.Fragment>
                            ))}
                        </h3>
                        <div className='heroBottom'>
                            <div className='heroMiddle'>
                                <p className='heroP textGlow'>As you heard. I'm the one you where Looking for. I desing innovative websites that show the best of your Brand, you'll Wow your clients and get a way better credibility on your already wonderfull organization.</p>
                                <div className='heroButtons'>
                                    <div className='lightFont heroButton' onClick={() => setShow(true)}>Get in Touch</div>
                                    <div className='lightFont heroButton' onClick={targetRef}>See portfolio</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero



{/* <h3 className='heroText'>
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          {wordIndex > 0 && <span className="wordSpace">&nbsp;</span>}
          <span className='heroWord'>
            {word.split('').map((letter, letterIndex) => (
              <span
                key={letterIndex}
                className='heroCharacter'
                style={{
                  opacity: 0,
                  transform: 'translateY(10px)',
                  animation: 'appear 0.5s ease-in-out forwards',
                  animationDelay: `${0.1 * (wordIndex + 1) + 0.1 * (letterIndex + 1)}s`
                }}
              >
                {letter}
              </span>
            ))}
          </span>
        </React.Fragment>
      ))}
    </h3> */}