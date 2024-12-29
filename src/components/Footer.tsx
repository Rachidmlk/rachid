import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'


function Footer() {
    const handleLinkedin = ()=> {
        window.open('https://www.linkedin.com/in/rachid-melouk-ab8ab7340/')
    }
    const handlex = ()=> {
        window.open('https://x.com/MeloukRach90770')
    }
   
  return (
    <div className='w-screen h-32 bg-slate-900 text-white  items-start p-6'>
        <div className='flex justify-center gap-10 mb-5'>
      <FontAwesomeIcon onClick={handleLinkedin} className='w-10 h-10 hover:cursor-pointer' icon={faLinkedin} />
      <FontAwesomeIcon onClick={handlex} className='w-10 h-10 hover:cursor-pointer' icon={faXTwitter} />
      <a href="mailto:rascid.seoul@gmail.com">
      <FontAwesomeIcon className='w-10 h-10 hover:cursor-pointer' icon={faEnvelope} />
      </a>
      </div>
      <div className='flex justify-center text-sm'>
        Copyright © 2021 Rachid Melouk. All rights reserved.</div>
    </div>
  )
}

export default Footer
