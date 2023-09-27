import styled from "styled-components";

export const TotalStyled = styled.div `
    padding: 0px 23px;
    width: calc(100% - 46px);
    height: 96px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 1px solid var(--grey-2);

    .left_container_total {
        display: flex;
        flex-direction: column;
        gap: 6px;

        h3 {
            color: var(--grey-4);
        }

        p {
            color: var(--grey-3);
        }
    }

    .right_container_total {
        p {
            color: var(--color-primary);
        }
    }
`;