import React, { useEffect, useRef } from 'react'
import { waveEffect } from '../../utils/utils'
import PortfolioProyects from '../PortfolioProyects/PortfolioProyects'
import './Portfolio.css'

const Portfolio = React.forwardRef((props, ref) => {
    const portfolioRef = useRef(null);

  useEffect(() => {
    // Asigna la referencia del elemento DOM al ref pasado como prop
    if (ref) {
      ref.current = portfolioRef.current;
    }
  }, [ref]);
    return (
        <section className='portfolioWrapper contentWrapper' ref={portfolioRef}>
            {waveEffect('Featured Website Proyects')}
            <p>Behold the evolution I've been through over time! At the start, we're talking basic HTML -
                you know, those 'learning' days, the web equivalent of baby steps. But hang on, the magic's
                coming! Brace yourself for websites born from the ashes, rising each time, stronger and fancier!
                Click those images to unveil the chronicles of my coding escapades – each one crazier than the last!</p>
                <PortfolioProyects/>
        </section>
    )
})

export default Portfolio