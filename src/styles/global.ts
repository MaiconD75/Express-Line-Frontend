import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f5f5f5;
  }

  body,
  input,
  button,
  p,
  span,
  a {
    font: 500 16px 'Poppins', sans-serif;
    letter-spacing: 0.02em;
  }

  em {
    font: 20px 'Roboto', sans-serif;
    color: #333;
    color: #ccc;
  }
`;
