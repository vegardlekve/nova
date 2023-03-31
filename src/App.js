import React from "react";
//Router
import { Routes, Route } from "react-router-dom";
//Components
import Layout from "./components/layout";
//Pages
import Home from "./pages/home";
import Contact from "./pages/contact";
import Product from "./pages/product";
import Checkout from "./pages/checkout";
//Styles
import GlobalStyle from "./Styles/GlobalStyles";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="product" element={<Product />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
