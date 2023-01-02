import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkToRegister = styled(Link)`
    height: 60px;
    max-width: 452px;
    border-radius: 8px;
    border: none;
    background-color: #F5F5F5;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: #999999;
    cursor: pointer;
    text-align: center;
    padding: 20px 0;


    &:hover {
        background-color: #E0E0E050;
        font-weight: 500;
        box-shadow: 0 0 2px 0 #333333;
    }
    
`