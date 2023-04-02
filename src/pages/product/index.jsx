import React, { useState } from "react";
import { useParams } from "react-router-dom";
//Hooks
import DataSetup from "../../hooks/DataSetup";
import { useStateContext } from "../../hooks/Context";
//Style
import styled from "styled-components";
//Icon
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export default function Product() {
    const { qty, increaseQty, decreaseQty, onAdd } = useStateContext();

    let { id } = useParams();
    const { data, isLoading, error } = DataSetup(
        `https://api.noroff.dev/api/v1/online-shop/${id}`
    );

    if (isLoading) {
        return <div>Loading</div>;
    }

    if (error) {
        return <div>Oh no.. {error.message}</div>;
    }

    const { title, description, price, discountedPrice, imageUrl, reviews } =
        data;

    let discount;
    let percentage;

    if (discountedPrice < price) {
        discount = price - discountedPrice;
        percentage = Math.round((discount / price) * 100);
    }

    return (
        <main>
            <DetailStyle>
                <img src={imageUrl} alt={title} />
                <ProductInfo>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Price>
                        {discount ? <p>{price}</p> : ""}
                        <h4>{discountedPrice} kr</h4>
                        {discount ? <h5>{percentage}% off</h5> : ""}
                    </Price>
                    <Quantity>
                        <span>Quantity</span>
                        <button>
                            <AiFillMinusCircle onClick={decreaseQty} />
                        </button>
                        <p>{qty}</p>
                        <button>
                            <AiFillPlusCircle onClick={increaseQty} />
                        </button>
                    </Quantity>
                    <Buy onClick={() => onAdd(data, qty)}>Add to cart</Buy>
                    <ReviewWrap>
                        <h3>Reviews:</h3>
                        {reviews && reviews.length > 0 ? (
                            <div>
                                {reviews.map((review) => {
                                    return (
                                        <StyledReviews key={review.id}>
                                            <h4>{review.username}</h4>
                                            <p>{review.description}</p>
                                        </StyledReviews>
                                    );
                                })}
                            </div>
                        ) : (
                            <p>No reviews</p>
                        )}
                    </ReviewWrap>
                </ProductInfo>
            </DetailStyle>
        </main>
    );
}

const DetailStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0rem 10%;
    padding: 2rem 0rem;

    img {
        width: 50%;
        max-height: 80vh;
        object-fit: cover;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        text-align: center;
    }
`;

const ProductInfo = styled.div`
    width: 40%;
    h3 {
        margin-bottom: 1rem;
    }
    button {
        font-size: 1rem;
        font-weight: medium;
        height: 2.8rem;
        cursor: pointer;
        text-align: center;
    }

    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;

const Price = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 1rem;

    p {
        text-decoration: line-through;
        color: #545454;
    }

    h5 {
        font-size: 1rem;
        font-weight: 500;
        color: red;
    }
`;

const Quantity = styled.div`
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
`;

const Buy = styled.button`
    width: 100%;
    background: var(--primary);
    color: white;
    font-weight: 500;
`;

const ReviewWrap = styled.div`
    text-align: center;
    margin-top: 2rem;
`;

const StyledReviews = styled.div`
    margin-top: 2rem;
    background-color: white;
    gap: 1rem;
    border-radius: 1rem;
    padding: 1rem;
`;
