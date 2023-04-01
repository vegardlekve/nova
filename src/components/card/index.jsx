import React from "react";
//Styles
import styled from "styled-components";

export default function Card({ product }) {
    const { title, discountedPrice, imageUrl } = product;

    return (
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
    );
}

const StyledCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 25vh;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;

    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }

    button {
        color: white;
        background-color: darkslateblue;
    }
`;
