import React from 'react'
import ellos1 from '../assets/images/ellos1.png'
import ellos2 from '../assets/images/ellos2.png'
import ellos3 from '../assets/images/ellos3.png'
import sky2 from '../assets/images/skyblue.png'


const cards = [{
    bg: ellos1,
},
{
    bg: ellos2,
},
{
    bg: ellos3,
},
]
const Ellos = () => {
    const card = cards.map((cards, i) => (<div key={i} className="lg:w-1/3 sm:w-1/2 w-full px-3 flex justify-center group duration-[0.5s] mb-6" data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
        <div className="max-w-[364px] rounded-lg bg-[url(./assets/images/ellos1.png)] w-full h-[265px]  overflow-hidden relative " style={{ backgroundImage: `url(${cards.bg})` }}>
            <div className="absolute w-full  bg-[#000]/[0.7] max-w-[364px] h-[256px] flex justify-center top-[-100%] group-hover:top-0 left-0 items-center duration-500 hover:shadow-[7px_9px_15px_0px_#00000033]"><button className="text-white opacity-100 relative z-[2] border border-white rounded-full  after:content-[url(./assets/images/wline.png)]  py-[13px] px-[46px] border-solid after:absolute after:left-[-5%]  after:bottom-[-35%] font-inter font-bold text-base leading-[25.6px]">Rcasinovip</button></div>
        </div>
    </div>))
    return (
        <div className="lg:mt-[150px] pt-14 relative z-[2]" data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <div className='max-w-[1140px] mx-auto px-3 lg:pb-24 pb-12' >
                <h2 className='font-anton font-normal text-[48px] text-white text-center'>Ellos eligieron apostar con nosotros</h2>
                <div className="flex flex-wrap flex-row -mx-3 pt-12 justify-center">
                    {card}
                </div>
                <p className='font-inter font-semibold text-[16px] text-white max-w-[883px] text-center mx-auto pt-2'>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.
                    Ahora, la próxima apuesta está en tus manos.<br/>
                    Elige ganar. Elige exclusive game.</p>
            </div>
            <img src={sky2} alt="sky2" className='absolute top-[-82%] right-[-8%] z-[-1]  hidden md:block' />
        </div>
    );
};

export default Ellos



