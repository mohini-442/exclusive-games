import React from 'react'
import logo from '../assets/images/logo.png'
import { useState } from 'react';


const Mynav = () => {
    const [show, setshow] = useState(true);
    function nav() {
        setshow(!show);
        document.body.classList.toggle("max-lg:!overflow-hidden")
    }
    return (
        <>
            <div className="max-w-[1140px] mx-auto px-3 py-5">
                <div className="flex items-center justify-between">
                    <img src={logo} alt="logo" className='cursor-pointer'/>
                    <ul
                        className={`flex items-center gap-7 mobileView ${show ? "right-[-100%]" : "right-0"}`} >
                        <li>
                            <a href="" className="font-inter font-medium font-base text-[#d2d8da] duration-[0.5s] hover:text-[#ffffff]">
                                Hogar
                            </a>
                        </li>
                        <li>
                            <a href="" className="font-inter font-medium font-base text-[#d2d8da] duration-[0.5s] hover:text-[#ffffff]">
                                Misión
                            </a>
                        </li>
                        <li>
                            <a href="" className="font-inter font-medium font-base text-[#d2d8da] duration-[0.5s] hover:text-[#ffffff]">
                                Tragamonedas
                            </a>
                        </li>
                        <li>
                            <a href="" className="font-inter font-medium font-base text-[#d2d8da] duration-[0.5s] hover:text-[#ffffff]">
                                Por qué elegirnos
                            </a>
                        </li>
                        <li>
                            <a href="" className="font-inter font-medium font-base text-[#d2d8da] duration-[0.5s] hover:text-[#ffffff]">
                                Ofertas
                            </a>
                        </li>
                        <li className='lg:hidden block '>
                            <a href="" className='p-[13px_46px_13px_46px] text-base font-bold font-inter text-[#FFFFFF] border-solid border-[1px] rounded-[41px] gap-[10px] duration-[0.5s] relative after:absolute after:content-[url(./assets/images/wline.png)] after:top-[31px] after:left-[-6px] '>Acceso</a>
                        </li>
                    </ul>
                    <li className='lg:block hidden '>
                        <a href="" className='p-[13px_46px_13px_46px] text-base font-bold font-inter text-[#FFFFFF] hover:bg-gradient duration-[0.5s] border-solid border-[1px] rounded-[41px] gap-[10px] relative after:absolute after:content-[url(./assets/images/wline.png)] after:top-[26px] after:left-[-6px] '>Acceso</a>
                    </li>
                    <label className=" lg:hidden" onClick={nav}>
                        {show ? (
                            <div className="z-20 relative pl-2">
                                <span className="flex bg-[#ffff] h-[3px] rounded-3xl duration-300 w-6"></span>
                                <span className="flex bg-[#ffff] h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                                <span className="flex bg-[#ffff] h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                            </div>
                        ) : (
                            <div className="z-20 relative">
                                <span className="flex bg-[#ffff] absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                                <span className="flex bg-[#ffff] absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
                            </div>
                        )}
                    </label>
                </div>
            </div>
        </>
    )
}
export default Mynav