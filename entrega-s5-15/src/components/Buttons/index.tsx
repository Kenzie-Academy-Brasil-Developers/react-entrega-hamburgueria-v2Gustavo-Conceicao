import React from 'react'
// import { Link } from 'react-router-dom';
// import styled from "styled-components";

interface iButton {
    text: string;
}

const ButtonPrimary = ({text}:iButton) => {
  return (
    <button>{text}</button>
  )
}

export default ButtonPrimary;