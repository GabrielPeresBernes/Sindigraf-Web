import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: rgb(33, 33, 33);
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  ::placeholder {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.6);
  }

  section {
    scroll-margin-top: 90px;
  }

  .card, .card-header, .card-body {
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    overflow: visible;
  }

  p {
    margin: 0;
  }

  hr {
    margin: 0;
  }

  @media (max-width: 840px) {
    ::placeholder {
      font-size: 16px;
    }

    section {
      scroll-margin-top: 95px;
    }
  }
`;
