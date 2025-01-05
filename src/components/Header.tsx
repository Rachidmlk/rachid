'use client'
import React, { useState, useRef } from 'react'
import { Noto_Serif } from 'next/font/google'
import { Lobster } from 'next/font/google'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
type Logo = 'Rachid' | 'Melouk'
const dmSerif = Noto_Serif({weight: ['400', '700'], subsets: ['latin']})
const knewave = Lobster({weight: ['400'], subsets: ['latin']})

function Header(props: any) {
    const refItem = useRef(null)
    const [logo, setLogo] = useState<Logo>('Melouk')
    const handleClick = ()=>{
        if(logo == 'Melouk'){
            setLogo('Rachid')
            props.setWork(false) 
        }
        else {
            setLogo('Melouk')
            props.setWork(true) 

        }
    }
    useGSAP(()=>{
      gsap.to(refItem.current, {
        opacity: 1,
        duration: 1
      })
    }, [logo, setLogo])
  return (
    <div onClick={handleClick} className='pt-8 h-20 hover:cursor-pointer max-sm:w-[430px] w-[1050px] m-auto flex justify-between items-center'>
      <Image src='/R.png' alt='logo' width={100} height={100}/>
      <div className='w-[100px] flex justify-center'>
      {logo == 'Melouk' && 
      <div ref={refItem} className={`opacity-0 text-black w-fit text-3xl ${dmSerif.className} font-bold p-5 bg-[linear-gradient(90deg,_rgba(136,136,139,1)_0%,_rgba(44,44,48,1)_100%)] bg-clip-text text-transparent `}>
        Melouk
      </div>
      }
      {logo == 'Rachid' && 
      <div  ref={refItem} className={`opacity-0 text-black w-fit text-3xl ${knewave.className} font-bold p-5 bg-[linear-gradient(90deg,_rgba(156,193,236,1)_0%,_rgba(136,117,246,1)_35%,_rgba(236,113,136,1)_100%)] bg-clip-text text-transparent `}>
        Rachid
      </div>
      }
      </div>
    </div>
  )
}

export default Header
