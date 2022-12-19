import styled from "styled-components";

export const DivPrimary = styled.div`
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    
    img {
        max-height: 55px;
        min-width: 240px;
    }

    div {
        width: 95%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        /* border: 1px solid #E0E0E0; */
        box-shadow: 0 0 3px 0 #00000050;
        padding: 10px 0;
        padding-left: 15px;
        padding-right: 5px;
        border-radius: 5px;
    }

    div > figure {
        height: 60px;
        width: 60px;
        padding: 18px;
        border-radius: 5px;
        background-color: #27AE6010;
    }

    div > figure > img {
        width: 25px;
        height: 25px;
        object-fit: contain;
    }

    div > p {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        color: #999999;
    }

    figure {
        height: 60px;
        
    }
`