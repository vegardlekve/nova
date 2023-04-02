import React from "react";
//Route
import { Link } from "react-router-dom";
//Hooks
import { useStateContext } from "../../hooks/Context";
//Styles
import styled from "styled-components";
//Icon
import { FaShoppingCart } from "react-icons/fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export default function Checkout() {
    const { cartItems, onAdd, onRemove, totalPrice, clearCart } =
        useStateContext();

    return (
        <main>
            <CartWrapper>
                <CartStyle>
                    {cartItems.length < 1 && (
                        <EmptyStyle>
                            <h1>Empty 😕</h1>
                            <FaShoppingCart />
                        </EmptyStyle>
                    )}
                    {cartItems.length > 1 &&
                        cartItems.map((item) => {
                            return (
                                <CheckoutCard key={item.id}>
                                    <img src={item.imageUrl} alt={item.title} />
                                    <CheckouCardInfo>
                                        <h3>{item.title}</h3>
                                        <h3>{item.discountedPrice}</h3>
                                        <CheckoutQty>
                                            <span>Quantity</span>
                                            <button
                                                onClick={() => onRemove(item)}
                                            >
                                                <AiFillMinusCircle />
                                            </button>
                                            <p>{item.quantity}</p>
                                            <button
                                                onClick={() => onAdd(item, 1)}
                                            >
                                                <AiFillPlusCircle />
                                            </button>
                                        </CheckoutQty>
                                    </CheckouCardInfo>
                                </CheckoutCard>
                            );
                        })}
                    {cartItems.length >= 1 && (
                        <CheckoutBtn>
                            <h3>Subtotal: {totalPrice.toFixed(2)}kr</h3>
                            <Link to="/success">
                                <button onClick={{ clearCart }}>
                                    Purchase
                                </button>
                            </Link>
                        </CheckoutBtn>
                    )}
                </CartStyle>
            </CartWrapper>
        </main>
    );
}

const CartWrapper = styled.div`
    //position: fixed;
    //right: 0;
    //left: 0;
    height: 100vh;
    width: 100%;
    background: #ace8e4;
    display: flex;
    justify-content: flex-end;
`;

const CartStyle = styled.div`
    width: 50%;
    background-color: #f1f1f1;
    padding: 2rem 5rem;
    overflow-y: scroll;
    position: relative;

    @media screen and (max-width: 1024px) {
        width: 80%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const CheckoutCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    overflow: hidden;
    background: white;
    padding: 2rem;
    margin: 2rem 0rem;
    img {
        width: 6rem;
        max-height: 6rem;
        object-fit: cover;
    }

    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
`;

const CheckouCardInfo = styled.div`
    width: 50%;
    div {
        display: flex;
        flex-direction: space-between;
    }
`;

const EmptyStyle = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    h1 {
        font-size: 2rem;
        padding: 1rem;
    }

    svg {
        font-size: 10rem;
        color: var(--secondary);
    }
`;

const CheckoutQty = styled.div`
    display: flex;
    margin: 1.5rem 0rem;
    gap: 1rem;

    button {
        background: transparent;
        border: none;
        display: flex;
        font-size: 1.5rem;
    }

    p {
        width: 1rem;
        text-align: center;
    }

    span {
        color: var(--secondary);
    }

    svg {
        color: #494949;
    }

    @media screen and (max-width: 600px) {
        justify-content: center;
        align-items: center;
    }
`;

const CheckoutBtn = styled.div`
    button {
        margin-top: 1rem;
        background: #ff7f84;
        color: white;
        font-size: 1.2rem;
        font-weight: medium;
        height: 2.8rem;
        cursor: pointer;
        text-align: center;
        width: 100%;
        border-radius: 1rem;
    }
`;
