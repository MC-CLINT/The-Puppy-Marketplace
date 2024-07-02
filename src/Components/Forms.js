import React from 'react'
import { useState } from 'react'
import dogImg from '../Assets/Colorful Beagle 1.png'

export default function Forms() {
    const [formData, setFormData] = useState({
        fullName:'',
        email:'',
        passWord:'',
    })

    const [show, setShow] = useState(false)
    function toggleShow(){
        setShow((prev => !prev))
    }

    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

  return (
    <div className='flex flex-col mt-10  '>
        <div>
            <img src={dogImg} alt='dog' className='w-[200px] lg:w-[200px] mx-auto  h-[200px] rounded-[100px]' />

        </div>
        <form className='flex flex-col items-center '>
            <input
                type='text'
                placeholder='Enter your name'
                onChange={handleChange}
                name='fullName'
                value={formData.fullName}
                className='border-2 border-main p-2 rounded-lg  lg:w-[400px] font-bold lg:mt-2'
            />
             <input
                type='text'
                placeholder='Enter your email'
                onChange={handleChange}
                name='email'
                value={formData.email}
                className='form'
            />
             <input
                type= {show ? "text" : "password"}
                placeholder='Password'
                onChange={handleChange}
                name='passWord'
                value={formData.passWord}
                className='form'
            />
            
            <label htmlFor='show' className='font-bold text-gray-400'>
                <input
                    type='checkbox'
                    id='show'
                    checked = {show}
                    onChange={toggleShow}
                />
                Show Password
                </label>
            


            
        

        <button className='bg-main text-white p-2 rounded-lg w-[200px] lg:my-6 my-[10px] font-bold'>Submit</button>

           
        </form>

    </div>
  )
}
