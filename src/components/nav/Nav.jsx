import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import "./nav.css"

const Nav = () => {
  const [active,setActive] = useState("#")
  return (
    <nav>
      <a href='#' className={`${active === "#" ? "active" : " "}`}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActive("#about")} className={`${active === "#about" ? "active" : " "}`}><AiOutlineUser/></a>
      <a href='#service' onClick={()=>setActive("#service")} className={`${active === "#service" ? "active" : " "}`}><RiServiceLine/></a>
      <a href='#contact' onClick={()=>setActive("#contact")} className={`${active === "#contact" ? "active" : " "}`}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav