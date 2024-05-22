import React from 'react'
import { BiGitBranch } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='bg-[#424042] w-full flex flex-row items-center py-'>
      <div className="pl-2 py-1">
        <BiGitBranch color='#A2AA9B' className='h-5 w-5' />
      </div>
      <span className='text-[#A2AA9B] pl-2'>master</span>
    </div>
  )
}

export default Footer