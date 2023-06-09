import React from "react";
//
//Components
import Nav from "../nav";
import Cart from "../cart";
//Styles
import styled from "styled-components";
// Assets
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <StyledHeader>
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
            <Nav />
            <Cart />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0rem 10%;

    img {
        width: 40px;
        height: 40px;
    }
`;

export default Header;
