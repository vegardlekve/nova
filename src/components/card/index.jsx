import React from "react";
//Route
import { Link } from "react-router-dom";
//Styles
import styled from "styled-components";

export default function Card({ product }) {
    const { id, title, discountedPrice, imageUrl } = product;

    return (
        <Link to={`/product/${id}`}>
            <StyledCard>
                <div>
                    <img src={imageUrl} alt={title} />
                </div>
                <h2>{title}</h2>
                <div>
                    <h3>{discountedPrice}</h3>
                </div>
                <button>View Product</button>
            </StyledCard>
        </Link>
    );
}

const StyledCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 20vh;
    max-width: 300px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;

    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: center;
    }

    h2 {
        margin: 3rem 0rem;
    }

    button {
        color: white;
        background-color: #ff7f84;
        height: 3.5rem;
        margin-top: auto;
    }
`;
