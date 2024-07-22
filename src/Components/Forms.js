import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dogImg from '../Assets/Colorful Beagle 1.png'

export default function Forms() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    })

    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    function toggleShow() {
        setShow(prev => !prev)
    }

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // Add form validation or API calls here
        navigate('/Dashboard')
    }

    return (
        <div className='flex justify-center mt-10'>
            <div className='flex flex-col lg:flex-row border rounded-lg shadow-lg p-4 lg:p-10'>
                <div className='flex justify-center lg:justify-start mb-4 lg:mb-0 lg:mr-10'>
                    <img src={dogImg} alt='dog' className='w-[200px] h-[200px] rounded-full' />
                </div>
                <form className='flex flex-col items-center lg:items-start' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Enter your name'
                        onChange={handleChange}
                        name='fullName'
                        value={formData.fullName}
                        className='border-2 border-main p-2 rounded-lg lg:w-[400px] font-bold lg:mt-2 mb-4'
                    />
                    <input
                        type='text'
                        placeholder='Enter your email'
                        onChange={handleChange}
                        name='email'
                        value={formData.email}
                        className='border-2 border-main p-2 rounded-lg lg:w-[400px] font-bold lg:mt-2 mb-4'
                    />
                    <input
                        type={show ? 'text' : 'password'}
                        placeholder='Password'
                        onChange={handleChange}
                        name='password'
                        value={formData.password}
                        className='border-2 border-main p-2 rounded-lg lg:w-[400px] font-bold lg:mt-2 mb-4'
                    />
                    <label htmlFor='show' className='font-bold text-gray-400 mb-4'>
                        <input
                            type='checkbox'
                            id='show'
                            checked={show}
                            onChange={toggleShow}
                            className='mr-2'
                        />
                        Show Password
                    </label>
                    <button type='submit' className='bg-main text-white p-2 rounded-lg w-[200px] lg:w-full font-bold'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
