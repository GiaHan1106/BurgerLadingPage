import React from "react";
import listMenu from "./Listmenu/FoodData";
import CardMenu from "./Listmenu/CardMenu";

const Menu = () => {
    return (
        <div className="text-center">
            <h2 className="text-4xl lg:text-5xl text-primary mt-20 mb-10 ">Featured Menu</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
                {listMenu.map((item, index) => (
                    <CardMenu key={index} img={item.img} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    );
};

export default Menu;
