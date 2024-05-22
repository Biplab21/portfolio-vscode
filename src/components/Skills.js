import React from 'react';
import { skillsData } from '../utils/skillsData';

const Skills = () => {
    return (
        <div className='h-full bg-[#1E1E1E] w-screen'>
            <h1 className='text-yellow-500 text-xl md:text-3xl p-6'>Skills</h1>
            { skillsData.map((data) => (
                <div className='w-2/3' key={ data.skillName }>
                    <div className='flex flex-row'>
                        <h2 className='text-gray-300 pl-6 text-md md:text-xl font-bold'>{ data.skillName }</h2>
                    </div>
                    <div className='flex flex-col w-3/4 ml-8 pl-2 py-4'>
                        <ul className='list-disc text-[#A2AA9B] text-md md:text-lg flex flex-wrap'>
                            { data?.skillInfo?.map((desc) => (
                                <li key={ desc.name } className='w-full md:w-1/3'>
                                    <div className='py-1 flex items-center'>
                                        <span>{ desc.name }</span>
                                        <span className='ml-2'>{ desc.icon }</span>
                                    </div>
                                </li>
                            )) }
                        </ul>
                    </div>

                </div>
            )) }
        </div>
    );
};

export default Skills;
