import React, {useRef} from 'react'
import { Inter, Roboto, Iceberg } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], weight: ['400', '900'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '900'] });
const iceBerg = Iceberg({ subsets: ['latin'], weight: ['400'] });
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Cursus from './Cursus';
import Skills from './Skills';
import Footer from './Footer';
gsap.registerPlugin(ScrollTrigger)

function Work() {
    const text = 'successfully graduated from high school with a specialization in Science, achieving a commendable final degree of 15.89 out of 20'
    const text2 = 'Completed a six-month internship at NAFTAL, specifically in the GPL (Gas Petroleum Liquefied) branch, where I gained invaluable practical experience in the intricate processes of importation. This experience not only enhanced my technical skills but also deepened my understanding of the operational challenges and strategies in international trade and logistics. especially in terms of importation'
    const text1 = 'I graduated with a BTS diploma (Brevet de Technicien Supérieur) in International Trade, earning the distinction of "Très Bien" (Very Good). My studies covered a wide range of fields, including logistics, insurance, customs regulations, international transit, and trade negotiations, also market analysis, international marketing strategies, and supply chain management'
    const refItem = useRef(null)
    const carrerRef = useRef(null)
    const portraitRef = useRef(null)
    const skillsRef = useRef(null)
    useGSAP(()=>{
      gsap.to(refItem.current, {
        opacity: 1,
        duration: 0.8
      })
      gsap.to(carrerRef.current, {
        color: '#3b3a3a',
        y: '-500px',
        scrollTrigger: {
          trigger: carrerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
      gsap.to(skillsRef.current, {
        color: '#3b3a3a',
        y: '-250px',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
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
    <div className={`flex flex-col items-center pt-[180px] text-black text-3xl ${inter.className} font-bold p-5 text-6xl bg-[linear-gradient(90deg,_rgba(158,158,167,1)_0%,_rgba(130,130,133,1)_47%,_rgba(50,50,53,1)_100%)] bg-clip-text text-transparent `}>
      <Image ref={portraitRef} src='/portrait.jpg' alt='portrait' width={120} height={120} unoptimized className='mb-[-20px] z-[-1]'/>
      <p className='mb-2'>Hi, I'm Rachid</p>
      <p className={`text-lg font-normal ${roboto.className} text-[#929090]`}>Crafting solutions with Words, Code and Trade</p>
      </div>
    </div>
    <h1 ref={carrerRef} className={` w-screen flex justify-center text-9xl text-[#dcd8d8] mt-[438px] ${iceBerg.className}`}>Career</h1>
    <Cursus src='/biology.jpg' text={text}/>
    <Cursus src='/commerce.jpg' text={text1}/>
    <Cursus src='/naftal.jpg' text={text2}/>
    <h1 ref={skillsRef} className={` w-screen flex justify-center text-9xl text-[#dcd8d8] mt-[350px] ${iceBerg.className}`}>Skills</h1>
    <Skills />
    <Footer />
    
    </div>
  )
}

export default Work
