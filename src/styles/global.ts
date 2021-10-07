import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f5f5f5;
    overflow: hidden;
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
    color: #ccc;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    z-index: 10;
  }

  ::-webkit-scrollbar-track{
    background: #fefefe;
  }

  ::-webkit-scrollbar-thumb {
    background: #cecece;
    border-radius: 4px;
  }
`;
