import React, {useRef} from 'react'
import { Inter, Roboto } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], weight: ['400', '900'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '900'] });
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger)

function Play() {
    const refItem = useRef(null)
     const portraitRef = useRef(null)
    useGSAP(()=>{
      gsap.to(refItem.current, {
        opacity: 1,
        duration: 0.8
      })
      gsap.to(portraitRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: portraitRef.current,
          start: 'top 30%',
          end: 'bottom top',
          scrub: true
        }
      })
      
    })
  return (
    <div ref={refItem} className='w-screen opacity-0'>
    <div className='justify-center flex w-screen'>
    <div className={`flex flex-col items-center pt-[180px] text-black text-3xl ${inter.className} font-bold p-5 text-6xl bg-[linear-gradient(90deg,_rgba(156,193,236,1)_0%,_rgba(136,117,246,1)_35%,_rgba(236,113,136,1)_100%)] bg-clip-text text-transparent `}>
     <Image ref={portraitRef} src='/portrait-colored.jpg' alt='portrait' width={120} height={120} unoptimized className='mb-[-20px] z-[-1]'/>
      <p className='mb-2 max-sm:text-3xl'>Hi, I'm Rachid</p>
      <p className={`text-lg font-normal max-sm:text-sm ${roboto.className} text-[#5D5B5B]`}>Crafting solutions with Words, Code and Trade</p>
      </div>
    </div>
    </div>
  )
}

export default Play
