import React from "react";
//Components
import Card from "../../components/card";
//Hooks
import DataSetup from "../../hooks/DataSetup";
import useSearch from "../../hooks/Search";
//Styles
import styled from "styled-components";

export default function Home() {
    const { data, isLoading, error } = DataSetup(
        "https://api.noroff.dev/api/v1/online-shop"
    );
    const { query, setQuery, searchResults } = useSearch(data);

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
                <SearchWrap>
                    <form action="">
                        <input
                            type="text"
                            placeholder="Search products"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                    </form>
                </SearchWrap>
                {searchResults.length ? (
                    <SearchOutput>
                        <Gallery>
                            {searchResults.map((product) => (
                                <Card key={product.id} product={product} />
                            ))}
                        </Gallery>
                    </SearchOutput>
                ) : (
                    ""
                )}
                <Gallery>
                    {products.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </Gallery>
            </div>
        </main>
    );
}

const SearchWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;

    form {
        width: 30%;
    }

    input {
        width: 100%;
        border: none;
        border: 1px solid;
        padding: 0.5rem;
        border-radius: 5px;

        &:focus {
            outline: none;
        }
    }
`;

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

const SearchOutput = styled.div`
    margin-bottom: 3rem;
`;
