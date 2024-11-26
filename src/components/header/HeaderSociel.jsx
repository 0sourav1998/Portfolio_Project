import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSociel = () => {
  return (
    <div className='header_social'>
        <a href='https://www.linkedin.com/in/sourav-bhattacherjee-9b4b82291/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/0sourav1998' target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSociel