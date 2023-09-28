import styled from "styled-components";

export const MainStyle = styled.main `
    width: 100vw;
    height: calc(100vh - 88px);

    display: flex;
    justify-content: center;

    section {
        margin-top: 39px;
        width: 59.688rem;
        max-width: 100%;
        height: calc(100% - 39px);

        display: flex;
        justify-content: space-between;

        .container_form {
            display: flex;
            flex-direction: column;
            gap: 18px;
        }
    }

    @media screen and (max-width: 923px){
        section {
            flex-direction: column;
            align-items: center;
            width: calc(100% - 58px);
        }
    }
`;