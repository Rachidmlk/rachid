import React, {useRef} from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)



function Cursus(props: any) {
    const imageRef = useRef(null)
    const textRef = useRef(null)
    const containerRef = useRef(null)
    useGSAP(()=>{
        gsap.from(containerRef.current, {
            width: '4500px',
            margin: 'auto',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'bottom 80%',
                scrub: true
              }
        })
        gsap.from(imageRef.current, {
            opacity: 0,
            scrollTrigger: {
                trigger: imageRef.current,
                start: 'top 60%',
                end: 'bottom 50%',
                scrub: true
              }
        })
    })
  return (
    <div ref={containerRef} className='w-[1500px] m-auto flex justify-between items-center px-52 mb-16'>
      <div  >
        <Image ref={imageRef} src={props.src} alt='bio' width={500} height={480} className=''/>
      </div>
      <div className='w-[500px] bg[#e3e3e3] rounded-lg p-2 text-xl text-justify text-sky-950'>
      {props.text}
      </div>
    </div>
  )
}

export default Cursus
