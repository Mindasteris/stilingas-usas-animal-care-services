import React from 'react'

const Services = () => {
  return (
    <section className='container mx-auto mb-8 p-4 text-center' id='section-services'>
        <div>
            <h2 className='text-4xl lg:text-6xl lg:text-left font-bold mb-10 mt-40'>Paslaugos</h2>
        </div>

        {/* Services */}
        <div className='flex justify-center rounded-lg bg-black text-white'>
            <ul className='text-xl lg:text-2xl mt-4 services-list'>
                <li><i class="fa-solid fa-paw"></i>Maudymas</li>
                <li><i class="fa-solid fa-paw"></i>Kirpimas</li>
                <li><i class="fa-solid fa-paw"></i>Šukavimas</li>
                <li><i class="fa-solid fa-paw"></i>Kailio priežiūra</li>
                <li><i class="fa-solid fa-paw"></i>Konsultavimas</li>
            </ul>
        </div>
    </section>
  )
}

export default Services