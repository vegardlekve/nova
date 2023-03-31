import React from "react";
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
        return <div>Error</div>;
    }

    console.log(data);
    return (
        <main>
            <div>
                <h1>Home</h1>
            </div>
        </main>
    );
}
