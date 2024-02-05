import React from 'react'

const Lanza2 = () => {
    return (
        <>
            <div className='max-w-[1140px] mx-auto px-3 lg:py-32 pb-12' data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"> 
                <div className='bg-[url(./assets/images/lanza2.png)] mx-[8%] sm:mx-auto bg-no-repeat bg-center  flex items-center justify-center max-w-[1140px] h-[341px] rounded-[16px] border-[0.5px] border-solid border-white flex-col'>
                    <h2 className='font-anton text-[32px] text-white font-normal text-center'>Lanza tu propia plataforma en sólo 2 semanas</h2>
                    <div className='flex justify-center'>
                        <button className='bg-gradient hover:text-white duration-[0.5s] font-inter font-bold text-base leading-[25px] p-[13px_46px_13px_46px] rounded-[41px] mt-10 relative after:absolute after:content-[url(./assets/images/gline.png)] after:top-[31px] after:left-[-6px] '>Leer más</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lanza2