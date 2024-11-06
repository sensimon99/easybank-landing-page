import React from 'react'
import './Article.css'
import currency from '../../assets/image-currency.jpg'
import restaurant from '../../assets/image-restaurant.jpg'
import plane from '../../assets/image-plane.jpg'
import confetti from '../../assets/image-confetti.jpg'

const Article = () => {
    return (
        <div className='article'>
            <div className='article-section'>
                <div>
                    <h1 className='latest'>Latest Articles</h1>
                </div>

                <div className='article-cards'>
                    <div  className='article-container'>
                        <img className='image' src={currency} alt="" />
                        <p className='author'>By Claire Robinson</p>
                        <h2 className='offer'>Receive money in any <br className='destop-small'/> currency with no fees</h2>
                        <p className='offer-paragraph'>
                            The world is getting smaller and <br className='destop-small'/> we're becoming more mobile. So <br className='destop-small'/> why should you be forced to only <br className='destop-small'/> receive money in a single ...
                        </p>
                    </div>

                    <div className='article-container'>
                        <img className='image-ii' src={restaurant} alt="" />
                        <p className='author'>By Wilson Hutton</p>
                        <h2 className='offer'>Treat yourself without <br className='destop-small'/> worrying about money</h2>
                        <p className='offer-paragraph'>
                            Our simple budgeting feature <br className='destop-small'/> allows you to separate out your <br className='destop-small'/> spending and set realistic limits <br className='destop-small'/> each month. That means you ...
                        </p>
                    </div>

                    <div className='article-container'>
                        <img className='image-ii' src={plane} alt="" />
                        <p className='author'>By Wilson Hutton</p>
                        <h2 className='offer'>Take your Easybank card <br className='destop-small'/> wherever you go</h2>
                        <p className='offer-paragraph'>
                            We want you to enjoy your travels. <br className='destop-small'/> This is why we don't charge any <br className='destop-small'/> fees on purchases while you're <br className='destop-small'/> abroad. We'll even show you ...
                        </p>
                    </div>

                    <div className='article-container'>
                        <img className='image-ii' src={confetti} alt="" />
                        <p className='author'>By Claire Robinson</p>
                        <h2 className='offer'>Our invite-only Beta <br className='destop-small'/> accounts are now live!</h2>
                        <p className='offer-paragraph'>
                            After a lot of hard work by the <br className='destop-small'/> whole team, we're excited to launch <br className='destop-small'/> our closed beta. It's easy to request <br className='destop-small'/> an invite through the site...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article