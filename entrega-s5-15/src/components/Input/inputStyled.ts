import styled from "styled-components";


export const InputStyled = styled.div` 
    max-width: 500px;


    fieldset{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 25px;
        border: none;
    }

    label {
        font-size: 12px;
        font-weight: 400;
        color: #999999;
    }

    input {
        width: 100%;
        height: 60px;
        padding: 0 15px;
        border-radius: 8px;
        border: none;
        background-color: #F5F5F5;
        font-size: 16px;
        font-weight: 400;
        color: #333333;
        outline: none;
    }

    p{
        font-size: 12px;
        font-weight: 400;
        color: #E60000;
    }
`
