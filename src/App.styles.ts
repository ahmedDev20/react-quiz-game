import { createGlobalStyle } from 'styled-components';
import BGImage from './assets/images/bg.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif
    }
    
    body {
        height: 90%;
        background-image: url(${BGImage});
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center
    }

    .loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        font-size: 3em;
    }

    .spin {
        animation: spin 2s infinite linear;
    }

    @keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
        }
    }
    
`;
