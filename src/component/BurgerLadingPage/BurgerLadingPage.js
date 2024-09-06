import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import KindOfFood from "./KindOfFood";
import Menu from "./Menu";
import FeedBack from "./FeedBack";
import Blog from "./Blog";
import CheckOur from "./CheckOur";
import Footer from "./Footer";

const BurgerLadingPage = () => {
    return (
        <div>
            <div className="w-10/12 m-auto">
                <Header></Header>
                <Banner></Banner>
                <KindOfFood></KindOfFood>
                <Menu></Menu>
                <FeedBack></FeedBack>
                <Blog></Blog>
                <CheckOur></CheckOur>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default BurgerLadingPage;
