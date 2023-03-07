import React from 'react'

const Contacts = () => {
  return (
    <section className='container mx-auto p-4 my-10' id='section-contacts'>
        <div>
            <h1 className='text-4xl lg:text-6xl text-center lg:text-left mb-10 mt-40 font-bold'>Kontaktai</h1>
        </div>

        {/* Flex Container */}
        <div className='flex flex-col lg:flex-row justify-between text-center'>
            {/* Address */}
            <div className='text-center lg:text-left w-full lg:w-1/2'>
                <address className='text-xl  pb-8'>
                    Melioratorių g. LT-96141, Gargždai
                </address>
                
                {/* Google Maps */}
                <iframe className='google-maps' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8991.271852805401!2d21.3856001!3d55.7095359!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e4e1f759d432dd%3A0xbcfb999c03f4aa61!2sStilingas%20%C5%AAsas!5e0!3m2!1slt!2slt!4v1677872935664!5m2!1slt!2slt" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* Work Time */}
            <div className='w-full lg:w-1/2'>
                <h2 className='text-xl font-bold'>Darbo Laikas:</h2>
                <ul className='mt-10 space-y-2'>
                    <li>Pirmadienis - 09-16</li>
                    <li>Antradienis - 09-16</li>
                    <li>Trečiadienis - 09-16</li>
                    <li>Ketvirtadienis - 09-16</li>
                    <li>Penktadienis - 09-16</li>
                    <li>Šeštadienis - Uždaryta</li>
                    <li>Sekmadienis - Uždaryta</li>
                    {/* Contact Icons */}
                    <div className='flex justify-center gap-8 navbar-contact-icons'>
                        <a href="tel:123-456-789" title='Paskambinti'><i class="fa-sharp fa-solid fa-phone text-2xl"></i></a>
                        <a href="mailto: abc@example.com" title='Parašyti'><i class="fa-sharp fa-solid fa-envelope text-3xl"></i></a>
                    </div>
                </ul>
            </div>
        </div>
         
    </section>
  )
}

export default Contacts