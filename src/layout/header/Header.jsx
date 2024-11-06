import './Header.css'
import logo from '../../assets/logo.svg'
import hamburger from '../../assets/icon-hamburger.svg'
import { useState } from 'react'
import close from '../../assets/icon-close.svg'

const Header = () => {
  const [active, setActive] = useState (false)
  return (
    <div className='header-body'>
      <header>
      <div>
        <img src={logo} alt="logo" />
      </div>

      <ul className='unorder' id='mobile-menu'>
        <li className='li'>Home</li>
        <li className='li'>About</li>
        <li className='li'>Contact</li>
        <li className='li'>Blog</li>
        <li className='li'>Careers</li>
      </ul>
      {/* <ul className='nav-links-mobile'> */}
      <ul className={`nav-links-mobile ${active?"active":""}`} id='mobile-menu'>
        <li className='li'>Home</li>
        <li className='li'>About</li>
        <li className='li'>Contact</li>
        <li className='li'>Blog</li>
        <li className='li'>Careers</li>
      </ul>

      <div className='req-btn'>
        <button className='request-button'>Request Invite</button>
      </div>

      <div className='hamburger'>
        {/* <img src={hamburger} alt="" /> */}
        <img onClick={() => setActive(!active)} src={active? close:hamburger} alt="" />
      </div>
    </header>
    </div>
  )
}

export default Header