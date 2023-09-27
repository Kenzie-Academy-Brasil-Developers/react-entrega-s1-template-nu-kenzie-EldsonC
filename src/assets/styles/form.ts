import styled from "styled-components";

export const FormStyle = styled.form `
    padding: 30px 21px;
    width: calc(355px - 42px);
    height: calc(434px - 60px);

    display: flex;
    flex-direction: column;

    border: 1px solid #00000033;

    label {
        color: #212529;
    }

    .label_tip {
        margin-bottom: 12.1px;
        color: #868E96;
    }
`;