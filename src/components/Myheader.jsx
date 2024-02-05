import React from 'react'

function Myheader() {
    return (
        <div>
            <div className='max-w-[1140px] mx-auto px-3 mt-32'>
                <h2 className='font-anton text-[72px] font-normal text-[#ffffff] mx-auto  lg:max-w-[505px] leading-[86px] text-center uppercase'>Exclusive Games. Pasión por ganar</h2>
                <p className='font-inter text-base font-medium text-[#ffff] leading-[25px] lg:max-w-[727px] opacity-[80%] text-center mx-auto pt-9'>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
                <div className='flex justify-center'>
                    <button className='bg-gradient font-inter font-bold text-base leading-[25px] p-[13px_46px_13px_46px] rounded-[41px] mt-12 relative after:absolute after:content-[url(./assets/images/gline.png)] after:top-[31px] after:left-[-6px] '>Empezar</button>
                </div>

            </div>


        </div>
    )
}

export default Myheader