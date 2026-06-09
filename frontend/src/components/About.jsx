import React from 'react'
import aboutImg from '../assets/about.jpeg'

const About = () => {
  return (
   <section id='about' className='bg-[#FCF9F2] w-full min-h-screen flex justify-start '>
     <div className='grid grid-cols-1 lg:grid-cols-2'>
       <div>
           <img src={aboutImg} alt="about" className='w-full max-w-sm md:max-w-md lg:max-w-xl pt-10 lg:py-15 mx-auto ' />
       </div>
       <div className='flex flex-col gap-5 md:gap-10 lg:gap-15 justify-start  lg:py-15 lg:px-5  m-7'>
         <h2 className='text-primary text-3xl md:text-4xl lg:text-5xl font-head font-semibold underline underline-offset-25 decoration-tertiary py-5'>💫 About Us</h2>
         <p className='text-base'>At Pretty Aari Design ,we don't just stitch; we narrate stories through threads. Our atelier is founded on the principles of passion and precision, bridging the gap between traditional heritage and modern silhouettes.</p>
         <p className='text-base'>Each piece a labour of love, requiring dozens of hours of meticulous hand-embroidery. We specialize in the unique 'Aari' technique, using specialized needies to create fine, intricate chain stitches that define true luxury.</p>
         <div className='flex flex-row'>
           <div className='border-l-4 border-tertiary p-3'>
             <h4 className='text-primary font-head text-lg'>Heritage</h4>
             <p className='text-base'>Honoring centuries-old embroidery techniques.</p>
           </div>
           <div className='border-l-4 border-tertiary p-3'>
            <h4 className='text-primary font-head text-lg '>Modernity</h4>
            <p className='text-base'>Contemporary designs for the modern women.</p>
           </div>
         </div>
       </div>
     </div>
   </section>
  )
}

export default About
