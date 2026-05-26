import { Star, StarHalf } from 'lucide-react'
import React from 'react'

const Reviews = () => {
  return (
   <section id="review" className='bg-primary h-screen  py-20'>
       <h2 className='text-tertiary text-5xl text-center font-head p-2'>Client Stories</h2>
       <p className='text-[#FFB2B6] text-center font-body'>See what our clients say about their bespoke experience.</p>
       <div className='grid grid-cols-3 grid-rows-2 m-4'>

         <div className='flex gap-2'>
           <div className=' relative border border-white w-[20rem] h-[10rem] mx-8 my-18 rounded-4xl  bg-white/3 backdrop-blur-none'>
         <div className='p-4'>
           <img src="src/assets/propic.png" alt="photo" className='absolute top-8 left-8 border border-white object-cover rounded-full h-12 w-12'/>
          <span className='absolute top-8 left-25 text-white  font-head'>ANANYA SHARMA</span>
          <div className='absolute top-14 left-25  flex gap-2 mt-1'>
          <Star fill="yellow" className='size-3' strokeWidth={0} />
          <Star fill="yellow" className='size-3' strokeWidth={0} />
          <Star fill="yellow" className='size-3' strokeWidth={0} />
          <Star fill="yellow" className='size-3' strokeWidth={0} />
          <StarHalf fill="yellow" className='size-3' strokeWidth={0} />
          </div>
          <p className='absolute bottom-4 left-7 leading-4 text-sm text-white'>The bridal blouse was beyond my expectations. Every stitch was a masterpiece. Ifelt like royality on my wedding day.</p>
         </div>
        </div>
       </div>

       <div className='flex gap-2'>
           <div className=' relative border border-white w-[20rem] h-[10rem] mx-8 my-18 rounded-4xl  bg-white/3 backdrop-blur-none'>
         <div className='p-4'>
           <img src="src/assets/propic.png" alt="photo" className='absolute top-8 left-8 border border-white object-cover rounded-full h-12 w-12'/>
          <span className='absolute top-8 left-25 text-white  font-head'>PRIYA VENKAT</span>
          <div className='absolute top-14 left-25  flex gap-2 mt-1'>
          <Star fill="yellow" className='size-3' strokeWidth={0} />
          <Star fill="yellow" className='size-3' strokeWidth={0} />
          <Star fill="yellow" className='size-3' strokeWidth={0} />
          <Star fill="yellow" className='size-3' strokeWidth={0} />
          <StarHalf fill="yellow" className='size-3' strokeWidth={0} />
          </div>
          <p className='absolute bottom-4 left-7 leading-4 text-sm text-white'>I requested  a custom design for my reception lehenga. The attention to detail and the quality or Zardosi work is unmatched.</p>
         </div>
        </div>
       </div>

       <div className='flex gap-2'>
           <div className=' relative border border-white w-[20rem] h-[10rem] mx-8 my-18 rounded-4xl  bg-white/3 backdrop-blur-none'>
         <div className='p-4'>
           <img src="src/assets/propic.png" alt="photo" className='absolute top-8 left-8 border border-white object-cover rounded-full h-12 w-12'/>
          <span className='absolute top-8 left-25 text-white  font-head'>MEERA KRISHNAN</span>
          <div className='absolute top-14 left-25  flex gap-2 mt-1'>
          <Star fill="yellow" className='size-3' strokeWidth={0} />
          <Star fill="yellow" className='size-3' strokeWidth={0} />
          <Star fill="yellow" className='size-3' strokeWidth={0} />
          <Star fill="yellow" className='size-3' strokeWidth={0} />
          <StarHalf fill="yellow" className='size-3' strokeWidth={0} />
          </div>
          <p className='absolute bottom-4 left-7 leading-4 text-sm text-white'>From the first consultation to the final product, the experience was seamless. Truly the best Aari designers in Chennai.</p>
         </div>
        </div>
       </div>

         

         


       </div>
   </section>
  )
}

export default Reviews
