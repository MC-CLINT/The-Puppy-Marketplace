import React from 'react'
import logo from '../Assets/Logo 2.png'

export default function Logo() {
  return (
    <div className='flex items-center p-3 shadow-lg'>
        <img src={logo} alt='logo' className='h-10 w-10'/>
        <h1 className='font-bold text-2xl text-white'> Puppy Market</h1>
    </div>
  )
}
