import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    /* :root{
        --primary: #FF8A00;
        --red: #E52e54;
        --blue: #5429CC;
        --green: #33CC95;
        --black: #000000;

        --background: #0E0E0E;
        --text-color: #FFFFFF;
        --black-overlay: #00000080;

    } */

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    /* html {
        @media (max-width: 1080px){
            font-size: 93,75%;
        }

        @media (max-width: 720px){
            font-size: 87,5%;
        }
    } */

    body {
        /* background: var(--background); */
        -webkit-font-smooth: antialiased;
    }

    /* body, input, textarea, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    } */

    a{
        text-decoration: none;
        color: currentColor;
    }

    button {
        cursor: pointer;
    }
`