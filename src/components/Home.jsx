import React from 'react'
import dog1 from '../assets/pics/dog1.jpg'
import dog2 from '../assets/pics/dog2.jpg'
import dog3 from '../assets/pics/dog3.jpg'

const Home = () => {
  return (
    <section className='container mx-auto mt-8 p-4' id='section-main'>
      <h1 className='text-4xl lg:text-6xl mb-10 mt-40 text-center lg:text-left font-bold'>Priežiūra</h1>
        {/* Flex Container */}
        <div className='flex flex-col lg:flex-row justify-between items-center xl:px-20'>
            {/* 1 */}
            <div className='w-full lg:w-1/2'>
                <img src={dog1} alt="" className='w-96 max-w-md mx-auto rounded-full mt-5' />
            </div>

            {/* 2 */}
            <div className='w-full lg:w-1/2 p-2'>
                <h1 className='my-4 font-bold border-b-2 border-blue-500'>Lorem Ipsun</h1>
                <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, non. Quo eius suscipit incidunt, fugiat quibusdam inventore similique, repellat reiciendis facilis dolor, ipsum quam illum enim dolore beatae impedit! Rerum, ut totam alias pariatur aspernatur sunt blanditiis illum earum assumenda error et voluptates natus quas sapiente numquam reprehenderit maiores incidunt non tempore nostrum facilis corporis impedit. Nihil nisi maiores deserunt. Quisquam saepe nobis quidem totam excepturi commodi modi in odit aut perspiciatis velit porro quasi deserunt minus dolore, dicta similique nesciunt voluptas. Est quos repudiandae magnam, aperiam eaque excepturi iure? Sed iste consectetur laborum illum in necessitatibus odit aliquam ad.</p>
            </div>
        </div>

        {/* Flex Container 2 */}
        <div className='flex flex-col lg:flex-row-reverse justify-between items-center my-32 xl:px-20'>
            {/* 1 */}
            <div className='w-full lg:w-1/2'>
                <img src={dog2} alt="" className='w-96 max-w-md mx-auto rounded-full' />
            </div>

            {/* 2 */}
            <div className='w-full lg:w-1/2 p-2'>
                <h1 className='my-4 font-bold border-b-2 border-green-500'>Lorem Ipsun</h1>
                <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, non. Quo eius suscipit incidunt, fugiat quibusdam inventore similique, repellat reiciendis facilis dolor, ipsum quam illum enim dolore beatae impedit! Rerum, ut totam alias pariatur aspernatur sunt blanditiis illum earum assumenda error et voluptates natus quas sapiente numquam reprehenderit maiores incidunt non tempore nostrum facilis corporis impedit. Nihil nisi maiores deserunt. Quisquam saepe nobis quidem totam excepturi commodi modi in odit aut perspiciatis velit porro quasi deserunt minus dolore, dicta similique nesciunt voluptas. Est quos repudiandae magnam, aperiam eaque excepturi iure? Sed iste consectetur laborum illum in necessitatibus odit aliquam ad.</p>
            </div>
        </div>

        {/* Flex Container 3 */}
        <div className='flex flex-col lg:flex-row justify-between items-center my-32 xl:px-20'>
            {/* 1 */}
            <div className='w-full lg:w-1/2'>
                <img src={dog3} alt="" className='w-96 max-w-md mx-auto rounded-full' />
            </div>

            {/* 2 */}
            <div className='w-full lg:w-1/2 p-2'>
                <h1 className='my-4 font-bold border-b-2 border-yellow-500'>Lorem Ipsun</h1>
                <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, non. Quo eius suscipit incidunt, fugiat quibusdam inventore similique, repellat reiciendis facilis dolor, ipsum quam illum enim dolore beatae impedit! Rerum, ut totam alias pariatur aspernatur sunt blanditiis illum earum assumenda error et voluptates natus quas sapiente numquam reprehenderit maiores incidunt non tempore nostrum facilis corporis impedit. Nihil nisi maiores deserunt. Quisquam saepe nobis quidem totam excepturi commodi modi in odit aut perspiciatis velit porro quasi deserunt minus dolore, dicta similique nesciunt voluptas. Est quos repudiandae magnam, aperiam eaque excepturi iure? Sed iste consectetur laborum illum in necessitatibus odit aliquam ad.</p>
            </div>
        </div>
    </section>
  )
}

export default Home