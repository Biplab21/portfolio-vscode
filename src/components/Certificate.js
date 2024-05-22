import React from 'react'
import { certificateData } from '../utils/certificateData'
import { Link } from 'react-router-dom'

const Certificate = () => {
    return (
        <div className='h-full bg-[#1E1E1E] w-screen'>
            <h1 className='text-yellow-500 text-xl md:text-3xl p-6'>Certificates</h1>
            <div className='w-2/3'>
                <div className='flex flex-col ml-8 pl-2 py-4'>
                    <ul className='list-disc text-[#A2AA9B] text-md md:text-lg'>
                        { certificateData.map((data) => (
                            <li key={ data.name } className='py-2'>
                                <Link to={ data.url } target="_blank" rel="noopener noreferrer">
                                    <span>{ data.name }</span>

                                </Link>
                            </li>
                        )) }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Certificate