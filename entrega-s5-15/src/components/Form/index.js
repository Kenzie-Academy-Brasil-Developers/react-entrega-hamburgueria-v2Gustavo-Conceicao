import styled from "styled-components";

export const FormStyled = styled.form `
    display: flex;
    flex-direction: column;
    border: 2px solid #F5F5F5;
    border-radius: 5px;
    padding: 30px 25px;
    gap: 25px;
    
    div:first-child {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    div:first-child > span {
        text-decoration: underline;
        color: #828282;
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
    }

    div:first-child > span:hover {
        text-decoration: dotted;
    }

    span {
        display: flex;
        width: 90%;
        margin: 0 auto;
        text-align: center;
    }

    button {
        height: 60px;
        max-width: 452px;
        border-radius: 8px;
        border: none;
        background-color: #F5F5F5;
        cursor: pointer;
    }

    button:hover {
        background-color: #E0E0E050;
        border: 2px solid #E0E0E0;
        font-weight: 500;
        box-shadow: 0 0 2px 0 #333333;
    }
    
`