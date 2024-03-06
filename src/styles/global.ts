import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #EFEFEE;
  }
  body, input, textarea, button {
    font-family: 'Roboto';
    font-weight: 400;
  }
`;

export default GlobalStyle;
