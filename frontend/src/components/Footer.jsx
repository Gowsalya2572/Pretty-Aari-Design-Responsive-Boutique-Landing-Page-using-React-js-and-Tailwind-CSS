import {  ArrowRight } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex flex-col p-8'>
      <div className='flex  flex-col lg:flex-row justify-between gap-4 lg:mb-17'>
        <div>
          <h5 className='font-head text-primary text-xl pb-6'>Pretty Aari Design</h5>
          <p className='text-[#78716C] font-body'>
            "Designed with passion, stitched with perfection."
          </p>
        </div>
        <div className='flex flex-row gap-9'>
         <div className=''>
           <h5 className='font-head text-primary tracking-widest pb-6'>QUICK LINKS</h5>
           <p className='text-[#78716C] font-body tracking-widest pb-6'>PRIVACY POLICY</p>
           <p className='text-[#78716C] font-body tracking-widest  pb-6'>TERMS OF SERVICE</p>
           <p className='text-[#78716C] font-body tracking-widest  pb-6'>SHIPPING & RETURNS</p>
         </div>
         <div>
           <h5 className='font-head text-primary tracking-widest  pb-6'>SOCIAL</h5>
           <p className='text-[#78716C] font-body tracking-widest pb-6'>INSTAGRAM</p>
           <p className='text-[#78716C] font-body tracking-widest pb-6'>PINTEREST</p>
         </div>
        </div>
        <div className='pr-6 pb-6'>
        <h5 className='font-head text-primary tracking-widest pb-6'>NEWSLETTER</h5>
        <input type="email" name="" id="" className='border border-b-1 border-b-tertiary border-0 text-lg italic font-head ' placeholder='Your Email'/>
        <button><ArrowRight className='border border-b-1 border-b-tertiary text-primary border-0'/></button>
        </div>
      </div>
      <hr className='text-tertiary pb-6' />

      <div >
        <h6 className='text-[#78716C] text-center'>© 2026 PRETTY AARI DESIGN. HANDCRAFTED WITH INTENTION.</h6>
      </div>
    </div>
  )
}

export default Footer



 