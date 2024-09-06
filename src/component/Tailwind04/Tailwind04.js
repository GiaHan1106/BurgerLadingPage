import React from "react";

const Tailwind04 = () => {
    return (
        <div>
            <div className="grid md:grid-cols-5 gap-6 bg-[#24231d] text-white p-12 md:p-24">
                <div className="">
                    <img className="w-3/5" src="https://tplabs.co/agrios/wp-content/uploads/2022/07/logo@2x-white-1.webp" alt="" />
                    <h4 className="font-extralight mt-8 w-11/12 text-sm text-[#999]">There are many variations of passages of lorem ipsum available, but the majority suffered.</h4>
                    <div>
                        <i className="fa-brands fa-twitter  bg-[#181711] p-3 rounded-full hover:bg-lime-500 transition-all duration-500 cursor-pointer"></i>
                        <i className="fa-brands fa-facebook-f bg-[#181711] p-3 rounded-full m-4 hover:bg-lime-500 hover:-rotate-[360deg] transition-all duration-500 cursor-pointer"></i>
                        <i className="fa-brands fa-pinterest-p  bg-[#181711] p-3 rounded-full hover:bg-lime-500 hover:-rotate-180 transition-all duration-500 cursor-pointer"></i>
                        <i className="fa-brands fa-instagram bg-[#181711] p-3 rounded-full m-4 hover:bg-lime-500 hover:-rotate-180 transition-all duration-500 cursor-pointer"></i>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl mb-6">Explore</h3>
                    <div className="flex">
                        <p className="w-10 h-1 bg-lime-600 rounded-xl mb-8 mr-2"></p>
                        <p className="w-1 h-1 bg-lime-600 rounded-xl "></p>
                    </div>
                    <ul className="text-[#999]">
                        <li className="text-sm cursor-pointer hover:text-white transition-all duration-500">
                            <i className="fa-solid fa-leaf text-xs mr-2 mb-3"></i> About
                        </li>
                        <li className="text-sm cursor-pointer hover:text-white transition-all duration-500">
                            <i className="fa-solid fa-leaf text-xs mr-2 mb-3"></i> Service
                        </li>
                        <li className="text-sm cursor-pointer hover:text-white transition-all duration-500">
                            <i className="fa-solid fa-leaf text-xs mr-2 mb-3"></i> Our Projects
                        </li>
                        <li className="text-sm cursor-pointer hover:text-white transition-all duration-500">
                            <i className="fa-solid fa-leaf text-xs mr-2 mb-3"></i> Meet the Farmers
                        </li>
                        <li className="text-sm cursor-pointer hover:text-white transition-all duration-500">
                            <i className="fa-solid fa-leaf text-xs mr-2 mb-3"></i> Latests News
                        </li>
                        <li className="text-sm cursor-pointer hover:text-white transition-all duration-500">
                            <i className="fa-solid fa-leaf text-xs mr-2 mb-3"></i> Contact
                        </li>
                    </ul>
                </div>
                <div className="relative group md:col-span-2">
                    <h3 className="text-xl mb-6">New</h3>
                    <div className="flex">
                        <p className="w-10 h-1 bg-lime-600 rounded-xl mb-8 mr-2"></p>
                        <p className="w-1 h-1 bg-lime-600 rounded-xl "></p>
                    </div>
                    <div className="flex">
                        <img className="w-1/5 rounded-xl" src="https://tplabs.co/agrios/wp-content/uploads/2022/07/news-06-150x150.webp" alt="" />
                        <div className="ml-5">
                            <h4 className="mb-1 w-3/4">Bringing Food Production Back To Cities</h4>
                            <p className="text-amber-300 font-thin">July 5 ,2020</p>
                        </div>
                    </div>
                    <div className="flex mt-10">
                        <img className="w-1/5 rounded-xl" src="https://tplabs.co/agrios/wp-content/uploads/2022/07/news-05-370x370.webp" alt="" />
                        <div className="ml-5">
                            <h4 className="mb-1 w-3/4">The Future of Farming, Smart Irrigation Solutions</h4>
                            <p className="text-amber-300 font-thin">July 4 ,2022</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-xl mb-6">Contact</h3>
                    <div className="flex">
                        <p className="w-10 h-1 bg-lime-600 rounded-xl mb-8 mr-2"></p>
                        <p className="w-1 h-1 bg-lime-600 rounded-xl "></p>
                    </div>
                    <ul>
                        <li className="font-thin text-[#999]">
                            <i className="fa-solid fa-phone text-amber-300 mr-4 mb-4"></i> 0974200611
                        </li>
                        <li className="font-thin text-[#999]">
                            <i className="fa-solid fa-envelope text-amber-300 mr-4 mb-4"></i> hgia11062001@gmail.com
                        </li>
                        <li className="font-thin text-[#999]">
                            <i className="fa-solid fa-location-dot text-amber-300 mr-4 mb-4"></i>An Giang Province
                        </li>
                    </ul>
                    <div className="relative mt-10">
                        <input className=" pr-10 pl-7 py-5 rounded-bl-xl rounded-tl-xl text-xs" type="text" placeholder="Your email address" />
                        <span className="absolute bg-lime-600 pr-6 pl-5 py-4 rounded-tr-xl rounded-br-xl hover:bg-[#1f1e17] hover:text-[#fff] transition-all duration-500 cursor-pointer">
                            <i className="fa-solid fa-paper-plane text-xs"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-between items-center bg-[#1f1e17] text-[#999] text-sm  py-4 px-4 md:px-32 md:py-8 ">
                <h5>© All Copyright 2022 by TPLabs.co</h5>
                <div className="flex items-center">
                    <h5 className="mr-4 border-r-2 border-neutral-700 pe-3">Terms of Use</h5>
                    <p className="w-0.5 h-4 mr-4 items-center"></p>
                    <h5>Privacy Policy</h5>
                </div>
            </div>
        </div>
    );
};

export default Tailwind04;
