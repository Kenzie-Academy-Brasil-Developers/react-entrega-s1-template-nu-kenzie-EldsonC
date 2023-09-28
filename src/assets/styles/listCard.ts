import styled from "styled-components";

export const ListCardStyle = styled.div `
    width: 560px;
    max-width: 100%;

    display: flex;
    flex-direction: column;

    .container_cards {
        margin-top: 29px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    @media screen and (max-width: 923px) {
        padding: 0px 29px;
        width: calc(100% - 58px);

        .header_list {
            margin-top: 19px;
        }

        .container_cards {
            padding-bottom: 30px;
        }
    }
`;