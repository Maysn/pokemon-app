import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html {
    box-sizing: border-box;
}
*, ::after, ::before {
    box-sizing: inherit;
}
body {
    position: relative;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    font-size: 16px;
    font-weight: 300;
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.text};
    
    /* &::before {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-position: top center;
        background-size: cover;
        
    } */
}
`;
