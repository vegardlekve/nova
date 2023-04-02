import React from "react";
//Route
import { Link } from "react-router-dom";
//Hooks
import { useStateContext } from "../../hooks/Context";
//Styles
import styled from "styled-components";
//icon
import { FiShoppingBag } from "react-icons/fi";

const Cart = () => {
    const { totalQty } = useStateContext();
    return (
        <Link to={"/checkout"}>
            <StyledCart>
                {totalQty > 0 && <span>{totalQty}</span>}
                <FiShoppingBag />
            </StyledCart>
        </Link>
    );
};

const StyledCart = styled.button`
    all: unset;
    cursor: pointer;
    position: relative;

    svg {
        font-size: 1.6rem;
    }

    span {
        background: #ff2626;
        color: white;
        width: 1.3rem;
        height: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 0.75rem;
        position: absolute;
        right: -50%;
        top: -30%;
        pointer-events: none;
    }
`;

export default Cart;
