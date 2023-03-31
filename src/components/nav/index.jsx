import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    ul {
        display: flex;
        list-style-type: none;
        gap: 2rem;
    }

    a {
        text-decoration: none;
        color: black;
        font-size: 1.5rem;
    }
`;

export default Nav;
