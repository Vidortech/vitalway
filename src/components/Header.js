// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: center;
`;

function Header() {
  return (
    <HeaderStyled>
      <h1>VitalWay - Roteamento de Emergência</h1>
    </HeaderStyled>
  );
}

export default Header;
