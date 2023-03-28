import React from "react";
import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <a href="#">Shop</a>
                </li>
                <li>
                    <a href="#">Contact</a>
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
