import React from "react";

const CardFeedBack = (props) => {
    return (
        <div className="bg-[#F5C935] border-2 border-primary text-primary rounded-2xl p-6">
            <div>
                <i className="fa-solid fa-star text-sm  mr-1"></i>
                <i className="fa-solid fa-star text-sm  mr-1"></i>
                <i className="fa-solid fa-star text-sm  mr-1"></i>
                <i className="fa-solid fa-star text-sm  mr-1 "></i>
                <i className="fa-solid fa-star text-sm  mr-1"></i>
            </div>
            <p className="text-light font-light my-3 font-sans justify-items-end">"{props.feedback}"</p>
            <div className="flex items-center">
                <img className="w-[15%] rounded-full" src={props.img} alt="" />
                <h5 className="ml-2">{props.name}</h5>
            </div>
        </div>
    );
};

export default CardFeedBack;
