import React from "react";

const Tailwind03 = () => {
    return (
        <div className="grid grid-rows-1 grid-flow-col gap-6 bg[#f7f5e9] px-32 py-20">
            <div className="col-span-1.5">
                <i className="fa-solid fa-map-location-dot text-4xl"></i>
                <h3 className="font-[Mansalva] text-3xl mb-2 mt-4">Cherished your memories</h3>
                <h1 className="text-5xl mb-5 font-bold">Explore World</h1>
                <h4 className="text-sm font-extralight text-gray-400 mt-10">
                    Fermentum odio eu feugiat pretium nibh. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.
                    Lectus proin nibh nisl condimentum id venenatis.
                </h4>
                <div className="text-right mt-16">
                    <i className="fa-solid fa-angle-left mr-5 border-black border-2 px-3 py-2 rounded-full cursor-pointer"></i>
                    <i className="fa-solid fa-angle-right  border-black border-2 px-3 py-2 rounded-full cursor-pointer"></i>
                </div>
            </div>
            <div className="relative group col-span-1 ">
                <div className="before:rounded-[45%] before:absolute before:content-[''] before:block  before:w-full  before:h-full  before:bg-black before:opacity-45 group-hover:before:bg-orange-500">
                    <img className="rounded-[45%] bg-gradient-to-r from-black to-[#0000009e] " src="https://advenx.wpengine.com/wp-content/uploads/2023/03/image-box-image01.jpg" alt="" />
                </div>
                <div className="absolute -bottom-4 left-2 text-center  text-white group-hover:bottom-1/4 transition-all duration-700">
                    <h2 className="text-3xl">ThaiLand</h2>
                    <h4 className="mt-3 mb-3 w-2/4 m-auto">Explore beaches, forests, jungles and mountains</h4>
                    <h5>
                        Read more <i className="fa-solid fa-angle-right"></i>
                    </h5>
                </div>
            </div>
            <div className="relative group col-span-1">
                <div className=" before:rounded-[45%] before:absolute before:content-[''] before:block  before:w-full  before:h-full   before:opacity-45 group-hover:before:bg-orange-500">
                    <img className="rounded-[45%] bg-gradient-to-r from-black to-[#0000009e]" src="https://advenx.wpengine.com/wp-content/uploads/2023/03/image-box-image03.jpg" alt="" />
                </div>
                <div className="absolute -bottom-4 left-2 text-center  text-white group-hover:bottom-1/4 transition-all duration-700">
                    <h2 className="text-3xl">USA</h2>
                    <h4 className="mt-3 mb-3 w-2/4 m-auto">Explore New York, California , New Mexico & more</h4>
                    <h5>
                        Read more <i className="fa-solid fa-angle-right"></i>
                    </h5>
                </div>
            </div>
            <div className="relative group col-span-1">
                <div className=" before:rounded-[45%] before:absolute before:content-[''] before:block  before:w-full  before:h-full   before:opacity-45 group-hover:before:bg-orange-500">
                    <img className="rounded-[45%] bg-gradient-to-r from-black to-[#0000009e]" src="https://advenx.wpengine.com/wp-content/uploads/2023/03/image-box-image02.jpg" alt="" />
                </div>
                <div className="absolute -bottom-4 left-2 text-center text-white group-hover:bottom-1/4 transition-all duration-700">
                    <h2 className="text-3xl">India</h2>
                    <h4 className="mt-3 mb-3 w-2/4 m-auto">Explore Himalaya, North India, South India & more</h4>
                    <h5>
                        Read more <i className="fa-solid fa-angle-right"></i>
                    </h5>
                </div>{" "}
            </div>
        </div>
    );
};

export default Tailwind03;
