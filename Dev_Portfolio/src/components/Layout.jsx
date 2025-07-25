import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <header className='sticky top-0 min-h-[10vh]'>
        <Navbar />
      </header>
      <section className='min-h-[75vh]'>
        <Outlet />
      </section>
      <footer className='min-h-[15vh] sticky bottom-0 text-white font-bold text-center content-center bg-gray-800'>
        <Footer />
      </footer>
    </>
  )
}

export default Layout