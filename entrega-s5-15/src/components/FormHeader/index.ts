import styled from "styled-components";

export const FormHeaderStyled = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;

    input {
        height: 55px;
        width: 350px;
        border-radius: 8px;
        padding: 0px 10px 0px 15px;
        border: 2px solid #e0e0e0;
        font-size: 16px;
        font-weight: 400;
        text-decoration: none;
        outline: none ;
    }

    button {
        border: none;
        position: absolute;
        right: 10px;
        top: 8px;
        cursor: pointer;
    }
`