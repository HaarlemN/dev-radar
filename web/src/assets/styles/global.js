import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    background: #e5e6f0;
    -webkit-font-smoothing: antialiased;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button {
    font: 400 1.6rem Roboto, sans-serif;
  }

  #root {
    display: flex;
    
    width: 90vw;

    max-width: 700px;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }

    #root {
      max-width: 1100px;
    }
  }
`;