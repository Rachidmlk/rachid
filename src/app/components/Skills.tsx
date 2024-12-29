import React, {useRef, useState} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import Office from './skills/Office'
import Language from './skills/Language'
import Js from './skills/Js'
import Soft from './skills/Soft'
import Trade from './skills/Trade'
gsap.registerPlugin(ScrollTrigger)

function Skills() {
  const [state, setState] = useState<number>(1)
  
  return (
    <div  className='flex w-screen px-40 h-[700px] justify-start items-center mb-52'>
      <div className='border-solid border-r-2 border-black h-64 flex items-center mr-[350px]'>
        <ul className='flex flex-col gap-2 p-6 text-xl hi'>
          <li onClick={()=> {setState(1)}} className='hover:text-blue-900 hover:cursor-pointer'>Office Microsoft</li>
          <li onClick={()=> {setState(2)}} className='hover:text-blue-900 hover:cursor-pointer'>Trade</li>
          <li onClick={()=> {setState(3)}} className='hover:text-blue-900 hover:cursor-pointer'>Languages</li>
          <li onClick={()=> {setState(4)}} className='hover:text-blue-900 hover:cursor-pointer'>Java script Dev</li>
          <li onClick={()=> {setState(5)}} className='hover:text-blue-900 hover:cursor-pointer'>Soft skills</li>
        </ul>
      </div>
      {state == 1 && <Office />}
      {state == 2 && <Trade />}
      {state == 3 && <Language />}
      {state == 4 && <Js />}
      {state == 5 && <Soft />}
    </div>
  )
}

export default Skills
