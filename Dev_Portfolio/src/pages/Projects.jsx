import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div>
      <div className='flex flex-col place-content-center place-items-center min-h-[75vh] space-y-4'>
        <h1 className='text-6xl font-medium'>Projects are comming</h1>
        <p>Please visit the about page</p>
        <Link to='/about' className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>About</Link>
      </div>
    </div>
  )
}

export default Projects