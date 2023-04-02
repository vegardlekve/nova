import React from "react";
//Styles
import styled from "styled-components";

const Footer = () => {
    return (
        <StyledFooter>
            <h3>Nova Avenue</h3>
        </StyledFooter>
    );
};

export default Footer;

const StyledFooter = styled.footer`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
