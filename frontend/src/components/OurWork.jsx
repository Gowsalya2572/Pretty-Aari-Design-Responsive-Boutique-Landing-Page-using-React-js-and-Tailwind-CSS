import { Section, SectionIcon } from 'lucide-react'
import React from 'react'

const OurWork = () => {
  return (
    <section id='work' className='min-h-screen w-full py-15 px-5'>
       <h2 className='font-head text-primary text-5xl pb-3 font-semibold'>🖼️Our Work</h2>
       <p className='text-[#554243] pl-3'>A visual journey through our finest creations.</p>
       <div className='h-screen grid grid-cols-3 grid-rows-2 gap-2 p-4'>
          <div className=' row-span-2 '>
            <img src="src/assets/work-1.jpeg" alt="img1" className='h-full w-full object-cover'/>
          </div>
          <div className=' col-span-2 '>
            <img src="src/assets/work-2.jpeg" alt="img2" className='w-full h-full object-cover ' />
          </div>
          <div className='row-span-1 '>
            <img src="src/assets/work-3.jpeg" alt="" className='w-full h-full object-cover '/>
          </div>
          <div className='row-span-1 '>
             <img src="src/assets/work-4.jpeg" alt="" className='w-full h-full object-cover '/>
          </div>
          
       </div>
    </section>
  )
}

export default OurWork






