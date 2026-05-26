import React from 'react'

const About = () => {
  return (
   <section id='about' className='bg-[#FCF9F2] w-full min-h-screen flex justify-start '>
     <div className='grid lg:grid-cols-2'>
       <div>
           <img src="src/assets/about.jpeg" alt="about" className='h-screen py-15 mx-auto' />
       </div>
       <div className='flex flex-col gap-15 justify-start py-15 px-5  m-7'>
         <h2 className='text-primary text-5xl font-head font-semibold underline underline-offset-25 decoration-tertiary'>💫 About Us</h2>
         <p>At Pretty Aari Design ,we don't just stitch; we narrate stories through threads. Our atelier is founded on the principles of passion and precision, bridging the gap between traditional heritage and modern silhouettes.</p>
         <p>Each piece a labour of love, requiring dozens of hours of meticulous hand-embroidery. We specialize in the unique 'Aari' technique, using specialized needies to create fine, intricate chain stitches that define true luxury.</p>
         <div className='flex flex-row'>
           <div>
             <h4 className='text-primary font-head text-lg'>Heritage</h4>
             <p >Honoring centuries-old embroidery techniques.</p>
           </div>
           <div>
            <h4 className='text-primary font-head text-lg '>Modernity</h4>
            <p>Contemporary designs for the modern women.</p>
           </div>
         </div>
       </div>
     </div>
   </section>
  )
}

export default About
