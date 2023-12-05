import { waveEffect } from '../../utils/utils'
import PortfolioProyects from '../PortfolioProyects/PortfolioProyects'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <section className='portfolioWrapper contentWrapper'>
            {waveEffect('Featured Website Proyects')}
            {/* <h2 className='sectionTitle'>Featured Website Proyects</h2> */}
            <p>Behold the evolution I've been through over time! At the start, we're talking basic HTML -
                you know, those 'learning' days, the web equivalent of baby steps. But hang on, the magic's
                coming! Brace yourself for websites born from the ashes, rising each time, stronger and fancier!
                Click those images to unveil the chronicles of my coding escapades – each one crazier than the last!</p>
            <div className='portfolioItemsWrapper'>
                <PortfolioProyects/>
            </div>
        </section>
    )
}

export default Portfolio