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
        background-color: #121214;

        margin: 10px 20px;

    }

    ul, ol{
        padding: 0;
        margin: 0;
        list-style: none;
    }

    li {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
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