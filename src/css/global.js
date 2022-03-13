import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    body {
        background-color: #FAFAFA;
        margin: 54px 0 0;
        font-family: 'Roboto', sans-serif;
        color: #262626;
        font-weight: 400;
        font-size: 14px;
        -webkit-font-smooth: antialiased;
    }

    a{
        text-decoration: none;
        color: currentColor;
    }

    button {
        cursor: pointer;
    }
    
`