import { Phone } from 'lucide-react'
import React from 'react'

const Order = () => {
  return (
    <section id='order' className='bg-[#FCF9F2] min-h-screen w-full flex flex-row px-10 py-15'>
      <div className='w-1/2 flex flex-col gap-8 px-4'>
      <div>
        <h2 className='font-head text-primary font-semibold text-6xl flex'><Phone className=' size-18 p-2 fill-tertiary' />How to Order</h2>
      </div>

      <div className='flex items-start gap-4 pl-1'>
        <span className='text-6xl font-head text-[#B5914C]'>01</span>
        <div >
           <h3 className='text-primary font-head text-xl '>Call Us</h3>
           <p className='text-[#1C1C18] text-lg'>Connect directly with our atelier at 9876543210 to start your journey.</p>
        </div>
      </div>

      <div className='flex items-start gap-4 pl-1'>
        <span className='text-6xl font-head text-[#B5914C]'>02</span>
        <div >
           <h3 className='text-primary font-head text-xl '>Share Your Idea</h3>
           <p className='text-[#1C1C18] text-lg'>Tell us about your fabric, color preferences, and the occasion.</p>
        </div>
      </div>

     <div className='flex items-start gap-4 pl-1'>
        <span className='text-6xl font-head text-[#B5914C]'>03</span>
        <div >
           <h3 className='text-primary font-head text-xl '>Expert Guidence</h3>
           <p className='text-[#1C1C18] text-lg'>Receive design recommendations and material suggestions from our experts.</p>
        </div>
      </div>
 
      <div className='flex items-start gap-4 pl-1'>
        <span className='text-6xl font-head text-[#B5914C]'>04</span>
        <div >
           <h3 className='text-primary font-head text-xl '>Confirm & Stitch</h3>
           <p className='text-[#1C1C18] text-lg'>Finalize the design and price. We start the magic on your garment.</p>
        </div>
      </div>

      <div className='flex items-start pt-2 pl-1'>
         <p className='bg-[#FFDEA5] text-md p-5 border-l-4 border-l-[#B5914C] text-[#261900]'>Note: Orders are accepted only via phone calls to ensure personalized attention and clarity on design details.</p>
      </div>

      </div>
      <div className='w-1/2  lg:flex items-center justify-center '>
           <img src="src/assets/OrderImg.jpeg" alt="order" className='w-3/4' />
      </div>
    </section>
  )
}

export default Order


//  <div className='w-1/2 flex justify-start '>
//           <h2 className='font-head text-primary font-semibold text-6xl flex'><Phone className='text-black size-18 p-2' />How to Order</h2>
//        </div>
//        <div className='w-1/2 flex  items-center'>
//         <img src="src/assets/OrderImg.jpeg" alt="order" className='' />
//        </div>