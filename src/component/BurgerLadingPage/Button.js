import React from "react";

const Button = (props) => {
    return (
        <div className="inline-block group">
            <button className="relative before:content-[''] before:absolute before:block before:rounded-xl before:w-full before:h-full before:py-5 before:bg-primary before:-bottom-[10px] before:-right-[4px] group-hover:before:-bottom-[10px] group-hover:before:right-[6px] before:transition-all before:duration-500">
                <span className="block relative text-primary bg-[#EFE0CC] px-5 py-3 rounded-xl border-2 border-primary text-xl z-10">
                    {props.icon && <i className="fa-brands fa-instagram mr-3"></i>}
                    {props.buttonText}
                </span>
            </button>
        </div>
    );
};

export default Button;
