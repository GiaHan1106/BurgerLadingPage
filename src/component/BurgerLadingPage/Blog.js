import React from "react";
import Button from "./Button";

const Blog = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-24 ">
            <div className="pt-6 text-primary">
                <h2 className="text-[35px] lg:text-[45px] ">
                    We Maintain Craft <span className="block"> Quality Since 1980 </span>
                </h2>
                <h4 className="font-sans my-6 w-11/12 text-xl font-light">
                    Lorem ipsum dolor sit amet consectetur. Senectus eget hendrerit ipsum leo dui pellentesque sit interdum. Sit aenean tincidunt quis enim aliquam convallis sem.
                </h4>
                <Button buttonText="About Us"></Button>
            </div>
            <div className="mb-11">
                <img className="rounded-2xl " src="https://phatconex.github.io/tailwind_landing_burger/src/img/about.jpg" alt="" />
            </div>
        </div>
    );
};

export default Blog;
