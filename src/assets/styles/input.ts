import styled from "styled-components";

export const InputStyle = styled.div `
    input {
        margin-top: 12.1px;
        margin-bottom: 10px;
        
        padding-left: 16px;
        width: calc(100% - 16px);
        height: 52.8px;

        background: var(--grey-1);
        color: black;

        &:placeholder {
            color: #868E96;
        }
    }
`;