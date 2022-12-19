import styled from "styled-components";


export const InputStyled = styled.div`
    display: flex;
    flex-direction: column;
    
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
    }

    input:focus{
        outline: none;
        box-shadow: 0 0 3px 0 #00000050;
    }
`