import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --text-primary: #272f23;
        --text-secondary: #272f23;
        --text-light: #272f23;
        --white: #ffffff;
        --background-light: #c4cfbf;
    }
    @font-face {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        src: local(''),
            url('/fonts/noto-sans-v27-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/noto-sans-v27-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Noto Sans', sans-serif;
        margin: 0;
        background-color: var(--background-primary);
        color: var(--text-primary);
    }
    
    h1 {
        margin-top: 0;
    }
`;

export default GlobalStyle;
