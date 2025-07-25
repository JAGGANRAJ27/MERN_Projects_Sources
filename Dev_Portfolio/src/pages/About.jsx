import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className='flex flex-col place-content-center place-items-center min-h-[75vh] space-y-4'>
      <h1 className='text-6xl font-medium'>Nothing to see here</h1>
      <p>There is nothing to see here</p>
      <Link to='/contact' className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Contact</Link>
    </div>
    </div>
  )
}

export default About