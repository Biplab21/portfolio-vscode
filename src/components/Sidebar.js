import React from 'react'
import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
    return (
        <div className='bg-[#262526] h-screen w-16 flex flex-col justify-between items-center px-6 '>
            <div>
                <a href="https://github.com/Biplab21" target='_blank' rel="noopener noreferrer">
                    <FaGithub color='#A2AA9B' className='h-8 w-8 my-8' />
                </a>
                <a href="mailTo:biplabpaul569@gmail.com" target="_blank" rel="noopener noreferrer">
                    <SiGmail color='#A2AA9B' className='h-7 w-7 my-8' />
                </a>
                <a href="https://www.linkedin.com/in/biplab-paul-32721817a/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin color='#A2AA9B' className='h-7 w-7 my-8' />
                </a>
                <a href="https://leetcode.com/u/biplabpaul569/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode color='#A2AA9B' className='h-7 w-7 my-8'/>
                </a>
                <a href="https://www.hackerrank.com/profile/biplabpaul569" target="_blank" rel="noopener noreferrer">
                    <FaHackerrank color='#A2AA9B' className='h-7 w-7 my-8'/>
                </a>
            </div>
            <div className='pb-1'>
                <IoMdSettings color='#A2AA9B' className='h-8 w-8 my-8' />
            </div>
        </div>
    )
}

export default Sidebar