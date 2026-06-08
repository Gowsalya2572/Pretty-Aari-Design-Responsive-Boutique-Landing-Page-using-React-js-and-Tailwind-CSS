import React from 'react'
import { PartyPopper, Phone} from 'lucide-react'

const Hero = () => {
  return (
   <section id='hero'
  className="h-screen bg-cover bg-center bg-fixed flex items-center"
  style={{
    backgroundImage:
      "url('src/assets/bgfordesign.png')",
  }}
>

    <div className='grid grid-cols-1 content-center lg:grid-cols-2 place-items-center h-full w-full '>
        <div className=' m-3 lg:m-6 text-center lg:text-left '>
          <h3 className='text-body text-tertiary inline-block border  border-tertiary p-1 lg:my-3 mt-3 '>HANDRAFTED HERITAGE</h3>
          <h1 className='text-white font-head text-4xl lg:text-5xl font-semibold my-3 lg:my-6 '>Pretty Aari Design</h1>
          <h6 className='text-tertiary font head italic text-lg lg:text-xl mb-3 lg:mb-6'>✨ Handcrafted Elegance for Every Occasion</h6>
          <p className='text-white font-body'>Discover the soulful art of Aari embroidery. From intricate bridal 
            blouses to regal lehengas. We breathe life into fabric through precision,
            passion, and centuries-old craftmanship.</p>
          <button className='bg-tertiary justify-center items-center text-md lg:text-lg font-head text-primary my-6 mx-auto lg:mx-0 flex py-2 px-5'>
            <Phone className='p-2 size-8' /> <a href="#form">Call Now to Order</a></button>
        </div>
        <div className='content-center mb-6'>
          <div className='bg-white m-6 lg:m-19 lg:p-8 p-4'>
               <div className='grid place-items-center'>
                <PartyPopper className='text-tertiary ' size={45} />
               </div>
               <h1 className='text-primary font-head text-xl lg:text-3xl text-center font-semibold pt-1 lg:pt-3 '>Festive Offer is Live!</h1>
               <p className='m-1 lg:m-3 text-center'>Get special discounts on all Aari work designs for a limited time. 
                Elevate your celebration wardrobe with timeless artistry.</p>
                <h6 className='text-secondary font-medium border-1 border-tertiary text-center my-1 lg:my-3 p-1'>LIMITED PERIOD ONLY</h6>
          </div>
        </div>
     </div>
    
   </section>
  )
}

export default Hero