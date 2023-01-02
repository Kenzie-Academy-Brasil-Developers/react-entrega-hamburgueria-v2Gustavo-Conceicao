import styled from "styled-components";

export const ListStyled = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;
  list-style: none;

@media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
}
`