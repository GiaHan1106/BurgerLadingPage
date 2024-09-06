import React, { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };
    console.log(isOpen);
    return (
        <div className="flex relative lg:justify-between items-center px-5 py-2 bg-primary text-white rounded-3xl mt-10">
            <div>
                <img className="w-[150px] p-6" src="https://phatconex.github.io/tailwind_landing_burger/src/img/logo.png" alt="" />
            </div>
            <ul
                className={`lg:flex lg:w-auto lg:relative lg:visible lg:opacity-100 lg:bg-transparent  lg:text-white bg-white text-black p-2 w-full absolute top-full  shadow-lg rounded-xl left-0 transition-all duration-500 ${
                    isOpen ? "opacity-100 visiable" : "opacity-0 invisible"
                }`}
            >
                <li className="mr-20">
                    <a className="py-5" href="">
                        Home
                    </a>
                </li>
                <li className="mr-20 group relative">
                    <a href="" className=" py-5">
                        Menu
                    </a>
                    <ul className="absolute top-14 bg-white w-32 text-black shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:top-10 group-hover:visible transition-all duration-500 ">
                        <li className="p-3">
                            <a className="hover:text-secondary transition-all duration-500 " href="">
                                Burger
                            </a>
                        </li>
                        <li className="p-3">
                            <a className="hover:text-secondary transition-all duration-500 " href="">
                                Sides
                            </a>
                        </li>
                        <li className="p-3">
                            <a className="hover:text-secondary transition-all duration-500 " href="">
                                Burger
                            </a>
                        </li>
                        <li className="p-3">
                            <a className="hover:text-secondary transition-all duration-500 " href="">
                                Drinks
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="mr-20">
                    <a className="py-5" href="">
                        Locations
                    </a>
                </li>
                <li className="mr-20">
                    <a className="py-5" href="">
                        Francing
                    </a>
                </li>
                <li className="mr-20">
                    <a className="py-5" href="">
                        About us
                    </a>
                </li>
            </ul>
            <i class="fa-solid fa-bars block lg:hidden lg:text-right  ml-auto mr-10 text-xl" onClick={handleOpenMenu}></i>
            <div className="group">
                <button className="relative before:content-[''] before:absolute before:block before:rounded-xl before:w-full before:h-full before:py-5 before:bg-white before:-bottom-[10px] before:-right-[4px] group-hover:before:-bottom-[10px] group-hover:before:right-[6px] before:transition-all before:duration-500">
                    <span className="block relative bg-secondary p-3 rounded-xl border-2 border-inherit z-10">Order Now</span>
                </button>
            </div>
        </div>
    );
};

export default Header;
