import styled from "styled-components";

export const SectionForm = styled.section`
  min-width: 400px;
  max-width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 768px){
    width: 100vw;
    padding: 18px;
    height: 50vh;
  }

  @media(max-width: 425px){
        width: 100%;
    }

    @media(max-width: 320px){
        width: 100%;
        margin-left: 40px;
    }
`
