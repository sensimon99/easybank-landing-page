import React from 'react'
import './Section.css'
import online from '../../assets/icon-online.svg'
import budgeting from '../../assets/icon-budgeting.svg'
import onboarding from '../../assets/icon-onboarding.svg'
import api from '../../assets/icon-api.svg'

const Section = () => {
    return (
        <div className='section-one'>
            <div className='section'>
                <div className='why-section'>
                    <h1 className='why'>Why choose <br className='why-br'/> Easybank?</h1>
                    <p className='section-paragraph'>We leverage Open Banking to turn your bank <br className='mine'/>account into your financial hub. <br className='me-ii'/> Control your <br className='mine'/> finances like never before. </p>
                </div>

                <div className='flexs'>
                    <div className='grids'>
                        <img className='mobile-img' src={online} alt="" />
                        <h2 className='h-two'>Online Banking</h2>
                        <p className='p-two'>
                            Our modern web and mobile <br className='destop-small'/> applications allow you to keep <br className='destop-small'/> track of your finances wherever you <br className='destop-small'/> are in the world.
                        </p>
                    </div>

                    <div className='grids'>
                        <img className='mobile-img' src={budgeting} alt="" />
                        <h2 className='h-two'>Simple Budgeting</h2>
                        <p className='p-two'>
                            See exactly where your money <br className='destop-small'/> goes each month. Receive <br className='destop-small'/> notifications when you're close to <br className='destop-small'/> hitting your limits.
                        </p>
                    </div>

                    <div className='grids'>
                        <img className='mobile-img' src={onboarding} alt="" />
                        <h2 className='h-two'>Fast Onboarding</h2>
                        <p className='p-two'>
                            We don't do branches. Open your <br className='destop-small'/> accout in minutes online and start <br className='destop-small'/> taking control of your finances <br className='destop-small'/> right away
                        </p>
                    </div>

                    <div className='grids'>
                        <img className='mobile-img' src={api} alt="" />
                        <h2 className='h-two'>Open API</h2>
                        <p className='p-two'>
                        Manage your savings, investments, <br className='destop-small'/> pension, and much more from one <br className='destop-small'/> account. Tracking your money has <br className='destop-small'/> never been easier.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section