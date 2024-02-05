import React from 'react'
import poker from '../assets/images/poker.png'
import aviator from '../assets/images/aviator.png'
import sky2 from '../assets/images/sky2.png'
import sky3 from '../assets/images/sky3.png'

const Neusta = () => {
    return (
        <>
            <div className='relative z-[2]'>
                <div className='max-w-[1140px] mx-auto px-3 py-16'>
                    <div className='flex flex-wrap flex-row -mx-3'>
                        <div className='lg:w-1/2 w-full px-3 flex items-center lg:items-start justify-center lg:justify-start flex-col'>
                            <img src={poker} alt="poker" className='w-[50%] lg:w-[90%]'/>
                            <h2 className='text-white text-[48px] font-normal font-anton pt-5 lg:pt-14'>Nuestra Visión</h2>
                            <p className='font-inter font-medium text-[16px] text-white lg:max-w-[444px] text-center lg:text-start'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                            <p className='font-inter text-[16px] font-bold text-[#7AF57A] pt-5 cursor-pointer'>Aprende más {"-->"}</p>
                        </div>
                        <div className='lg:w-1/2 w-full px-3 flex items-center lg:items-start justify-center lg:justify-start flex-col'>
                            <img className='pt-16 block lg:hidden w-[50%] lg:w-[90%]' src={aviator} alt="aviator" />
                            <h2 className='text-white text-[48px] font-normal font-anton pt-5 lg:pt-0 '>Nuestra Misión</h2>
                            <p className='font-inter font-medium text-[16px] text-white lg:max-w-[444px] pt-2 text-center lg:text-start'>Nuestra misión es simple pero poderosa: proporcionarte la más amplia gama de soluciones de entretenimiento de alta calidad y rentabilidad. Estamos comprometidos a elevar tus expectativas y brindarte experiencias inigualables.</p>
                            <p className='font-inter text-[16px] font-bold text-[#7AF57A] pt-5 cursor-pointer'>Aprende más { "-->"}</p>
                            <img className='pt-16 hidden lg:block w-[50%] lg:w-[90%]' src={aviator} alt="aviator" />
                        </div>
                    </div>
                </div>
                <img src={sky3} alt="sky3" className='absolute bottom-[-87%] right-[0%] z-[-1] hidden lg:block' />
                <img src={sky2} alt="sky2" className='absolute top-[-16%] left-[0%]' />
            </div>
        </>
    )
}

export default Neusta