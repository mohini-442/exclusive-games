import React from 'react'
import imgg from '../assets/images/777.webp'
import bulb from '../assets/images/blub.png'
import people from '../assets/images/pp.webp'
import ruppee from '../assets/images/ruppee.webp'
import sky2 from '../assets/images/sky2.png'
import skyb from '../assets/images/skyblue.png'


const Elegirnos = () => {
    return (
        <>
            <div className='bg-[#00141b]'>
                <div className='relative z-[2]'>
                    <div className='max-w-[1140px] px-3 mx-auto py-12 mt-10 lg:mt-0'>
                        <div className='flex flex-wrap flex-row -mx-3'>
                            <div className='lg:w-1/2 w-full px-3 flex justify-center lg:justify-start' data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <img src={imgg} alt="777" className='w-[90%] lg:w-[558px] lg:h-[514px] lg:pr-5 object-cover rounded-[16px]' />
                            </div>
                            <div className='lg:w-1/2 w-full px-3 flex  flex-col items-center lg:items-start pt-8 lg:pt-0' data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <h2 className=' text-[38px] md:text-[48px] font-normal font-anton text-white text-center lg:text-start'>Más razones para elegirnos</h2>
                                <div className='p-[0.5px] max-w-[374px] h-[116px] w-full rounded-[16px] mt-12  duration-[0.5s] hover:scale-[1.02]'>
                                    <div className='max-w-[374px] grounded-radiants flex items-center justify-center  h-[116px] rounded-[16px]   bg-[#00141b] p-[24px_56px_24px_56px] gap-[37px]'>
                                        <div className='flex items-center gap-10'>
                                            <img src={bulb} alt="bulb" />
                                            <div className=''>
                                                <h3 className='text-white font-anton text-[32px] font-normal'>200</h3>
                                                <p className='font-inter font-medium text-[16px] text-white'>Páginas creadas</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-[0.5px] max-w-[374px] h-[116px] w-full rounded-[16px] mt-6  duration-[0.5s] hover:scale-[1.02]'>
                                    <div className='max-w-[374px] grounded-radiants flex items-center justify-center h-[116px] rounded-[16px]   bg-[#00141b] p-[24px_56px_24px_56px] gap-[37px]'>
                                        <div className='flex items-center gap-10'>
                                            <img src={people} alt="people" />
                                            <div className=''>
                                                <h3 className='text-white font-anton text-[32px] font-normal'>98%</h3>
                                                <p className='font-inter font-medium text-[16px] text-white text-nowrap'>Clientes Satisfechas</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='p-[0.5px] max-w-[374px] h-[116px] w-full rounded-[16px] mt-6 duration-[0.5s] hover:scale-[1.02]'>
                                    <div className='max-w-[374px] grounded-radiants flex items-center justify-center h-[116px] rounded-[16px]   bg-[#00141b] p-[24px_56px] gap-[37px]'>
                                        <div className='flex items-center gap-10'>
                                            <img src={ruppee} alt="ruppee" />
                                            <div className=''>
                                                <h3 className='text-white font-anton text-[32px] font-normal'>200</h3>
                                                <p className='font-inter font-medium text-[16px] text-white'>Divisas Disponibles</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={sky2} alt="sky2" className='absolute top-[-50%] left-[0%] z-[-1]  w-[60%] h-[87%] hidden lg:block' />
                    <img src={skyb} alt="sky2" className='absolute bottom-[-91%] right-[0%] z-[-1]  hidden lg:block' />
                </div>
            </div>
        </>
    )
}

export default Elegirnos