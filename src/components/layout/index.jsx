import React from "react";
//Components
import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router-dom";
//Styles

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
