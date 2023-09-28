import styled from "styled-components";

export const ButtonStyle = styled.div `
    .active {
        margin-top: 26px;
        width: 100%;
        height: 48px;

        border-radius: 8px;

        background-color: var(--color-primary);
        color: var(--grey-1);

        cursor: pointer;
    }

    .notActive {
        margin-top: 26px;
        width: 100%;
        height: 48px;

        border-radius: 8px;

        background-color: var(--color-primary-2);
        color: var(--grey-1);
    }
`;