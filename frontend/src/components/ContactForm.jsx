import { Clock4, MapPin, PhoneCall, ShieldCheck, Timer } from 'lucide-react'
import React from 'react'

const ContactForm = () => {
  return (
    <section id='form' className='bg-[#FCF9F2] w-full min-h-screen p-8 '>
      <div className='max-w-7xl h-screen grid grid-cols-2 bg-[#FFFFFF]  shadow-xl mx-auto p-10'>
          <div className=' flex flex-col gap-8 '>
             <h2 className=' font-head text-primary font-semibold text-5xl  '>🍭Get in Touch</h2>
             <p className='px-5  text-[#554243] font-body '>Experience the art of Aari at our Chennai atelier. We're here to help you design your perfect ensemble.</p>
              <div className='flex px-5 gap-4'>
                <MapPin className='text-primary'/>
                <div>
                <h6 className='font-body text-[#554243]'>ATELIER ADDRESS</h6>
                <p className='text-primary font-head '>Chennai</p>
                </div>
              </div>

              <div className='flex px-5  gap-4'>
                <PhoneCall className='text-primary'/>
                <div>
                <h6 className='font-body text-[#554243]'>CALL US NOW</h6>
                <p className='text-primary font-head '>+91 98765 43210</p>
                </div>
              </div>

              <div className='flex px-5  gap-4'>
                <Clock4 className='text-primary'/>
                <div>
                <h6 className='font-body text-[#554243]'>OPERATING HOURS</h6>
                <p className='text-primary font-head '>9 AM - 8 PM</p>
                </div>
              </div>

              <hr className='text-tertiary'/>
                 
              <div className='flex px-5 gap-4 text-primary'>
                 <ShieldCheck />
                 <h6 className='tracking-wider'>PRIVACY GUARANTEED</h6>
              </div>

              <div className='flex px-5 gap-4 text-primary'>
                 <Timer />
                 <h6 className='tracking-wider'>CALL WITHIN 24 HOURS</h6>
              </div>
               

          </div>
          <div className='m-6'>
             <form  className='w-120 flex flex-col justify-center gap-6 border border-tertiary border-1 p-8 mx-auto shadow-xl'>
              <h6 className='text-primary font-head text-lg'>Request a callback</h6>
                <div className='flex flex-col gap-2'>
                <label htmlFor="name" className='text-[#554243]'>NAME</label> 
                <input type="text" name="name" id="name" className='border border-b-1 border-0 border-b-tertiary bg-neutral text-[#6B7280] p-2' placeholder='Your Name' />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="number" className='text-[#554243]'>MOBILE NUMBER</label> 
                <input type="number" name="number" id="number" className='border border-b-1 border-0 border-b-tertiary bg-neutral text-[#6B7280] p-2' placeholder='Your Number' />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="design" className='text-[#554243]'>DESIGN TYPE</label> 
                <select name="design" id="design" className='border border-b-1 border-0 border-b-tertiary bg-neutral text-[#6B7280] p-2' > 
                  <option value="">Select</option>
                  <option value="bridal">Bridal</option>
                  <option value="simple">simple</option>
                </select>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="message" className='text-[#554243]'>MESSAGE (optional)</label> 
                <textarea name="message" id="message" cols="2"  rows="2" className='border border-b-1 border-0 border-b-tertiary bg-neutral p-3 text-[#6B7280]' placeholder='Share your vision' ></textarea>
              </div>
              
              <div className='flex flex-col gap-2 p-2'>
                <button className='bg-primary p-2 text-white cursor-pointer'>Submit Request</button>
              </div>
             </form>
          </div>
      </div>
        
    </section>
  )
}

export default ContactForm
