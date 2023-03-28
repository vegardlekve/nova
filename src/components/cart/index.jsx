import React from "react";
//Styles
import styled from "styled-components";
//icon
import { FiShoppingBag } from "react-icons/fi";

const Cart = () => {
    return (
        <StyledCart>
            <FiShoppingBag />
        </StyledCart>
    );
};

const StyledCart = styled.div`
    svg {
        font-size: 1.6rem;
    }
`;

export default Cart;
