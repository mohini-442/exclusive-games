import React from 'react'
import pic1 from '../assets/images/pic1.webp';
import pic2 from '../assets/images/pic2.webp';
import pic3 from '../assets/images/pic3.webp';
import pic4 from '../assets/images/pic4.webp';
import pic5 from '../assets/images/pic5.webp';
import pic6 from '../assets/images/pic6.webp';


const cards = [{
    bg: pic1,
},
{
    bg: pic2,
},
{
    bg: pic3,
},
{
    bg: pic4,
},
{
    bg: pic5,
},
{
    bg: pic6,
},

]
const Slots = () => {
    const card = cards.map((cards, i) => (<div key={i} className="lg:w-1/3 sm:w-1/2 w-full px-3 flex justify-center group duration-500 mb-6">
        <div className="max-w-[364px] rounded-lg bg-[url(./assets/images/pic1.webp)] w-full h-[265px]  overflow-hidden relative " style={{ backgroundImage: `url(${cards.bg})` }} data-aos="flip-left">
            <div className="absolute w-full  bg-[#2C2B2B]/[0.8] max-w-[364px] h-[265px] flex justify-center top-[-100%] group-hover:top-0 left-0 items-center duration-500"><button className="text-white opacity-100 relative z-[2] border border-white after:content-[url(./assets/images/wline.webp)]  rounded-full py-[13px] px-[46px] border-solid after:absolute after:left-[-5%]  after:bottom-[-31%] font-inter font-bold text-base leading-[25.6px]">Jugar</button></div>
        </div>
    </div>))
    return (
        <div className="lg:mt-[100px] pt-20">
            <h2 className=" font-anton text-5xl text-center leading-[57.6px] text-[#00141B] font-normal  mb-4 " data-aos="fade-up">
                Slots
            </h2>
            <p className=" font-inter text-center text-base font-medium leading-[25.6px] text-[#00141B] max-w-[904px] mx-auto mb-[60px] " data-aos="fade-up">
                En Exclusive Games, ofrecemos una selección de más de 600 juegos de los
                principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic,
                IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja
                incansablemente para innovar y ampliar nuestra oferta de experiencias,
                garantizando la máxima seguridad con operaciones protegidas por cifrado
                SSL de 256 bits.
            </p>
            <div className="flex flex-wrap flex-row -mx-3">
                {card}
            </div>
            <div className='flex justify-center' data-aos="fade-up">
                <button className='bg-gradient hover:text-white duration-[0.5s] font-inter font-bold text-base leading-[25px] p-[13px_46px_13px_46px] rounded-[41px] sm:mt-12 relative after:absolute after:content-[url(./assets/images/gline.png)] after:top-[31px] after:left-[-6px] '>Mostrar más</button>
            </div>
        </div>
    );
};

export default Slots