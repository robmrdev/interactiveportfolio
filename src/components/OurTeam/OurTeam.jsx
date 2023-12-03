import './OurTeam.css'

const OurTeam = () => {
    return (
        <section className='contentWrapper'>
            <h3 className='sectionTitle'>Our Team</h3>
            <p className='sectionDesc'>Wearing different hats is my norm here.</p>
            <div className='teamCardsContainer'>
                <div>
                    <img src="https://dummyimage.com/380x350/000000/fff" alt="" />
                    <div>
                        <h5>President</h5>
                        <p>Robert Mendoza</p>
                    </div>
                </div>
                <div>
                    <img src="https://dummyimage.com/380x350/000000/fff" alt="" />
                    <div>
                        <h5>Sales</h5>
                        <p>Robert Mendoza</p>
                    </div>
                </div>
                <div>
                    <img src="https://dummyimage.com/380x350/000000/fff" alt="" />
                    <div>
                        <h5>Creative Director</h5>
                        <p>Robert Mendoza</p>
                    </div>
                </div>
                <div>
                    <img src="https://dummyimage.com/380x350/000000/fff" alt="" />
                    <div>
                        <h5>Lead Web Developer</h5>
                        <p>Robert Mendoza</p>
                    </div>
                </div>
                <div>
                    <img src="https://dummyimage.com/380x350/000000/fff" alt="" />
                    <div>
                        <h5>Intern</h5>
                        <p>Robert Mendoza (He's new)</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTeam