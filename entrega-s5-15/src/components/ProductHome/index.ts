import styled from "styled-components";

export const ProductsStyled = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 2px solid #e0e0e0;
  padding-bottom: 10px;
  border-radius: 5px;

 figure {
  width: 100%;
  background-color: #f5f5f5;
}

.imgProduct {
  width: 100%;
  height: 180px;
  object-fit: contain;
}

.divInfo {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.divInfo > h2 {
  font-size: 18px;
  font-weight: 700;
}

.divInfo > p {
  font-size: 12px;
  font-weight: 400;
  color: #828282;
}

.divInfo > span {
  font-size: 14px;
  font-weight: 600;
  color: #27ae60;
}

.divInfo > button {
  height: 40px;
  max-width: 100px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background-color: #bdbdbd;
}

.divInfo > button:hover {
  background-color: #27ae60;
  box-shadow: 0 0 15px #bdbdbd;
}

`