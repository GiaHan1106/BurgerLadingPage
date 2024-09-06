import React from "react";
import ListFeedBack from "./FeedBack/FeedBackData";
import CardFeedBack from "./FeedBack/CardFeedBack";
const FeedBack = () => {
    return (
        <div className="text-center">
            <h2 className="text-4xl lg:text-5xl text-primary mt-20 mb-10">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {ListFeedBack.map((item, index) => (
                    <CardFeedBack key={index} feedback={item.feedback} img={item.img} name={item.name} />
                ))}
            </div>
        </div>
    );
};

export default FeedBack;
