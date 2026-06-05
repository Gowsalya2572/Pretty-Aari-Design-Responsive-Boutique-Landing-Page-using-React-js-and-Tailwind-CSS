import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
   <nav className=' w-full h-16 font-head shadow-sm sticky top-0 z-50'>
    <div className='flex justify-between items-center '>
       <div>
          <h2 className='m-3 cursor-pointer text-[#b00225] text-3xl font-medium  italic'>Pretty Aari Design</h2>
       </div>
          <ul className=' hidden lg:flex items-center gap-8  text-lg font-medium text-secondary'>
            <li className='hover:text-[#b00225] hover:underline hover:decoration-tertiary hover:underline-offset-8 cursor-pointer'><a href="#home">The Atelier</a></li>
            <li className='hover:text-[#b00225] hover:underline hover:decoration-tertiary hover:underline-offset-8 cursor-pointer'><a href="#work">Gallery</a></li>
            <li className='hover:text-[#b00225] hover:underline hover:decoration-tertiary hover:underline-offset-8 cursor-pointer'><a href="#service">Services</a></li>
            <li className='hover:text-[#b00225] hover:underline hover:decoration-tertiary hover:underline-offset-8 cursor-pointer'><a href="#order">Process</a></li>
            <li className='hover:text-[#b00225] hover:underline hover:decoration-tertiary hover:underline-offset-8 cursor-pointer'><a href="#review">Reviews</a></li>
          </ul>
       <div >
          <button className='hidden lg:block m-3 cursor-pointer text-base  bg-primary px-6 py-2 text-white '><a href="#form">Inquire Now</a></button>
       </div>
      <div className='lg:hidden cursor-pointer' onClick={() => setOpen(!open)}>

          { open
              ? <X size={30} />
              : <Menu size={30} />
          }

        </div>
    </div>

          {
        open && (

          <ul className='lg:hidden flex flex-col gap-6 px-6 pb-6 text-lg font-medium text-secondary bg-white'>

            <li><a className='hover:underline hover:decoration-tertiary hover:underline-offset-8' href="#home">The Atelier</a></li>
            <li><a className='hover:underline hover:decoration-tertiary hover:underline-offset-8' href="#work">Gallery</a></li>
            <li><a className='hover:underline hover:decoration-tertiary hover:underline-offset-8' href="#service">Services</a></li>
            <li><a className='hover:underline hover:decoration-tertiary hover:underline-offset-8' href="#order">Process</a></li>
            <li><a className='hover:underline hover:decoration-tertiary hover:underline-offset-8' href="#review">Reviews</a></li>

            <button className='bg-primary px-6 py-2 text-white w-fit'>
              <a href="#form">Inquire Now</a>
            </button>
            </ul>
        )}
    </nav>
  )
}

export default Navbar
