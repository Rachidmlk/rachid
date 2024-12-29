import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TextPlugin from 'gsap/TextPlugin'
gsap.registerPlugin(TextPlugin)

function Loader() {
    const loader = useRef(null)
    const animation = useRef(null)
    const tl = gsap.timeline()
    const words = ['.مرحبا','.Ciao', '.こんにちは','.नमस्ते', '.Hallo']
    useGSAP(()=>{
        tl.to(animation.current, {
            duration: 1,
            opacity: 1,
            delay: 0
        })
        words.forEach((word)=>{
            tl.to(animation.current, {
                duration: 0.4,
                text: word,
                ease: 'power2.inOut',
                delay: 0
            })
        })
        tl.to(loader.current, {
            y: '-100%',
            duration: 2,
            delay: 0.1,
            ease: 'expo.out'
        })
    })

  return (
    <div ref={loader} className='w-screen h-screen bg-[#1C1D20] flex justify-center items-center z-10 absolute'>
      <div ref={animation} className='text-white text-6xl opacity-0'>
      .Hello
      </div>
    </div>
  )
}

export default Loader
