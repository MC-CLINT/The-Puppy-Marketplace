import React from 'react'
import logo from '../Assets/Logo 2.png'

export default function Logo() {
  return (
    <div className='flex items-center  '>
        <img src={logo} alt='logo' className='h-10 w-10'/>
        <h1 className='text-lg font-bold'>PuppyMarket</h1>
    </div>
  )
}
