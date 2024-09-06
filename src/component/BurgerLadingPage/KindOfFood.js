import React from "react";

const KindOfFood = () => {
    return (
        <div className="mt-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
                <div className="bg-white p-6 rounded-xl border-2 border-black text-center">
                    <img src="https://phatconex.github.io/tailwind_landing_burger/src/img/cate-1.jpg" alt="" />
                    <h2 className="text-xl lg:text-3xl mt-4">Burgers</h2>
                </div>
                <div className="bg-white p-6 rounded-xl border-2 border-black text-center">
                    <img src="https://phatconex.github.io/tailwind_landing_burger/src/img/cate-2.jpg" alt="" />
                    <h2 className="text-xl lg:text-3xl mt-4">Sides</h2>
                </div>
                <div className="bg-white p-6 rounded-xl border-2 border-black text-center">
                    <img src="https://phatconex.github.io/tailwind_landing_burger/src/img/cate-3.jpg" alt="" />
                    <h2 className="text-xl lg:text-3xl mt-4">Salads</h2>
                </div>
                <div className="bg-white p-6 rounded-xl border-2 border-black text-center">
                    <img src="https://phatconex.github.io/tailwind_landing_burger/src/img/cate-4.jpg" alt="" />
                    <h2 className="text-xl lg:text-3xl mt-4">Drinks</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 ">
                <div className="relative">
                    <div className=" relative before:absolute before:content-[''] before:block  before:w-full before:rounded-2xl  before:h-full  before:bg-gradient-to-r from-amber-950 before:bg-opacity-65">
                        <img className="rounded-2xl" src="https://phatconex.github.io/tailwind_landing_burger/src/img/banner-1.jpg" alt="" />
                    </div>
                    <div className="absolute text-white top-2/4 -translate-y-1/2 left-10">
                        <h3 className="text-2xl w-3/4 mb-6">Get a 60% Discount On Black Friday</h3>
                        <button className="border-white border-2 p-3 rounded-xl hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">Order Now</button>
                    </div>
                </div>
                <div className="relative">
                    <div className=" relative before:absolute before:content-[''] before:block  before:w-full before:rounded-2xl  before:h-full  before:bg-gradient-to-r from-amber-950 before:bg-opacity-65">
                        <img className="rounded-2xl" src="https://phatconex.github.io/tailwind_landing_burger/src/img/banner-2.jpg" alt="" />
                    </div>
                    <div className="absolute text-white top-2/4 -translate-y-1/2 left-10">
                        <h3 className="text-2xl w-3/4 mb-6">Get a 60% Discount On Free Drinks!</h3>
                        <button className="border-white border-2 p-2 rounded-xl hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KindOfFood;
