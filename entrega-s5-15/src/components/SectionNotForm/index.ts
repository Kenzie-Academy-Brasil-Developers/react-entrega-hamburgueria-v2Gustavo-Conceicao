import styled from "styled-components";

export const SectionStyled = styled.section`
    max-width: 380px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    
    @media(max-width: 768px){
        height: 50vh;
    }

    @media(max-width: 320px){
        width: 100%;
        margin-left: 40px;
    }
`