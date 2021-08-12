import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    html, body :root{
        min-height: 100%;
    }
    
    body{
        color: white;
        background-image: url(https://cdn.statically.io/img/www.abctudo.com.br/f=auto/wp-content/uploads/2021/04/futebol-gol.jpg);
        background-size: 100%;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;

        a{
            text-decoration: none;
            color: white;
        }
    }
`;