import React from "react";
import sky2 from '../assets/images/sky2.png'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <div className="relative ">
            <svg
                xmlns="http://www.w3.oyg/1700/svg"
                width="21"
                height="2"
                viewBox="0 0 21 2"
                fill="white"
                className={`${id === open ? "" : "rotate-90"
                    } h-5 w-5   transition-transform`}
            >
                <path
                    d="M1.69629 1H19.6963"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </svg>
            <svg
                className="absolute rotate-0 top-[9px]"
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="2"
                viewBox="0 0 21 2"
                fill="white"
            >
                <path
                    d="M1.69629 1H19.6963"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </svg>
        </div>
    );
}

const Myaccordian = () => {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className="relative z-[2]">
            <div className="max-w-[970px] mx-auto px-3 py-12">
                <div className="">
                    <h2 className="text-[42px] sm:text-5xl font-anton leading-[120%] font-normal text-center pb-[60px] text-white" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        Preguntas más frecuentes
                    </h2>
                    <Accordion
                        className=" border-[#80898D] border mb-8 rounded-[10px] py-4 px-5" data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        open={open === 1}
                        icon={<Icon id={1} open={open} />}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className="font-anton text-[18px] sm:text-[20px] md:text-[20px] py-0 text-start font-normal text-white leading-[130%] border-0 "
                        >
                            ¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis
                            plataformas de juegos?
                        </AccordionHeader>
                        <AccordionBody className="font-inter text-[14px] sm:text-base md:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
                            En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
                            respaldadas por más de 15 años de dedicación al desarrollo de
                            multiplataformas para juegos de azar.
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        className=" border-[#80898D] border mb-8 rounded-[10px] py-4 px-5  overflow-hidden" data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        open={open === 2}
                        icon={<Icon id={2} open={open} />}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className="font-anton text-[16px] sm:text-[20px] py-0 text-start font-normal text-white leading-[130%] border-0 "
                        >
                            {" "}
                            ¿Cómo garantizan la seguridad de las operaciones en sus juegos?
                        </AccordionHeader>
                        <AccordionBody className="font-anter text-[14px] sm:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
                            En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
                            respaldadas por más de 15 años de dedicación al desarrollo de
                            multiplataformas para juegos de azar.
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        className=" border-[#80898D] border mb-8 rounded-[10px] py-4 px-5 " data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        open={open === 3}
                        icon={<Icon id={3} open={open} />}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(3)}
                            className="font-anton text-[16px] sm:text-[20px] py-0 text-start font-normal text-white leading-[130%] border-0 "
                        >
                            {" "}
                            ¿Cuáles son las opciones de juego disponibles en las versiones
                            Silver, Luxury y Platinum?
                        </AccordionHeader>
                        <AccordionBody className="font-inter text-[14px] sm:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
                            En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
                            respaldadas por más de 15 años de dedicación al desarrollo de
                            multiplataformas para juegos de azar.
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        className=" border-[#80898D] border mb-8 rounded-[10px] py-4 px-5 " data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        open={open === 4}
                        icon={<Icon id={4} open={open} />}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(4)}
                            className="font-anton text-[16px] sm:text-[20px] py-0 text-start font-normal text-white leading-[130%] border-0 "
                        >
                            ¿Cuánto tiempo lleva crear una plataforma con Juegos Exclusivos?
                        </AccordionHeader>
                        <AccordionBody className="font-inter text-[14px] sm:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
                            En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
                            respaldadas por más de 15 años de dedicación al desarrollo de
                            multiplataformas para juegos de azar.
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        className=" border-[#80898D] border mb-8 rounded-[10px] py-4 px-5 " data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        open={open === 5}
                        icon={<Icon id={5} open={open} />}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(5)}
                            className="font-anton text-[16px] sm:text-[20px] py-0 text-start font-normal text-white leading-[130%] border-0 "
                        >
                            ¿Qué métodos de pago aceptan?
                        </AccordionHeader>
                        <AccordionBody className="font-inter text-[14px] sm:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
                            En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
                            respaldadas por más de 15 años de dedicación al desarrollo de
                            multiplataformas para juegos de azar.
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        className=" border-[#80898D] border mb-8 rounded-[10px] py-4 px-5 " data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        open={open === 6}
                        icon={<Icon id={6} open={open} />}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(6)}
                            className="font-anton text-[16px] sm:text-[20px] py-0 text-start font-normal text-white leading-[130%] border-0 "
                        >
                            ¿Puedo probar sus juegos antes de comprometerme?
                        </AccordionHeader>
                        <AccordionBody className="font-inter text-[14px] sm:text-[16px] font-medium leading-[160%] text-[#CCD0D1] max-w-[880px] pt-2 pb-0 ">
                            En Exclusive Games, ofrecemos experiencias únicas y personalizadas,
                            respaldadas por más de 15 años de dedicación al desarrollo de
                            multiplataformas para juegos de azar.
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
            <img src={sky2} alt="sky2" className="absolute top-[-35%] z-[-1] left-[0%] h-[92%]  hidden md:block" />
        </div>
    );
};

export default Myaccordian;