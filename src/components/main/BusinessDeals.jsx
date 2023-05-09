import React from 'react';
import styled from 'styled-components';

export default function BusinessDeals({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 26px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 300;
  color: #ffffff;
  background-color: #3e55ef;
`;
