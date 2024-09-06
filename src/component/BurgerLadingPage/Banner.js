import React from "react";
import Button from "./Button";

const Banner = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <img className="w-full" src="https://phatconex.github.io/tailwind_landing_burger/src/img/home-image.png" alt="" />
            </div>
            <div>
                <h2 className="text-3xl lg:text-7xl text-white drop-shadow-xl text-stock mb-5 text lg:mt-28">ENJOY BURGRY MAKE YOUR TUMMY HAPPY</h2>
                <p className="w-28 h-2 bg-secondary rounded-xl mb-8 mr-2 my-10"></p>
                <h5 className="text-xl lg:text-2xl font-extralight text-primary font-sans mb-8">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes
                </h5>
                <ul className="flex my-12 text-primary">
                    <li className="text-xl lg:text-2xl">
                        <i class="fa-solid fa-utensils block text-2xl lg:text-3xl mb-3"></i>Delicious
                    </li>
                    <li className=" mx-10 lg:mx-28 text-xl lg:text-2xl ">
                        <i class="fa-solid fa-hotdog block text-2xl lg:text-3xl mb-3"></i>Organic
                    </li>
                    <li className="text-xl lg:text-2xl">
                        <i class="fa-solid fa-cloud-meatball block text-2xl lg:text-3xl mb-3"></i>Fresh
                    </li>
                </ul>
                <Button buttonText="Order Now"></Button>
            </div>
        </div>
    );
};

export default Banner;
