import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='contentWrapper'>
                <div className='footerInfo'>
                    <img src="./logoMedium.png" alt="" srcset="" className='brandLogo' />
                    <p>Robert Mendoza is an Argentina-based Web Developer, Designer and Freelancer . Pleased to make your acquaintance</p>
                    <div className='contactFooter'>
                        <div>
                            <strong>Email</strong>
                            <p>Robmr.dev@gmail.com</p>
                        </div>
                        <div>
                            <strong>Github</strong>
                            <p>github.com/robmrdev</p>
                        </div>
                        <div>
                            <strong>Linkedin</strong>
                            <p>linkedin.com/in/ramr-dev/</p>
                        </div>
                    </div>
                </div>
                <p>Robert Mendoza Copyright © 2023 All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer