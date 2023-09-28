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
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 6px;

        p {
            color: var(--grey-4);
        }
    }

    @media screen and (max-width: 490px){
        padding-top: 8px;
        padding-bottom: 19px;
        height: auto;
        flex-direction: column;
        align-items: flex-start;
        gap: 25px;

        .left_container {
            p {
                margin-top: 10px;
            }
        }

        .right_container {
            align-items: flex-start;

            p {
                margin-bottom: 10px;
            }
        }
    }
`;