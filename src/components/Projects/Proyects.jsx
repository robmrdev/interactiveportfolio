import './Proyects.css'
import React, { useEffect, useRef } from 'react'
import { waveEffect } from '../../utils/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Proyects = () => {


  return (
    <section className='portfolioOuter'>
      <div className='portfolioVignette'></div>
      <div className='stars'></div>
      <div className='portfolioWrapper'>
        <div className="projectsMain">
          {waveEffect('Featured Website Proyects')}
          <p className="textGlow">Behold the evolution I've been through over time! At the start, we're talking basic HTML -
            you know, those 'learning' days, the web equivalent of baby steps. But hang on, the magic's
            coming! Brace yourself for websites born from the ashes, rising each time, stronger and fancier!
            Click those images to unveil the chronicles of my coding escapades – each one crazier than the last!</p>
        </div>
        <div className="projectItem breathAnimationY animation1">
          <img src="./topModal.png" alt="" className="topModal" />
          <img src="./bottomModal.png" alt="" className="bottomModal" />
          <img src="./quotes.png" alt="" className="quotes" />
          <div>
            <img src='./uku.jpg' className="projectPic" />
            <div>
              <strong>Uku and Coffee</strong>
              <p>Hobbie Page</p>
            </div>
          </div>
        </div>
        <div className="projectItem breathAnimationY animation4">
          <img src="./topModal.png" alt="" className="topModal" />
          <img src="./bottomModal.png" alt="" className="bottomModal" />
          <img src="./quotes.png" alt="" className="quotes" />
          <div>
            <img src='./quiz.jpg' className="projectPic" />
            <div>
              <strong>What Hogwarts House do you belong?</strong>
              <p>Interactive quiz</p>
            </div>
          </div>
        </div>
        <div className="projectItem breathAnimationY animation2">
          <img src="./topModal.png" alt="" className="topModal" />
          <img src="./bottomModal.png" alt="" className="bottomModal" />
          <img src="./quotes.png" alt="" className="quotes" />
          <div>
            <img src='./fakeIkea.jpg' className="projectPic" />
            <div>
              <strong>Ikea Clone Page</strong>
              <p>Clone Ecommerce Page</p>
            </div>
          </div>
        </div>
        <div className="projectItem breathAnimationY animation3">
          <img src="./topModal.png" alt="" className="topModal" />
          <img src="./bottomModal.png" alt="" className="bottomModal" />
          <img src="./quotes.png" alt="" className="quotes" />
          <div>
            <img src='./oldPortfolio.jpg' className="projectPic" />
            <div>
              <strong>Portfolio Template</strong>
              <p>Simpler template of a portfolio</p>
            </div>
          </div>
        </div>
        <div className="projectItem breathAnimationY animation1">
          <img src="./topModal.png" alt="" className="topModal" />
          <img src="./bottomModal.png" alt="" className="bottomModal" />
          <img src="./quotes.png" alt="" className="quotes" />
          <div>
            <img src='./treeStore.jpg' className="projectPic" />
            <div>
              <strong>Tree Store</strong>
              <p>Ecommerce with Backend functionality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proyects