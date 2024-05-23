import React, { useState } from 'react';
import { header } from '../utils/headerNames';
import { SiJavascript } from "react-icons/si";
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className='bg-[#424042] w-full md:w-full min-h-16 text-center flex'>
      <div className="overflow-x-auto flex-grow flex items-center no-scrollbar no-scrollbar">
        <ul className='flex h-full xl:flex-row'>
          {
            header.map((item, index) => (
              <Link
                onClick={() => setActiveIndex(index)}
                to={item.url}
                key={item.name}
                className={`flex flex-row font-xl cursor-pointer text-lg font-medium text-gray-300 hover:text-yellow-500 items-center h-full ${activeIndex === index ? 'bg-[#1e1e1e]' : ''}`}>
                <li className='h-full md:h-full flex items-center justify-center px-4 cursor-pointer font-medium text-gray-300 border-[1px] md:border-r-[1px] border-[#262526] col-span-1 md:col-auto w-full'>
                  <SiJavascript className='min-w-7 mr-1  text-yellow-500' />
                  <span className='text-sm font-medium md:text-lg 2xl:text-lg'>{item.name}</span>
                </li>
              </Link>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Header;
