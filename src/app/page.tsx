'use client'
import Header from "../components/Header";
import Loader from "../components/Loader";
import Play from "../components/Play";
import Work from "../components/Work";
import Lenis from "lenis";
import { useEffect, useState } from "react";

export default function Home() {
  const [work, setWork] = useState<boolean>(true)
  useEffect(()=>{
    const lenis = new Lenis()
    function raf(time: any){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

  }, [])
  return (
    <div className="h-[1900px]">
      <Loader/>
      <Header setWork={setWork}/>
      {work && <Work />}
      {!work && <Play />}
      
    </div>
  );
}
