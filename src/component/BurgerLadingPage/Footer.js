import React from "react";

const Footer = () => {
    return (
        <div className="lg:mt-28">
            <div className="block  text-center lg:text-left lg:flex justify-between bg-[#F5C935] text-primary py-10 px-10 lg:px-32">
                <div className="mb-4">
                    <h3 className="text-2xl mb-1">GET EXCLUSIVE UPDATE</h3>
                    <p className="font-light font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="block lg:flex gap-2">
                    <input className="mb-4 lg:mb-0 p-6 py-2 rounded-xl" type="text" placeholder="Email" />
                    <button className=" p-3 lg:px-3 text-white bg-primary rounded-xl text-sm">
                        <i class="fa-solid fa-paper-plane"></i> Subscribe Now
                    </button>
                </div>
            </div>
            <div className="  m-auto mt-10 lg:mt-20 px-14">
                <div className="block lg:flex items-center justify-between mb-3">
                    <img className=" h-[60px]" src="https://phatconex.github.io/tailwind_landing_burger/src/img/bigburger-logo.png" alt="" />
                    <div className="my-4">
                        <ul className="block lg:flex justify-center text-primary  ">
                            <li className="mb-2 mr-10 hover:text-secondary transition-all duration-500 cursor-pointer">Home</li>
                            <li className="mb-2 mr-10 hover:text-secondary transition-all duration-500 cursor-pointer">Locations</li>
                            <li className="mb-2 mr-10 hover:text-secondary transition-all duration-500 cursor-pointer">Francing</li>
                            <li className="mb-2 mr-10 hover:text-secondary transition-all duration-500 cursor-pointer">About Us</li>
                        </ul>
                    </div>
                    <div className="flex lg:justify-end">
                        <img className="w-[100px]" src="https://phatconex.github.io/tailwind_landing_burger/src/img/google-play.png" alt="" />
                        <img className="w-[100px]" src="https://phatconex.github.io/tailwind_landing_burger/src/img/app-store.png" alt="" />
                    </div>
                </div>
                <div className="py-10 block text-center lg:flex justify-between item-center text-primary  border-t-[1px] border-yellow-400 pb-8">
                    <h5 className=" text-base font-sans font-light">Burger & Fast Food Restaurant Template Kit by Tokomoo and code by Gia Han</h5>
                    <ul className="flex justify-center mt-4">
                        <li>
                            <i className="fa-brands fa-facebook bg-[#DAC9B5] w-[30px] h-[30px] leading-[30px] rounded-[50%] cursor-pointer"></i>
                        </li>
                        <li>
                            <i className="fa-brands fa-youtube bg-[#DAC9B5] w-[30px] h-[30px] leading-[30px] rounded-[50%] cursor-pointer ml-3"></i>
                        </li>
                        <li>
                            <i className="fa-brands fa-twitter bg-[#DAC9B5] w-[30px] h-[30px] leading-[30px] rounded-[50%] cursor-pointer ml-3"></i>
                        </li>
                        <li>
                            <i className="fa-brands fa-instagram bg-[#DAC9B5] w-[30px] h-[30px] leading-[30px] rounded-[50%] cursor-pointer ml-3"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
