import React from "react";
//Components
import Card from "../../components/card";
//Hooks
import DataSetup from "../../hooks/DataSetup";
//Styles
import styled from "styled-components";

export default function Home() {
    const { data, isLoading, error } = DataSetup(
        "https://api.noroff.dev/api/v1/online-shop"
    );
    if (isLoading) {
        return <div>Loading</div>;
    }

    if (error) {
        return <div>Oh no.. {error.message}</div>;
    }

    const products = data;

    return (
        <main>
            <div>
                <Banner>
                    <img src={require("../../assets/home.png")} alt="banner" />
                </Banner>
                <Gallery>
                    {products.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </Gallery>
            </div>
        </main>
    );
}

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 4rem;
    margin: 0rem 10%;
`;

const Banner = styled.div`
    display: flex;
    justify-content: center;
    background-color: #ace8e4;
    margin: 1rem 0rem 3rem 0rem;

    img {
        width: 100%;
        margin: 0rem 10%;
    }
`;
