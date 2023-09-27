import styled from "styled-components";

export const CardStyle = styled.div `
    padding: 0px 18px;
    width: calc(100% - 36px);
    height: 87px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--grey-1);
    border-radius: 4px;

    border-left: 4px solid var(--color-secondary);

    .left_container {
        h3 {
            margin-bottom: 2px;
            color: var(--grey-4);
        }

        p {
            color: var(--grey-3);
        }
    }

    .right_container {
        p {
            color: var(--grey-4);
        }
    }
`;