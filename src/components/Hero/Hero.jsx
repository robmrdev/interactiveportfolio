import './Hero.css'
import React from 'react';
const Hero = ({setShow}) => {

    const text = "The web you were looking for is Here!";
    const words = text.split(' ');
    let indexCounter = 0;
    return (
        <>
            <header>
                <div>
                    <img src="./logoMedium.png" alt="Robert Mendoza Logo" className='brandLogo' />
                    <p className='lightFont'>Robmr.dev@gmail.com</p>
                </div>
            </header>
            <div className='heroBackground'>
                <div className='heroWrapper darkFont contentWrapper'>
                    <div className='heroContentWrapper'>
                        <div className='topTitleWrapper'>
                            <p className='topTitle'>I'm Robert Mendoza, a&nbsp;</p> <h1 className='topTitle'>Argentina Web Developer & designer.</h1>
                        </div>
                        <h3 className='heroText'>
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
                                                        animationDelay: `${0.05 * indexCounter}s`
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
                            <div className='bottomleft'></div>
                            <div className='heroMiddle'>
                                <p className='heroP'>As you heard. I'm the one you where Looking for. I desing innovative WebFlow websites that show the best of your Brand, you'll Wow your clients and get a way better credibility on your already wonderfull organization.</p>
                                <div className='heroButtons'>
                                    <div className='lightFont heroButton' onClick={()=>setShow(true)}>Get in Touch</div>
                                    <div className='lightFont heroButton'>See portfolio</div>
                                </div>
                            </div>
                            <div className='bottomright'></div>
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