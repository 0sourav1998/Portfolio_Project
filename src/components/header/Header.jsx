import React from 'react'
import CTA from '../../utils/CTA'
import HeaderSociel from './HeaderSociel'
import me from "../../assets/images.jpg"
import "./header.css"

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Sourav Bhattacherjee</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <h5 className='text-light'>sourav.1998.usb.sb@gmail.com | +918944884221</h5>
        <CTA/>
        <HeaderSociel/>
        <div className="me">
          <img src={me} alt='me'/>
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header