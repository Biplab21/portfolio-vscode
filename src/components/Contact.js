import React from 'react'
import { contactData } from '../utils/contactData'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='h-full w-screen bg-[#1E1E1E]'>
            <h1 className='text-yellow-500 text-xl md:text-3xl p-6'>Contact</h1>
            <div className='w-2/3'>
                <div className='flex flex-row '>
                    <h2 className='text-gray-300 pl-6 text-md md:text-xl font-bold'>Feel free to contact me</h2>
                </div>
                <div className='flex flex-col w-3/4 ml-8 pl-2 py-4'>
                    <ul className='list-disc text-[#A2AA9B] text-md md:text-lg'>
                        { contactData.map((data) => (
                            <li key={ data.name } className='w-[15%]'>
                                    <Link to={data.url} target="_blank" rel="noopener noreferrer">
                                    <div className='py-1 flex items-center'>
                                        <span>{ data.name }</span>
                                        <span className='ml-2'>{ data.icon }</span>
                                    </div>
                            </Link>
                                </li>
                        )) }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact