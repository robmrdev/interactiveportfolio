import { useRef, useLayoutEffect } from 'react';
import './Hero.css'
import gsap from 'gsap'





const Hero = () => {

//     gsap.registerPlugin(SplitText);

// const tl = gsap.timeline(),
//   mySplitText = new SplitText("#quote", { type: "words,chars" }),
//   chars = mySplitText.chars; //an array of all the divs that wrap each character

// gsap.set("#quote", { perspective: 400 });

// console.log(chars);

// tl.from(chars, {
//   duration: 0.8,
//   opacity: 0,
//   scale: 0,
//   y: 80,
//   rotationX: 180,
//   transformOrigin: "0% 50% -50",
//   ease: "back",
//   stagger: 0.01
// });

// const component = useRef(); // a ref for the root-level element; we use selector text for everything else.

//   useLayoutEffect(() => {
    
//     // a gsap.context() lets us use scoped selector text and makes cleanup way easier. See https://greensock.com/docs/v3/GSAP/gsap.context()
//     let ctx = gsap.context(() => {

//       let split = SplitText.create("h1", {type:"chars"});
      
//       gsap.from(split.chars, { // <- selector text, scoped to this component!
//         opacity: 0,
//         y: 100,
//         ease: "back",
//         duration: 1,
//         stagger: 0.1
//       });
      
//       return () => split.revert(); // context cleanup
      
//     }, component); // <- scopes all selector text inside the context to this component (optional, default is document)
    
//     return () => ctx.revert(); // useLayoutEffect cleanup
//   }, []);



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
                        <h3 className='heroText' id="quote" >The web you where looking for its Here!</h3>
                        <div className='heroBottom'>
                            <div className='bottomleft'></div>
                            <div className='heroMiddle'>
                                <p className='heroP'>As you heard. I'm the one you where Looking for. I desing innovative WebFlow websites that show the best of your Brand, you'll Wow your clients and get a way better credibility on your already wonderfull organization.</p>
                                <div className='heroButtons'>
                                    <div className='lightFont heroButton'>Get in Touch</div>
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