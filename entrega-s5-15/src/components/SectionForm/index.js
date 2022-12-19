import styled from "styled-components";

export const SectionForm = styled.section `
    width: 40%;
    /* max-width: 500px; */
    height: 100vh;
    max-height: 530px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    gap: 10px;


    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    div > h2 {
        font-size: 18px;
        font-weight: 700;
        color: #333333;
    }
`