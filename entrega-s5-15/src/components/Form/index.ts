import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid #f5f5f5;
  border-radius: 5px;
  padding: 20px 25px;
  gap: 20px;

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
    background-color: #219653;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    color: #ffffff;
  }

  button:hover {
    box-shadow: 0 0 15px #219653;
    font-weight: 700;
    box-shadow: 0 0 2px 0 #333333;
  }

  @media(max-width: 320px){
    margin-left: 40px;
  }
`
