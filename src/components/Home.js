import React from 'react'
import Typewriter from 'typewriter-effect';
import { githubLink, cvLink } from '../utils/links';

const Home = () => {

  const openResume = () => {
    const resumeLink = cvLink;
    window.open(resumeLink, '_blank');
  };

  const openGithub = () => {
    const gitLink = githubLink;
    window.open(gitLink, '_blank');
  };

  return (
    <div className='h-full w-full md:w-screen bg-[#1E1E1E] flex flex-col justify-center items-center text-white font-serif'>
      <h1 className="text-3xl md:text-6xl">Hi, I'm  <span className='text-yellow-500'>Biplab</span> </h1>
      <span className='py-14 text:md md:text-2xl'>
        <Typewriter
          options={ {
            strings: [ 'Full-stack Developer', 'Consistent Learner', 'Backend Developer', 'Software Engineer' ],
            autoStart: true,
            loop: true,
          } }
        />
      </span>
      <div className='flex flex-row'>
        <button className='p-4 mx-2 border border-[#A2AA9B] rounded-lg hover:text-yellow-500 hover:border-yellow-500' onClick={ openResume }>Resume</button>
        <button className='p-4 mx-2 border border-[#A2AA9B] rounded-lg hover:text-yellow-500 hover:border-yellow-500' onClick={ openGithub }>Github</button>
      </div>

    </div>
  )
}

export default Home