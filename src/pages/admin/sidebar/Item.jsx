import React from 'react';
import styled from 'styled-components';

export default function Item({ select, text, dataId }) {
  return (
    <Container className={select === dataId ? 'active' : ''} data-id={dataId}>
      {text}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  font-size: 16px;

  border-bottom: 3px solid #d0d0d0;

  &.active {
    border-bottom: 3px solid #2b66f6;
  }
  &:hover {
    border-bottom: 3px solid #2b66f6;
  }
`;
