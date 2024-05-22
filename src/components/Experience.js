import React from 'react'
import { experienceData } from '../utils/experienceData'

const Experience = () => {
  return (
    <div className='h-full w-screen bg-[#1E1E1E]'>
      <h1 className='text-yellow-500 text-xl md:text-3xl p-6'>Experience</h1>
      { experienceData.map((data) => (
        <div className='w-[80%] -mt-2 md:mt-0 md:w-2/3'>
          <div className='flex flex-col md:flex-row'>
          <h2 className='text-gray-300 text-md pl-6 pb-2 md:pb-0 md:text-xl font-bold'>{ data.companyName } | { data.designation }</h2>
          <h2 className='text-yellow-500 pl-6 text-md md:text-xl'>( { data.duration } ) </h2>
          </div>
          <div className='flex flex-col w-[90%] md:w-3/4 ml-8 pl-2 py-4'>
            <ul className='list-disc text-[#A2AA9B] text-sm md:text-lg'>
              {
                data.jobDescription.map((desc) => (
                  <li className='py-1' key={desc}>{ desc }</li>
                ))
              }
            </ul>
          </div>
        </div>
      )) }
    </div>
  )
}

export default Experience