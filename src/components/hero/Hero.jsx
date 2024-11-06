import React from 'react'
import './Hero.css'
import intro from '../../assets/bg-intro-desktop.svg'
import mockups from '../../assets/image-mockups.png'

const Hero = () => {
    return (
        <div className='hero-main'>
            <div className='hero'>
                <div className='first-hero'>
                    <h1 className='header-one'>
                        Next generation <br /> digital banking
                    </h1>
                    <p className='first-paragraph'>
                        Take your financial life online. Your Easybank <br className='desktop'/> account <br className='destop-small'/> will be a one-stop-shop for spending, <br className='desktop'/> saving, <br className='destop-small'/> budgeting, investing, and much more.
                    </p>
                    <div>
                        <button className='request-button'>Request Invite</button>
                    </div>
                </div>

                <div className='mockups-div'>
                    <img className='me' src={mockups} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero