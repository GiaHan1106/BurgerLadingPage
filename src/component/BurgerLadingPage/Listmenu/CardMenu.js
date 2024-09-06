import React from "react";
const CardMenu = (props) => {
    return (
        <div className="border-2 border-black p-4 lg:p-10 rounded-2xl">
            <img className="hover:scale-110 cursor-pointer transition-all duration-500" src={props.img} alt="" />
            <div className="mt-4">
                <h4 className="text-xs md:text-sm lg:text-2xl text-primary">{props.name}</h4>
                <h5 className="text-[#E54F21] text-xs md:text-sm lg:text-2xl mt-3">{props.price}</h5>
            </div>
        </div>
    );
};

export default CardMenu;
