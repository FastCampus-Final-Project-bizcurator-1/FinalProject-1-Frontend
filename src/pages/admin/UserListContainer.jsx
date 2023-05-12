import React from 'react';
import styled from 'styled-components';

export default function UserListContainer() {
  return <Container>asd</Container>;
}

const Container = styled.div`
  ${props => props.theme.variables.flex('column', '', 'center')}
  width: 100%;
  height: 100px;
  font-size: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  left: 10%;
  margin-top: 30px;
`;
