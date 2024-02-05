import React from 'react'
import casino from '../assets/images/casino.png'

const Porque = () => {
    return (
        <>
            <div className='bg-white py-16 lg:py-0 relative z-[2]'>
                <div className='max-w-[1140px] px-3 mx-auto'>
                    <div className='flex flex-wrap flex-row -mx-3'>
                        <div className='lg:md:w-1/2 w-full px-3 flex justify-center items-center lg:items-start flex-col' data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <h2 className='font-anton font-normal text-[42px] sm:text-[48px]'>Por qué elegirnos</h2>
                            <p className='font-inter font-medium text-[16px] text-[#00141B] text-center lg:text-start pt-2'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>
                            <div className='flex'>
                                <button className='bg-gradient hover:text-white duration-[0.5s] font-inter font-bold text-base leading-[25px] p-[13px_46px_13px_46px] rounded-[41px] mt-6 sm:mt-12 relative after:absolute after:content-[url(./assets/images/gline.png)] after:top-[31px] after:left-[-6px]'>Aprende más</button>
                            </div>
                        </div>
                        <div className='lg:w-1/2 w-full px-3 pt-14 lg:pt-0' data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <img src={casino} alt="casino" className='mx-auto lg:mx-0' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Porque