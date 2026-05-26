import React from 'react'
import { PartyPopper, Phone} from 'lucide-react'

const Hero = () => {
  return (
   <section id='hero'
  className="h-screen bg-cover bg-center bg-fixed flex items-center"
  style={{
    backgroundImage:
      "url('/src/assets/bgfordesign.png')",
  }}
>

    <div className='grid grid-cols-2 place-items-center h-full w-full'>
        <div className=' m-6'>
          <h3 className='text-body text-tertiary inline-block border  border-tertiary p-1 my-3'>HANDRAFTED HERITAGE</h3>
          <h1 className='text-white font-head text-5xl font-semibold my-6 '>Pretty Aari Design</h1>
          <h6 className='text-tertiary font head italic text-xl mb-6'>✨ Handcrafted Elegance for Every Occasion</h6>
          <p className='text-white font-body'>Discover the soulful art of Aari embroidery. From intricate bridal 
            blouses to regal lehengas. We breathe life into fabric through precision,
            passion, and centuries-old craftmanship.</p>
          <button className='bg-tertiary text-lg font-head text-primary my-6 flex py-2 px-5'>
            <Phone className='p-2 size-8' /> Call Now to Order</button>
        </div>
        <div className='content-center'>
          <div className='bg-white m-19 p-8 '>
               <div className='grid place-items-center'>
                <PartyPopper className='text-tertiary ' size={45} />
               </div>
               <h1 className='text-primary font-head text-3xl text-center font-semibold pt-3 '>Festive Offer is Live!</h1>
               <p className='m-3 text-center'>Get special discounts on all Aari work designs for a limited time. 
                Elevate your celebration wardrobe with timeless artistry.</p>
                <h6 className='text-secondary font-medium border-1 border-tertiary text-center my-3 p-1'>LIMITED PERIOD ONLY</h6>
          </div>
        </div>
     </div>
    
   </section>
  )
}

export default Hero

