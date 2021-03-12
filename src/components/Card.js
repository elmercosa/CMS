import React from "react";
import styled from "styled-components";
const SCard = styled.div`
  text-align: center;
  width: 300px;
  height: 300px;
  background: white;
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  box-shadow: 0px 10px 40px 0px rgba(138, 149, 158, 0.2);
`;
const Card = () => {
  return <SCard><h1>Switch Theme</h1></SCard>;
};
export default Card;
