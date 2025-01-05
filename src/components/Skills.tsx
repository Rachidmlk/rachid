import React, {useRef, useState, useLayoutEffect, useEffect} from 'react'
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
  const list = useRef(null)
  const skill = useRef(null)
  const button = useRef(null)
  const button1 = useRef(null)
  const button2 = useRef(null)
  const button3 = useRef(null)
  const [state, setState] = useState<number>(1)
  const [isSmall, setIsSmall] = useState<boolean>(false)
  const [isHidden, setIsHidden] = useState<boolean>(true)
  useLayoutEffect(()=>{
    if(window.innerWidth < 640) setIsSmall(true)
  }, [isSmall, setIsSmall])
  const handleClick = ()=>{
      if(isHidden) setIsHidden(false)
      if(!isHidden) setIsHidden(true)
  }
  useGSAP(()=>{
    gsap.from(list.current, {
      opacity: 0,
      duration: 1.5
    })
    gsap.from(list.current, {
      y: -20,
      duration: 0.5
    })
    gsap.from(skill.current, {
      opacity: 0,
      duration: 1.5
    })
    gsap.from(skill.current, {
      y: 20,
      duration: 0.5
    })

    // Button Animation
    if(!isHidden){
    gsap.to(button1.current, {
      rotation: 60,
      y: 12,
      duration: 0.5
    })
    gsap.to(button2.current, {
      opacity: 0, 
      duration: 1
    })
    gsap.to(button3.current, {
      rotation: -60,
      y: -12,
      duration: 0.5
    })}
    if(isHidden){
    gsap.to(button1.current, {
      rotation: 0,
      y: 0,
      duration: 0.5
    })
    gsap.to(button2.current, {
      opacity: 1, 
      duration: 1
    })
    gsap.to(button3.current, {
      rotation: 0,
      y: 0,
      duration: 0.5
    })}

  },[isHidden, setIsHidden])
  if(!isSmall){
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
  )}
  return(
    <div  ref={button} className='flex w-screen  h-[700px] gap-12 justify-start flex-col items-center mb-28'>
    <div onClick={handleClick} className='bg-gray-300 rounded-full h-24 w-24 z-10 mb-[-25px] cursor-pointer flex flex-col justify-center gap-2 p-3'>
      <div ref={button1} className='h-1 w-[70px] rounded-lg bg-gray-700'></div>
      <div ref={button2} className='h-1 w-[70px] rounded-lg bg-gray-700'></div>
      <div ref={button3} className='h-1 w-[70px] rounded-lg bg-gray-700'></div>
    </div>
    {!isHidden && <ul ref={list} className='flex flex-col gap-2  text-lg w-44 items-center'>
        <li onClick={()=> {setState(1); handleClick()}} className='hover:text-blue-900 hover:cursor-pointer'>Office Microsoft</li>
        <li onClick={()=> {setState(2);handleClick()}} className='hover:text-blue-900 hover:cursor-pointer'>Trade</li>
        <li onClick={()=> {setState(3);handleClick()}} className='hover:text-blue-900 hover:cursor-pointer'>Languages</li>
        <li onClick={()=> {setState(4);handleClick()}} className='hover:text-blue-900 hover:cursor-pointer'>Java script Dev</li>
        <li onClick={()=> {setState(5);handleClick()}} className='hover:text-blue-900 hover:cursor-pointer'>Soft skills</li>
      </ul>}
    { isHidden && <div ref={skill} className={`${state == 1? 'mt-0': 'mt-36'}`} >
    {state == 1 && <Office />}
    {state == 2 && <Trade />}
    {state == 3 && <Language />}
    {state == 4 && <Js />}
    {state == 5 && <Soft />}
   
    </div>}
  </div>
  )
}

export default Skills
