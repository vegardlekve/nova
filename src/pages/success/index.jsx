import React from "react";
//Route
import { Link } from "react-router-dom";
//Style
import styled from "styled-components";

export default function Success() {
    return (
        <main>
            <SuccessWrap>
                <SuccessCard>
                    <h1>🎈 Order complete 🎈</h1>
                    <h3>Thank you for shopping at Nova Avenue!</h3>
                </SuccessCard>
                <Link to={"/"}>
                    <BackButton>Shop more</BackButton>
                </Link>
            </SuccessWrap>
        </main>
    );
}

const SuccessWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
    text-align: center;
`;

const SuccessCard = styled.div`
    background-color: white;
    padding: 3rem;
    border-radius: 1rem;
    border: 4px solid;
    border-color: #ace8e4;
    h3 {
        margin-top: 1.5rem;
    }
`;

const BackButton = styled.button`
    margin-top: 1.5rem;
    background-color: #ff7f84;
    color: white;
    width: 30vh;
    height: 3rem;
    border-radius: 1rem;
`;
