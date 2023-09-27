import styled from "styled-components";

export const MainStyle = styled.main `
    width: 100vw;
    height: calc(100vh - 88px);

    display: flex;
    justify-content: center;

    section {
        margin-top: 39px;
        width: 59.688rem;
        height: calc(100% - 39px);

        display: flex;
        justify-content: space-between;

        .container_form {
            display: flex;
            flex-direction: column;
            gap: 18px;
        }
    }
`;