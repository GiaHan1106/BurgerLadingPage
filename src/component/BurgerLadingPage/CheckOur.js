import React from "react";
import Button from "./Button";
const CheckOur = () => {
    return (
        <div className=" relative text-center my-8 py-1">
            <div className="before:content-[''] before:absolute before:block before:rounded-xl before:w-10/12 before:h-[100%] before:py-5 before:bg-white before:top-2/4 before:-translate-y-2/4 before:left-2/4 before:-translate-x-1/2 before:transition-all before:duration-500">
                <h2 className=" relative z-9 text-4xl lg:text-5xl text-primary mt-5">Check Out Our Grams!</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 my-8">
                    <div className="relative hover:scale-105 overflow-hidden before:content-[''] before:absolute before:block before:rounded-[10px] before:w-4/5 before:h-[92%] before:py-5 before:bg-primary before:-bottom-[7px] before:right-[8px] transition-all duration-500 cursor-pointer">
                        <img className="block relative px-5 py-3 rounded-[30px] text-primary text-xl z-10" src="https://phatconex.github.io/tailwind_landing_burger/src/img/insta-pic-01.jpg" alt="" />
                    </div>
                    <div className="relative hover:scale-105 overflow-hidden before:content-[''] before:absolute before:block before:rounded-[10px] before:w-4/5 before:h-[92%] before:py-5 before:bg-primary before:-bottom-[7px] before:right-[8px] transition-all duration-500 cursor-pointer">
                        <img className="block relative px-5 py-3 rounded-[30px] text-primary text-xl z-10" src="https://phatconex.github.io/tailwind_landing_burger/src/img/insta-pic-2.jpg" alt="" />
                    </div>
                    <div className="relative hover:scale-105 overflow-hidden before:content-[''] before:absolute before:block before:rounded-[10px] before:w-4/5 before:h-[92%] before:py-5 before:bg-primary before:-bottom-[7px] before:right-[8px] transition-all duration-500 cursor-pointer">
                        <img className="block relative px-5 py-3 rounded-[30px] text-primary text-xl z-10" src="https://phatconex.github.io/tailwind_landing_burger/src/img/insta-pic-3.jpg" alt="" />
                    </div>
                    <div className="relative hover:scale-105 overflow-hidden before:content-[''] before:absolute before:block before:rounded-[10px] before:w-4/5 before:h-[92%] before:py-5 before:bg-primary before:-bottom-[7px] before:right-[8px] transition-all duration-500 cursor-pointer">
                        <img className="block relative px-5 py-3 rounded-[30px] text-primary text-xl z-10" src="https://phatconex.github.io/tailwind_landing_burger/src/img/insta-pic-4.jpg" alt="" />
                    </div>
                </div>
                <Button buttonText="Follow Instargram" icon="true"></Button>
            </div>
        </div>
    );
};

export default CheckOur;
