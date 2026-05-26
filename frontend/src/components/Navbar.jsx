import React from 'react'

const Navbar = () => {
  return (
   <nav className=' w-full h-16 font-head shadow-sm sticky top-0 z-50'>
    <div className=' flex justify-between items-center '>
       <div>
          <h2 className='m-3 cursor-pointer text-[#b00225] text-3xl font-medium  italic'>Pretty Aari Design</h2>
       </div>
          <ul className='flex items-center gap-8  text-lg font-medium text-secondary'>
            <li className='hover:text-[#b00225] hover:underline hover:decoration-tertiary hover:underline-offset-8 cursor-pointer'><a href="#home">The Atelier</a></li>
            <li className='hover:text-[#b00225] hover:underline hover:decoration-tertiary hover:underline-offset-8 cursor-pointer'><a href="#work">Gallery</a></li>
            <li className='hover:text-[#b00225] hover:underline hover:decoration-tertiary hover:underline-offset-8 cursor-pointer'><a href="#service">Services</a></li>
            <li className='hover:text-[#b00225] hover:underline hover:decoration-tertiary hover:underline-offset-8 cursor-pointer'><a href="#order">Process</a></li>
            <li className='hover:text-[#b00225] hover:underline hover:decoration-tertiary hover:underline-offset-8 cursor-pointer'><a href="#review">Reviews</a></li>
          </ul>
       <div >
          <button className='m-3 cursor-pointer text-base  bg-primary px-6 py-2 text-white '><a href="#form">Inquire Now</a></button>
       </div>
    </div>
    </nav>
  )
}

export default Navbar
