import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    --primary: #2d2d2d;
    --secondary: #535353;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 'Montserrat';
}

main {
    min-height: 100vh;
    background: #f1f1f1;
}

h2 {
    font-size: 1.2rem;
    color: var(--primary);
    padding: 1.5rem;
}

h3 {
    font-family: 'Montserrat';
    font-size: 1rem;
    color: var(--secondary);
    padding: 1rem;
}

a {
    color: inherit;
    text-decoration: none;
}

p {
    line-height: 150%;
}

button{
    all: unset;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
}
`;

export default GlobalStyle;
