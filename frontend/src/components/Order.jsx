import { Phone } from 'lucide-react'
import React from 'react'
import order from '../assets/OrderImg.jpeg'

const Order = () => {
  return (
    <section id='order' className='bg-[#FCF9F2] min-h-screen w-full flex flex-col lg:flex-row px-4 md:px-8 lg:px-10 py-15 gap-10'>
      <div className='w-full lg:w-1/2 flex flex-col gap-8 px-4'>
      <div>
        <h2 className='font-head text-primary font-semibold text-3xl md:text-5xl lg:text-6xl flex items-center'><Phone className='size-10 md:size-14 lg:size-18 p-2 fill-tertiary' />How to Order</h2>
      </div>

      <div className='flex items-start gap-2 lg:gap-4'>
        <span className='text-4xl md:text-5xl lg:text-6xl font-head text-[#B5914C]'>01</span>
        <div >
           <h3 className='text-primary font-head text-lg md:text-xl '>Call Us</h3>
           <p className='text-[#1C1C18] text-base md:text-lg'>Connect directly with our atelier at 9876543210 to start your journey.</p>
        </div>
      </div>

      <div className='flex items-start gap-2 lg:gap-4'>
        <span className='text-4xl md:text-5xl lg:text-6xl font-head text-[#B5914C]'>02</span>
        <div >
           <h3 className='text-primary font-head text-lg md:text-xl '>Share Your Idea</h3>
           <p className='text-[#1C1C18] text-base md:text-lg'>Tell us about your fabric, color preferences, and the occasion.</p>
        </div>
      </div>

     <div className='flex items-start gap-2 lg:gap-4'>
        <span className='text-4xl md:text-5xl lg:text-6xl font-head text-[#B5914C]'>03</span>
        <div >
           <h3 className='text-primary font-head text-lg md:text-xl '>Expert Guidence</h3>
           <p className='text-[#1C1C18] text-base md:text-lg'>Receive design recommendations and material suggestions from our experts.</p>
        </div>
      </div>
 
      <div className='flex items-start gap-2 lg:gap-4'>
        <span className='text-4xl md:text-5xl lg:text-6xl font-head text-[#B5914C]'>04</span>
        <div >
           <h3 className='text-primary font-head text-lg md:text-xl '>Confirm & Stitch</h3>
           <p className='text-[#1C1C18] text-base md:text-lg'>Finalize the design and price. We start the magic on your garment.</p>
        </div>
      </div>

      <div>
         <p className='bg-[#FFDEA5] text-md p-5 border-l-4 border-l-[#B5914C] text-[#261900]'>Note: Orders are accepted only via phone calls to ensure personalized attention and clarity on design details.</p>
      </div>
      </div>

      <div className='w-full lg:w-1/2  flex items-center justify-center '>
           <img src={order} alt="order" className='w-full max-w-sm md:max-w-md lg:max-w-xl shadow-lg' />
      </div>
    </section>    
  )
}

export default Order