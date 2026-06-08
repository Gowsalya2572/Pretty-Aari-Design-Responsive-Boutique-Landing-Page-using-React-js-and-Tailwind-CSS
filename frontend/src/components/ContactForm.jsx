import { Clock4, MapPin, PhoneCall, ShieldCheck, Timer } from 'lucide-react'
import React, { useState } from 'react'

//https://script.google.com/macros/s/AKfycbzZgZVeR2sR8SdV-6NJFvMehGQ_ust7Kp3SgScIBf2ab4gMwF-_JaWai5k6UQU9ax-p/exec

const ContactForm = () => {
  const [formData, setFormData] = useState({
  name: "",
  mobile: "",
  design: "",
  message: ""
});


const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};



  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzZgZVeR2sR8SdV-6NJFvMehGQ_ust7Kp3SgScIBf2ab4gMwF-_JaWai5k6UQU9ax-p/exec",
      {
        method: "POST",
        body: JSON.stringify(formData)
      }
    );

    const result = await response.json();

    if (result.success) {
      alert("Request submitted successfully!");

      setFormData({
        name: "",
        mobile: "",
        design: "",
        message: ""
      });
    }
  } catch (error) {
    console.error(error);
    alert("Submission failed");
  }
};
  return (
    <section id='form' className='bg-[#FCF9F2] w-full min-h-screen p-8 md:px-8'>
      <div className='max-w-7xl  grid  grid-cols-1 lg:grid-cols-2 gap-10 bg-[#FFFFFF]  shadow-xl mx-auto p-4 md:8 lg:p-10'>
          <div className=' flex flex-col lg:gap-8 gap-6'>
             <h2 className=' font-head text-primary font-semibold text-3xl md:text-4xl lg:text-5xl  '>🍭Get in Touch</h2>
             <p className='px-5  text-[#554243] font-body text-sm md:text-base'>Experience the art of Aari at our Chennai atelier. We're here to help you design your perfect ensemble.</p>
              <div className='flex px-5 gap-4'>
                <MapPin className='text-primary flex-shrink-0'/>
                <div>
                <h6 className='font-body text-[#554243] text-base'>ATELIER ADDRESS</h6>
                <p className='text-primary font-head '>Chennai</p>
                </div>
              </div>

              <div className='flex px-5  gap-4'>
                <PhoneCall className='text-primary  flex-shrink-0'/>
                <div>
                <h6 className='font-body text-[#554243] text-base'>CALL US NOW</h6>
                <p className='text-primary font-head '>+91 98765 43210</p>
                </div>
              </div>

              <div className='flex px-5  gap-4'>
                <Clock4 className='text-primary  flex-shrink-0'/>
                <div>
                <h6 className='font-body text-[#554243] text-base'>OPERATING HOURS</h6>
                <p className='text-primary font-head '>9 AM - 8 PM</p>
                </div>
              </div>

              <hr className='border-tertiary'/>
                 
              <div className='flex px-5 gap-4 text-primary'>
                 <ShieldCheck />
                 <h6 className='tracking-wider text-base'>PRIVACY GUARANTEED</h6>
              </div>

              <div className='flex px-5 gap-4 text-primary'>
                 <Timer />
                 <h6 className='tracking-wider text-base'>CALL WITHIN 24 HOURS</h6>
              </div>
               

          </div>
          <div className='m-6'>
             <form onSubmit={handleSubmit} className='w-full max-w-md flex flex-col  gap-6 border border-tertiary p-6 md:p-8 mx-auto shadow-xl'>
              <h6 className='text-primary font-head text-lg'>Request a callback</h6>
                <div className='flex flex-col gap-2'>
                <label htmlFor="name" className='text-[#554243]'>NAME</label> 
                <input type="text" name='name' value={formData.name} onChange={handleChange} id="name" className='border-b border-tertiary bg-neutral text-[#6B7280] p-2 outline-none' placeholder='Your Name' />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="mobile" className='text-[#554243]'>MOBILE NUMBER</label> 
                <input type="tel" name='mobile' value={formData.mobile} onChange={handleChange}  id="mobile" className='border-b border-tertiary bg-neutral text-[#6B7280] p-2 outline-none' placeholder='Your Number' />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="design" className='text-[#554243]'>DESIGN TYPE</label> 
                <select name='design' value={formData.design} onChange={handleChange} id="design" className='border-b border-tertiary bg-neutral text-[#6B7280] p-2 outline-none' > 
                  <option value="">Select</option>
                  <option value="bridal">Bridal</option>
                  <option value="simple">simple</option>
                </select>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="message" className='text-[#554243]'>MESSAGE (optional)</label> 
                <textarea name='message' value={formData.message} onChange={handleChange} id="message" cols="2"  rows="2" className='border-b border-tertiary bg-neutral p-3 text-[#6B7280] outline-none resize-none' placeholder='Share your vision' ></textarea>
              </div>
              
              <div className='flex flex-col gap-2 p-2'>
                <button type='submit' className='bg-primary p-2 text-white cursor-pointer hover:opacity-90 transition'>Submit Request</button>
              </div>
             </form>
          </div>
      </div>
        
    </section>

   

  )
}

export default ContactForm