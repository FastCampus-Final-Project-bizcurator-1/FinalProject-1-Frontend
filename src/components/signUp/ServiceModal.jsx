import React from 'react';
import styled from 'styled-components';

export default function ServiceModal({ setOpen }) {
  return (
    <Wrapper>
      <Container>
        <Large>
          <Span>서비스 정책</Span>에 대해 <br />
          필수 항목을 모두 체크해주세요.
        </Large>
        <Btn onClick={() => setOpen(false)}>확인</Btn>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
`;

const Container = styled.div`
  width: 380px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 0;
  border-radius: 10px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 290px;
    height: 150px;
  }
`;

const Large = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  text-align: center;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Span = styled.span`
  color: #2b66f6;
`;

const Btn = styled.button`
  width: 40%;
  height: 40px;
  font-weight: 600;
  color: #fff;
  border: 0;
  border-radius: 999px;
  background-color: #2b66f6;
  margin-top: 15px;
  cursor: pointer;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    height: 35px;
    font-size: 12px;
  }
`;
