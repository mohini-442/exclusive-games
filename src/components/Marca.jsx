import React from 'react'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import arrow1 from '../assets/images/arrow1.png'
import arrow2 from '../assets/images/arrow2.png'
import Slots from './Slots'


const Marca = () => {
    return (
        <div className='bg-white py-16 lg:py-0'>
            <div className="max-w-[1140px] mx-auto px-3">
                <h2 className=" font-anton text-[#00141B] text-5xl text-center mb-[60px]">
                    Nuestros Atributos de Marca
                </h2>
                <div className="flex flex-wrap flex-row -mx-3 relative pt-8 justify-center">
                    <img src={arrow1} alt="a" className="hidden lg:block absolute left-[19%] top-[12%]" />
                    <img src={arrow2} alt="a" className="hidden lg:block absolute right-[19%] top-[28%]" />
                    <div className="lg:w-1/3 sm:w-1/2 w-full px-3  flex justify-center lg:justify-start">
                        <div className="max-w-[263px] flex flex-col items-center">
                            <div className='w-[100px] h-[100px] rounded-[73px] bg-[#f5fff5] flex items-center justify-center'>
                                <img src={img1} alt="img1" />
                            </div>
                            <h3 className=" font-anton text-[#00141B] text-xl leading-[26px] font-normal text-center mb-2.5 pt-4">
                                Inteligencia
                            </h3>
                            <p className="text-center font-inter text-base  font-medium leading-[25.6px] text-[#00141B]">
                                Comprendemos a la perfección los gustos de las personas y el
                                mundo del gaming.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 w-full px-3 flex justify-center  pt-12 sm:pt-0">
                        <div className="max-w-[235px] flex flex-col items-center">
                            <div className='w-[100px] h-[100px] rounded-[73px] bg-[#f5fff5] flex items-center justify-center'>
                                <img src={img2} alt="img2" />
                            </div>
                            <h3 className="font-anton text-[#00141B] text-xl leading-[26px] font-normal text-center mb-2.5 pt-4">Proactividad</h3>
                            <p className="text-center font-inter text-base  font-medium leading-[25.6px] text-[#00141B]">Somos creadores de cambios que exploran nuevas formas de entretenimiento.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2 w-full px-3 flex justify-center lg:justify-end pt-12 lg:pt-0">
                        <div className="max-w-[244px] flex flex-col items-center">
                            <div className='w-[100px] h-[100px] rounded-[73px] bg-[#f5fff5] flex items-center justify-center'>
                                <img src={img3} alt="img3" />
                            </div>
                            <h3 className="font-anton text-[#00141B] text-xl leading-[26px] font-normal text-center mb-2.5 pt-4">Innovación</h3>
                            <p className="text-center font-inter text-base  font-medium leading-[25.6px] text-[#00141B]">Pensamos fuera de la caja para estar siempre un paso adelante.</p>
                        </div>
                    </div>
                </div>
                <Slots />
            </div>
        </div>
    )
}

export default Marca