import { Star, StarHalf } from 'lucide-react'
import React from 'react'
import pic from '../assets/propic.png'

const Reviews = () => {
  return (
   <section id="review" className='bg-primary  py-5 lg:py-20'>
       <h2 className='text-tertiary text-3xl md:text-4xl lg:text-5xl text-center font-semibold font-head p-2'>Client Stories</h2>
       <p className='text-[#FFB2B6] text-center font-body'>See what our clients say about their bespoke experience.</p>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center  gap-10 p-5 text-white mx-25 my-2 lg:m-20'>
         <div className='flex flex-col gap-1 lg:gap-2 border border-white p-4 lg:p-5 rounded-xl hover:shadow-md hover:shadow-white'>
          <div className='flex flex-row justify-center items-center gap-2 '>
          <Star fill="yellow" className='size-4' strokeWidth={0} />
          <Star fill="yellow" className='size-4' strokeWidth={0} />
          <Star fill="yellow" className='size-4' strokeWidth={0} />
          <Star fill="yellow" className='size-4' strokeWidth={0} />
          <StarHalf fill="yellow" className='size-4' strokeWidth={0} />
          </div>
          <p>The bridal blouse was beyond my expectations. Every stitch was a masterpiece. Ifelt like royality on my wedding day.</p>
          <div className='flex justify-center items-center gap-2 pt-2'>
            <img src="src/assets/propic.png" alt="photo" className='border border-white object-cover rounded-full h-12 w-12' />
            <h6 className='text-tertiary'>ANANYA SHARMA</h6>
          </div>
         </div>
        
         <div className='flex flex-col gap-1 lg:gap-2 border border-white p-4 lg:p-5 rounded-xl hover:shadow-md hover:shadow-white'>
          <div className='flex flex-row justify-center items-center gap-2'>
          <Star fill="yellow" className='size-4' strokeWidth={0} />
          <Star fill="yellow" className='size-4' strokeWidth={0} />
          <Star fill="yellow" className='size-4' strokeWidth={0} />
          <Star fill="yellow" className='size-4' strokeWidth={0} />
          <StarHalf fill="yellow" className='size-4' strokeWidth={0} />
          </div>
          <p>I requested  a custom design for my reception lehenga. The attention to detail and the quality or Zardosi work is unmatched.</p>
          <div className='flex justify-center items-center gap-2 pt-2'>
            <img src="src/assets/propic.png" alt="photo" className='border border-white object-cover rounded-full h-12 w-12' />
            <h6 className='text-tertiary'>PRIYA VENKAT</h6>
          </div>
         </div>
        
         <div className='flex flex-col gap-1 lg:gap-2 border border-white p-4 lg:p-5 rounded-xl hover:shadow-md hover:shadow-white'>
          <div className='flex flex-row justify-center items-center gap-2'>
          <Star fill="yellow" className='size-4' strokeWidth={0} />
          <Star fill="yellow" className='size-4' strokeWidth={0} />
          <Star fill="yellow" className='size-4' strokeWidth={0} />
          <Star fill="yellow" className='size-4' strokeWidth={0} />
          <StarHalf fill="yellow" className='size-4' strokeWidth={0} />
          </div>
          <p>From the first consultation to the final product, the experience was seamless. Truly the best Aari designers in Chennai.</p>
          <div className='flex justify-center items-center gap-2 pt-2'>
            <img src={pic} alt="photo" className='border border-white object-cover rounded-full h-12 w-12' />
            <h6 className='text-tertiary font-normal'>MEERA KRISHNAN</h6>
          </div>
         </div>
        
       </div>
   </section>
  )
}

export default Reviews