import React from 'react'
import vevo1 from '../assets/images/vivo1.webp';
import vevo2 from '../assets/images/vivo2.webp';
import vevo3 from '../assets/images/vivo3.webp';
import skyb from '../assets/images/skyblue.png';

function Jeugos() {
    return (
        <>
            <div className='relative z-[2]'>
                <div className='max-w-[1140px] mx-auto px-3 mt-28 '>
                    <h2 className='font-anton font-normal text-[48px]  text-[#FFFF] leading-[57px] text-center'>Juegos en vivo</h2>
                    <div className='flex flex-row flex-wrap -mx-3 mt-14 justify-center'>
                        <div className='lg:w-4/12 sm:w-1/2 w-[90%] px-3 group flex justify-center'>
                            <div className='relative overflow-hidden rounded-[8px]'>
                                <img src={vevo1} alt="logo" className='w-full max-w-[364px] rounded-[8px]' />
                                <div className="absolute w-full  bg-[#000]/[0.7] max-w-[364px] h-[256px] flex justify-center top-[-103%] group-hover:top-0 left-0 items-center duration-500 hover:shadow-[7px_9px_15px_0px_#00000033]"><button className="text-white opacity-100 relative z-[2] border border-white rounded-full  after:content-[url(./assets/images/wline.png)]  py-[13px] px-[46px] border-solid after:absolute after:left-[-5%]  after:bottom-[-35%] font-inter font-bold text-base leading-[25.6px]">Reproducir ahora</button></div>
                            </div>
                        </div>
                        <div className='lg:w-4/12 sm:w-1/2 w-[90%] px-3 group pt-8 sm:pt-0 flex justify-center'>
                            <div className='relative overflow-hidden rounded-[8px]'>
                                <img src={vevo2} alt="logo" className='max-w-[364px] w-full rounded-[8px]' />
                                <div className="absolute w-full  bg-[#000]/[0.7] max-w-[364px] h-[256px] flex justify-center top-[-103%] group-hover:top-0 left-0 items-center duration-500 hover:shadow-[7px_9px_15px_0px_#00000033]"><button className="text-white opacity-100 relative z-[2] border border-white rounded-full  after:content-[url(./assets/images/wline.png)]  py-[13px] px-[46px] border-solid after:absolute after:left-[-5%]  after:bottom-[-35%] font-inter font-bold text-base leading-[25.6px]">Reproducir ahora</button></div>
                            </div>
                        </div>
                        <div className='lg:w-4/12 sm:w-1/2 w-[90%] px-3 group pt-8 lg:pt-0 flex justify-center'>
                            <div className='relative overflow-hidden rounded-[8px]'>
                                <img src={vevo3} alt="logo" className='w-full max-w-[364px] rounded-[8px]' />
                                <div className="absolute w-full  bg-[#000]/[0.7] max-w-[364px] h-[256px] flex justify-center top-[-103%] group-hover:top-0 left-0 items-center duration-500 hover:shadow-[7px_9px_15px_0px_#00000033]"><button className="text-white opacity-100 relative z-[2] border border-white rounded-full  after:content-[url(./assets/images/wline.png)]  py-[13px] px-[46px] border-solid after:absolute after:left-[-5%]  after:bottom-[-35%] font-inter font-bold text-base leading-[25.6px]">Reproducir ahora</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={skyb} alt="sky3" className='absolute bottom-[-116%] right-[0%] z-[-1]' />
            </div>
        </>
    )
}

export default Jeugos