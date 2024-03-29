import React from "react";
import logo from "../assets/images/logo.png";
import e1 from '../assets/images/footerb1.png';
import e2 from '../assets/images/footere2.png'


const Myfooter = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="bg-[#000000] md:pb-5 pb-8 pt-10 relative z-[2]">
            <div className="max-w-[1140px] px-3 mx-auto" data-aos="fade-up"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <div className="flex flex-row flex-wrap -mx-3 pb-12">
                    <div className="xl:w-5/12 px-3 w-full pt-7" data-aos="fade-down-right">
                        <img src={logo} alt="footlogo" className="cursor-pointer" />
                        <p className="text-[#cccccc] text-base font-inter leading-[25px] max-w-[369px] pt-4 font-medium">
                            En Exclusive Games somos un equipo apasionado de personas dedicadas al desarrollo de multiplataformas para juegos de azar
                        </p>
                        <div className='flex gap-3 pt-4'>
                            <a href="https://www.instagram.com/"
                                target="_blank"
                                className=" hover:duration-300 hover:scale-[1.1]"  >
                                <svg className="group-hover:scale-[300%] duration-300" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#FEFEFE" fill-opacity="0.16" />
                                    <path d="M16.9254 6.65345C17.5821 6.65093 18.2389 6.65753 18.8954 6.67325L19.07 6.67955C19.2716 6.68675 19.4705 6.69575 19.7108 6.70655C20.6684 6.75155 21.3217 6.90274 21.895 7.12504C22.489 7.35363 22.9894 7.66322 23.4898 8.1636C23.9473 8.61323 24.3014 9.15712 24.5274 9.75745C24.7497 10.3307 24.9009 10.985 24.9459 11.9426C24.9567 12.182 24.9657 12.3818 24.9729 12.5833L24.9783 12.7579C24.9943 13.4142 25.0012 14.0706 24.999 14.7271L24.9999 15.3985V16.5774C25.0021 17.2342 24.9952 17.8909 24.9792 18.5474L24.9738 18.722C24.9666 18.9236 24.9576 19.1225 24.9468 19.3628C24.9018 20.3204 24.7488 20.9738 24.5274 21.547C24.3021 22.148 23.9479 22.6923 23.4898 23.1418C23.0397 23.5993 22.4956 23.9533 21.895 24.1795C21.3217 24.4017 20.6684 24.5529 19.7108 24.5979C19.4705 24.6087 19.2716 24.6177 19.07 24.6249L18.8954 24.6303C18.2389 24.6463 17.5821 24.6532 16.9254 24.651L16.254 24.6519H15.0759C14.4192 24.6542 13.7625 24.6473 13.1059 24.6312L12.9313 24.6258C12.7177 24.6181 12.5041 24.6091 12.2905 24.5988C11.333 24.5538 10.6796 24.4008 10.1054 24.1795C9.50485 23.9539 8.96087 23.5997 8.51157 23.1418C8.05352 22.6921 7.6991 22.1478 7.473 21.547C7.25071 20.9738 7.09952 20.3204 7.05452 19.3628C7.04449 19.1493 7.03549 18.9357 7.02752 18.722L7.02302 18.5474C7.00643 17.8909 6.99893 17.2342 7.00052 16.5774V14.7271C6.99801 14.0706 7.00461 13.4142 7.02032 12.7579L7.02662 12.5833C7.03382 12.3818 7.04282 12.182 7.05362 11.9426C7.09862 10.9841 7.24981 10.3316 7.4721 9.75745C7.69833 9.15682 8.05345 8.61308 8.51247 8.1645C8.96146 7.70619 9.5051 7.35144 10.1054 7.12504C10.6796 6.90274 11.3321 6.75155 12.2905 6.70655L12.9313 6.67955L13.1059 6.67505C13.7622 6.65847 14.4186 6.65097 15.075 6.65255L16.9254 6.65345ZM16.0002 11.1533C15.404 11.1449 14.812 11.255 14.2588 11.4773C13.7055 11.6997 13.2019 12.0298 12.7773 12.4484C12.3527 12.867 12.0155 13.3659 11.7854 13.916C11.5552 14.4661 11.4367 15.0564 11.4367 15.6527C11.4367 16.249 11.5552 16.8393 11.7854 17.3894C12.0155 17.9395 12.3527 18.4383 12.7773 18.857C13.2019 19.2756 13.7055 19.6057 14.2588 19.828C14.812 20.0504 15.404 20.1605 16.0002 20.1521C17.1936 20.1521 18.3382 19.678 19.1821 18.8341C20.026 17.9902 20.5001 16.8457 20.5001 15.6522C20.5001 14.4588 20.026 13.3143 19.1821 12.4704C18.3382 11.6265 17.1936 11.1533 16.0002 11.1533ZM16.0002 12.9532C16.3589 12.9466 16.7152 13.0116 17.0485 13.1442C17.3818 13.2769 17.6853 13.4746 17.9412 13.7259C18.1972 13.9772 18.4006 14.2769 18.5394 14.6077C18.6783 14.9384 18.7498 15.2935 18.7499 15.6522C18.7499 16.0109 18.6785 16.3661 18.5398 16.6969C18.401 17.0276 18.1978 17.3275 17.9419 17.5788C17.686 17.8302 17.3826 18.028 17.0493 18.1608C16.7161 18.2936 16.3598 18.3586 16.0011 18.3522C15.2851 18.3522 14.5983 18.0677 14.092 17.5614C13.5857 17.055 13.3012 16.3683 13.3012 15.6522C13.3012 14.9362 13.5857 14.2495 14.092 13.7431C14.5983 13.2368 15.2851 12.9523 16.0011 12.9523L16.0002 12.9532ZM20.7251 9.80334C20.4347 9.81496 20.1601 9.93847 19.9588 10.148C19.7575 10.3575 19.6451 10.6368 19.6451 10.9274C19.6451 11.218 19.7575 11.4973 19.9588 11.7068C20.1601 11.9163 20.4347 12.0398 20.7251 12.0515C21.0234 12.0515 21.3096 11.9329 21.5205 11.722C21.7315 11.511 21.85 11.2249 21.85 10.9265C21.85 10.6281 21.7315 10.342 21.5205 10.131C21.3096 9.92007 21.0234 9.80154 20.7251 9.80154V9.80334Z" fill="#FEFEFE" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/"
                                target="_blank"
                                className="duration-300 hover:scale-[1.1]" >
                                <svg className="group-hover:!scale-[150%] duration-300" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#FEFEFE" fill-opacity="0.16" />
                                    <path d="M18 17.1523H20.5L21.5 13.1523H18V11.1523C18 10.1223 18 9.15234 20 9.15234H21.5V5.79234C21.174 5.74934 19.943 5.65234 18.643 5.65234C15.928 5.65234 14 7.30934 14 10.3523V13.1523H11V17.1523H14V25.6523H18V17.1523Z" fill="#FEFEFE" />
                                </svg>

                            </a>
                            <a href="https://in.linkedin.com/"
                                target="_blank"
                                className="group duration-300 hover:scale-[1.1]" >
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#FEFEFE" fill-opacity="0.16" />
                                    <path d="M9.14352 7C8.60247 7 8.08359 7.21493 7.70102 7.5975C7.31844 7.98008 7.10352 8.49896 7.10352 9.04C7.10352 9.58104 7.31844 10.0999 7.70102 10.4825C8.08359 10.8651 8.60247 11.08 9.14352 11.08C9.68456 11.08 10.2034 10.8651 10.586 10.4825C10.9686 10.0999 11.1835 9.58104 11.1835 9.04C11.1835 8.49896 10.9686 7.98008 10.586 7.5975C10.2034 7.21493 9.68456 7 9.14352 7ZM7.22352 12.76C7.19169 12.76 7.16117 12.7726 7.13866 12.7951C7.11616 12.8177 7.10352 12.8482 7.10352 12.88V25.36C7.10352 25.4262 7.15728 25.48 7.22352 25.48H11.0635C11.0953 25.48 11.1259 25.4674 11.1484 25.4449C11.1709 25.4223 11.1835 25.3918 11.1835 25.36V12.88C11.1835 12.8482 11.1709 12.8177 11.1484 12.7951C11.1259 12.7726 11.0953 12.76 11.0635 12.76H7.22352ZM13.4635 12.76C13.4317 12.76 13.4012 12.7726 13.3787 12.7951C13.3562 12.8177 13.3435 12.8482 13.3435 12.88V25.36C13.3435 25.4262 13.3973 25.48 13.4635 25.48H17.3035C17.3353 25.48 17.3659 25.4674 17.3884 25.4449C17.4109 25.4223 17.4235 25.3918 17.4235 25.36V18.64C17.4235 18.1626 17.6132 17.7048 17.9507 17.3672C18.2883 17.0296 18.7461 16.84 19.2235 16.84C19.7009 16.84 20.1587 17.0296 20.4963 17.3672C20.8339 17.7048 21.0235 18.1626 21.0235 18.64V25.36C21.0235 25.4262 21.0773 25.48 21.1435 25.48H24.9835C25.0153 25.48 25.0459 25.4674 25.0684 25.4449C25.0909 25.4223 25.1035 25.3918 25.1035 25.36V17.0848C25.1035 14.7549 23.0779 12.9328 20.7595 13.143C20.0422 13.2083 19.3395 13.3859 18.6773 13.6691L17.4235 14.2067V12.88C17.4235 12.8482 17.4109 12.8177 17.3884 12.7951C17.3659 12.7726 17.3353 12.76 17.3035 12.76H13.4635Z" fill="#FEFEFE" />
                                </svg>

                            </a>
                        </div>
                    </div>
                    <div className="xl:w-7/12 px-3 pt-7 md:pt-10 w-full" data-aos="fade-up-left">
                        <div className="flex flex-row flex-wrap -mx-3">
                            <div className="md:w-4/12 w-1/2 px-3">
                                <ul>
                                    <li className="text-[#ffffff] text-base font-inter leading-[25px] lg:max-w-[369px] font-bold pb-4 ">
                                        Menú principal
                                    </li>
                                    <li className="pb-3 ">
                                        <a href="" className="text-[#cccccc] text-base font-inter leading-[25px] lg:max-w-[369px] font-medium  hover:text-[#ffff] transition-all duration-500 " > Hogar
                                        </a>
                                    </li>
                                    <li className="pb-3 ">
                                        <a href="" className="text-[#cccccc] text-base font-inter leading-[25px] lg:max-w-[369px]  font-medium  hover:text-[#ffff] transition-all duration-500 "
                                        >
                                            Misión
                                        </a>
                                    </li>
                                    <li className="pb-3">
                                        <a
                                            href=""
                                            className="text-[#cccccc] text-base font-inter leading-[25px] lg:max-w-[369px] font-medium hover:text-[#ffff] transition-all duration-500"
                                        >
                                            Tragamonedas
                                        </a>
                                    </li>
                                    <li className="pb-3">
                                        <a
                                            href=""
                                            className="text-[#cccccc] text-base font-inter leading-[25px] lg:max-w-[369px] font-medium  hover:text-[#ffff] transition-all duration-500"
                                        >
                                            Por qué elegirnos
                                        </a>
                                    </li>
                                    <li className="pb-3">
                                        <a
                                            href=""
                                            className="text-[#cccccc] text-base font-inter leading-[25px] lg:max-w-[369px]  font-medium  hover:text-[#ffff] transition-all duration-500"
                                        >
                                            Ofertas
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="md:w-4/12 w-1/2 px-3">
                                <ul>
                                    <li className="text-[#ffffff] text-base font-inter leading-[25px] lg:max-w-[369px] font-bold pb-4">
                                        Atención al cliente
                                    </li>
                                    <li className="pb-3">
                                        <a
                                            href=""
                                            className="text-[#cccccc] text-base font-inter leading-[25px] lg:max-w-[369px] font-medium  hover:text-[#ffff] transition-all duration-500"
                                        >
                                            ¿Necesitas ayuda?
                                        </a>
                                    </li>
                                    <li className="pb-3">
                                        <a
                                            href=""
                                            className="text-[#cccccc] text-base font-inter leading-[25px] lg:max-w-[369px] font-medium  hover:text-[#ffff] transition-all duration-500"
                                        >
                                            política de privacidad
                                        </a>
                                    </li>
                                    <li className="pb-3">
                                        <a
                                            href=""
                                            className="text-[#cccccc] text-base font-inter leading-[25px] lg:max-w-[369px] font-medium  hover:text-[#ffff] transition-all duration-500"
                                        >
                                            Términos de servicios
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-4/12 w-1/2 px-3 pt-8 md:pt-0">
                                <ul>
                                    <li className="text-[#ffffff] text-base font-inter leading-[25px] lg:max-w-[369px] font-bold pb-4">
                                        Ponerse en contacto
                                    </li>
                                    <li className="flex gap-2 items-center pb-3">
                                        <span>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.668 3.33301H3.33464C2.41797 3.33301 1.6763 4.08301 1.6763 4.99967L1.66797 14.9997C1.66797 15.9163 2.41797 16.6663 3.33464 16.6663H16.668C17.5846 16.6663 18.3346 15.9163 18.3346 14.9997V4.99967C18.3346 4.08301 17.5846 3.33301 16.668 3.33301ZM16.3346 6.87467L10.443 10.558C10.1763 10.7247 9.8263 10.7247 9.55964 10.558L3.66797 6.87467C3.58441 6.82777 3.51123 6.76439 3.45288 6.68839C3.39452 6.61238 3.35219 6.52532 3.32845 6.43248C3.30471 6.33964 3.30005 6.24295 3.31477 6.14826C3.32948 6.05357 3.36325 5.96285 3.41404 5.88159C3.46482 5.80033 3.53157 5.73022 3.61024 5.6755C3.68891 5.62079 3.77786 5.5826 3.87171 5.56326C3.96557 5.54391 4.06237 5.54381 4.15626 5.56296C4.25016 5.58212 4.33919 5.62012 4.41797 5.67467L10.0013 9.16634L15.5846 5.67467C15.6634 5.62012 15.7524 5.58212 15.8463 5.56296C15.9402 5.54381 16.037 5.54391 16.1309 5.56326C16.2247 5.5826 16.3137 5.62079 16.3924 5.6755C16.471 5.73022 16.5378 5.80033 16.5886 5.88159C16.6394 5.96285 16.6731 6.05357 16.6878 6.14826C16.7025 6.24295 16.6979 6.33964 16.6742 6.43248C16.6504 6.52532 16.6081 6.61238 16.5497 6.68839C16.4914 6.76439 16.4182 6.82777 16.3346 6.87467Z" fill="white" />
                                            </svg>

                                        </span>
                                        <a href="" className="text-[#cccccc] text-base font-inter leading-[25px] hover:text-[#ffff] transition-all duration-500">juegosexclusivos@gmail.com</a>
                                    </li>
                                    <li className="flex gap-2 items-center pb-3">
                                        <span>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.5 13.6833V16.63C17.5001 16.841 17.4202 17.0441 17.2763 17.1985C17.1325 17.3528 16.9355 17.4469 16.725 17.4617C16.3608 17.4867 16.0633 17.5 15.8333 17.5C8.46917 17.5 2.5 11.5308 2.5 4.16667C2.5 3.93667 2.5125 3.63917 2.53833 3.275C2.5531 3.06454 2.64715 2.86751 2.8015 2.72367C2.95585 2.57984 3.15902 2.4999 3.37 2.5H6.31667C6.42003 2.4999 6.51975 2.53822 6.59644 2.60752C6.67313 2.67682 6.72133 2.77215 6.73167 2.875C6.75083 3.06667 6.76833 3.21917 6.785 3.335C6.95061 4.49077 7.29 5.61486 7.79167 6.66917C7.87083 6.83583 7.81917 7.035 7.66917 7.14167L5.87083 8.42667C6.97038 10.9887 9.01212 13.0305 11.5742 14.13L12.8575 12.335C12.91 12.2617 12.9865 12.2091 13.0737 12.1864C13.161 12.1637 13.2535 12.1723 13.335 12.2108C14.3892 12.7116 15.513 13.0501 16.6683 13.215C16.7842 13.2317 16.9367 13.2492 17.1267 13.2683C17.2294 13.2789 17.3245 13.3271 17.3936 13.4038C17.4628 13.4805 17.5001 13.5801 17.5 13.6833Z" fill="white" />
                                            </svg>
                                        </span>
                                        <a href="" className="text-[#cccccc] text-base font-inter leading-[25px] hover:text-[#ffff] transition-all duration-500">(101)342-7873</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#191919]"></div>
            <p className=" text-center text-[#808080] text-base font-inter leading-[25px] pt-5" >
                © Juegos exclusivos - Todos los derechos reservados {year}
            </p>
            <img src={e1} alt="e1" className="absolute bottom-[0%] left-[0%] z-[-1]  hidden md:block" />
            <img src={e2} alt="e2" className="absolute top-[3%] right-[0%] z-[-1]  hidden md:block" />
        </div>
    );
};

export default Myfooter;