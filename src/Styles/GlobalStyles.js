import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    margin: 0rem 10%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    //background: #f1f1f1;
    --primary: #2d2d2d;
    --secondary: #535353;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 'Montserrat';
}

h3 {
    font-family: 'Montserrat';
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
}
`;

export default GlobalStyle;
