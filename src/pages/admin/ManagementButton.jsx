import React from 'react';
import styled from 'styled-components';

export default function ManagementButton() {
  return (
    <Container>
      <Row1>
        <Button className="active">사업자등록증</Button>
        <Button className="active">추가첨부서류</Button>
      </Row1>
      <Row2>
        <Button>가입승인</Button>
        <Button>가입반려</Button>
      </Row2>
    </Container>
  );
}

const Container = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', 'center')}
  width:100%;
  margin-top: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Row1 = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', 'center')}
  width: 49%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Row2 = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', 'center')}
  width: 49%;

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 5px;
  }
`;
const Button = styled.button`
  width: 48%;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  border: 1.5px solid #2b66f6;
  border-radius: 10px;
  background-color: #ffffff;
  color: #2b66f6;

  &.active {
    background-color: #2b66f6;
    color: #ffffff;
  }
`;
