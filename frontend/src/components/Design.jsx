import { UserRoundPen } from 'lucide-react'
import React from 'react'

const Design = () => {
  return (
     <section id='design' className='bg-primary text-white min-h-screen w-full flex flex-col items-center p-8'>
        <h2 className='font-head  text-5xl p-5 font-semibold'>👗 What We Design</h2>
        <p className='font-body text-lg '>From bridal splendor to everyday elegance, explore our curated range of customized Aari-worked ensembles.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-30  '>
        <div className='border bg-neutral p-6 hover:shadow-xl-neutral rounded-lg'> 
           👚
           <h6 className='text-primary font-head text-lg'>Blouses</h6>
           <p className='text-[#554243] font-body text-md'>Ornate back necks and heavy sleeve embroidery.</p>
         </div>

        <div className='border bg-neutral p-6'> 
            🥻
           <h6 className='text-primary font-head text-lg'>Lehengas</h6>
           <p className='text-[#554243] font-body text-md'>Grand panels with traditional Zardosi and Aari work.</p>
         </div>

        <div className='border bg-neutral p-6'> 
           👕
           <h6 className='text-primary font-head text-lg'>Chudithars</h6>
           <p className='text-[#554243] font-body text-md'>Elegent neckline and border highlights for suits.</p>
         </div>
            
            <div className='border bg-neutral p-6'> 
                👗
           <h6 className='text-primary font-head text-lg'>Long Tops</h6>
           <p className='text-[#554243] font-body text-md'>Contemporary tunics with minimalist embroidery.</p>
         </div>
     
        <div className='border bg-neutral p-6'> 
           <UserRoundPen className='text-tertiary'/>
           <h6 className='text-primary font-head text-lg'>Custom</h6>
           <p className='text-[#554243] font-body text-md'>Bring your vision, and we'll bring it to life.</p>
         </div>
         
        </div>
    </section>
  )
}

export default Design
