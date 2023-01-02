import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  background-color: #f5f5f5;
  padding: 0.6rem 0.2rem;

.logo {
  height: 37px;
  width: 160px;
}

.iconHeader {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 30px;
  height: 30px;
  cursor: pointer;

}

.iconHeader > p {
  /* height: 35px; */
  width: 20px;
  border-radius: 7px;
  background-color: #27AE60;
  text-align: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 800;
  padding: 2px;
  position: absolute;
  bottom: 15px;
  left: 15px;
}

.iconHeader > img {
  position: absolute;
  top: 5px;
}

.iconLogout {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-top: 9px;
}
`   