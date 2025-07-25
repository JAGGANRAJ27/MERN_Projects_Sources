import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col place-content-center place-items-center min-h-[75vh] space-y-4'>
      <h1 className='text-6xl font-medium'>Dev Portfolio</h1>
      <p>This is a portfolio for my web development projects using MERN stack</p>
      <Link to='/projects' className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Projects</Link>
    </div>
  )
}

export default Home