import styled from "styled-components";
import InputForm from ".";


export const InputStyled = styled(InputForm)`   
    fieldset{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 25px;
    }

    label {
        font-size: 12px;
        font-weight: 400;
    }

    input {
        max-width: 452px;
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
