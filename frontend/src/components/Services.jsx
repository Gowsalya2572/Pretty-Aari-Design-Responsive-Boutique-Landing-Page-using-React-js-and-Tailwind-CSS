import React from 'react'
import {Banknote, ContactRound, Focus, Hand, ShieldCheck, SlidersHorizontal} from 'lucide-react'

const Services = () => {
  return (
    <section id='service' className='text-white bg-primary min-h-screen w-full flex flex-col items-center p-8 '>
        <h2 className='font-head text-center text-5xl font-semibold pb-3 mt-8'>🌟 Why Choose Us</h2>
        <p className='pb-7 text-[#FFB2B6] text-lg font-body'>Our commitment to excellence is stitched into every fiber of our service.</p>
       <div className=' grid grid-col-6 lg:grid-cols-3 lg:grid-rows-2 gap-4 mt-6'>
         <div className=' flex flex-col gap-3 p-6'>
            <Hand className='border border-1 border-[#FFB2B6] p-2 size-12 rounded-xl' />
            <h6 className='font-head text-xl'>100% Handcrafted</h6>
            <p className='font-body '>No machines, just the rhythmic precision of skilled hands and Aari needles.</p>
         </div>
         <div className='flex flex-col gap-2 p-6'>
            <SlidersHorizontal className='border border-1 border-[#FFB2B6] p-2 size-12 rounded-xl'/>
            <h6 className='font-head text-xl'>Fully Customized</h6>
            <p className='font-body '>We adapt every design to your personal taste, measurements, and occasion needs.</p>
         </div>
         <div className='flex flex-col gap-2 p-6'>
            <Focus className='border border-1 border-[#FFB2B6] p-2 size-12 rounded-xl'/>
            <h6 className='font-head text-xl'>Attention to Detail</h6>
            <p className='font-body '>From thread quality to bead placement, every millimeter is scrutinized for perfection.</p>
         </div>
         <div className='flex flex-col gap-2 p-6'>
            <ContactRound className='border border-1 border-[#FFB2B6] p-2 size-12 rounded-xl' />
            <h6 className='font-head text-xl'>Personal Service</h6>
            <p className='font-body '>Direct consultation with our lead designers to ensure your vision is realized.</p>
         </div>
         <div className='flex flex-col gap-2 p-6'>
            <Banknote className='border border-1 p-2 border-[#FFB2B6] size-12 rounded-xl'/>
             <h6 className='font-head text-xl'>Affordable Luxury</h6>
            <p className='font-body '>Premium craftsmanship made accessible through transparent and fair pricing.</p>
         </div>
         <div className='flex flex-col gap-2 p-6'>
           <ShieldCheck className='border border-1 border-[#FFB2B6] p-2 size-12 rounded-xl' />
           <h6 className='font-head text-xl'>Quality Guaranteed</h6>
            <p className='font-body '>We use only high-grade materials that stand the test of time and trends.</p>
         </div>
       </div>

    </section>
  )
}

export default Services
