import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Body = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Body