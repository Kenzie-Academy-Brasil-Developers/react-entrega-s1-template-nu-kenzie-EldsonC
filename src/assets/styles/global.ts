import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;

        border: none;
        outline: none;

        text-decoration: none;
        list-style: none;
    }

    :root {
        --color-primary: #FD377E;
        --color-primary-2: #E34981;
        --color-secondary: #03B898;

        --grey-4: #000000;
        --grey-3: #868E96;
        --grey-2: #E9ECEF;
        --grey-1: #F8F9FA;
    }

    .title-1 {
        font-size: 38px;
        font-weight: 700;
    }

    .title-2 {
        font-size: 22px;
        font-weight: 700;
    }

    .title-3 {
        font-size: 16px;
        font-weight: 700;
    }

    .title-4 {
        font-size: 12px;
        font-weight: 700;
    }

    .headline {
        font-size: 16px;
        font-weight: 400;
    }

    .body {
        font-size: 12px;
        font-weight: 400;
    }

    body {
        font-family: "Nunito", sans-serif;
    }
`;