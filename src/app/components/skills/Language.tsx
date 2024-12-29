import React from 'react'
import { Progress } from '../ui/progress'

function Language() {
  return (
    <div >
      <div className='w-72 mb-6'>
        <span className='text-xl'>Arabic</span>
        <Progress value={99}/>
        </div>
      <div className='w-72 mb-6'>
        <span className='text-xl'>English</span>
        <Progress value={85}/>
        </div>
      <div className='w-72 mb-6'>
        <span className='text-xl'>French</span>
        <Progress value={70}/>
        </div>
      
    </div>
  )
}

export default Language
