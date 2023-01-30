import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {      
        -webkit-font-smoothing: antialiased;
        font-family: 'Poppins', sans-serif;
        background-color: #000;
    }

    ul, ol{
        padding: 0;
        margin: 0;
        list-style: none;
    }

    li {
        list-style: none;
    }

    button {
        cursor: pointer;
        border: 0;
        text-transform: none;
        background: transparent;
    }

    [disabled] {
        cursor: not-allowed;
    }
`;