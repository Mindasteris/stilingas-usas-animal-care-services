import React from 'react'
import dog4 from '../assets/pics/dog4.png'

const About = () => {
  return (
    <section className='container mx-auto p-4' id='section-about'>
        {/* About Us */}
        <div>
            <h1 className='text-4xl lg:text-6xl text-center lg:text-left mt-40 font-bold'>Apie mus</h1>
        </div>

        {/* Flex Container */}
       <div className='flex flex-col lg:flex-row justify-center items-center'>
            <div className='w-full lg:w-1/2'>
                <p className='p-4 mt-4 lg:p-0 w-full max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officia modi doloribus quidem beatae repudiandae officiis, aperiam, consequatur veritatis rerum provident. Repellendus recusandae architecto id quaerat deleniti, quisquam debitis rem? Ab accusamus eveniet maxime, obcaecati similique in corrupti, illo cupiditate rerum, quis itaque voluptates facilis aspernatur autem officia quo impedit quibusdam nulla quasi! Delectus aliquid totam beatae aliquam, placeat, suscipit ex nesciunt quisquam autem est dolorem? Magni, magnam iusto enim numquam perspiciatis hic officia, tempore atque cumque ut, voluptatum ab quasi minima aliquam corrupti velit commodi ipsam illum voluptatem. Laudantium asperiores voluptatem quod assumenda temporibus? Adipisci aliquam fuga laborum exercitationem.</p>
            </div>

            <div className='w-full lg:w-1/2'>
                <img src={dog4} alt="dog-4" className='mx-auto' />
            </div>
       </div>
    </section>
  )
}

export default About