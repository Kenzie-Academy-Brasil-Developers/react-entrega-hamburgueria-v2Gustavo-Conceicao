import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 90px;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 50px;
    }
`