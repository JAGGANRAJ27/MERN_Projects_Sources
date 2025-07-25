import React from 'react'
import ContactForm from '../components/ContactForm'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div className='flex flex-col place-content-center place-items-center min-h-[75vh] space-y-4'>
        <h1 className='text-6xl font-medium'>Feel free to contact me</h1>
        <p>Here simply fill out the form</p>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact