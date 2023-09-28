import styled from "styled-components";

export const HeaderStyle = styled.header `
    width: 100vw;
    height: 88px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--grey-1);

    box-shadow: 0px 4px 32px -12px #00000040;

    .container_header {
        width: 59.688rem;
    }

    @media screen and (max-width: 490px){
        padding: 0px 29px;
        width: calc(100vw - 58px);
        height: 69px;
    }
`;