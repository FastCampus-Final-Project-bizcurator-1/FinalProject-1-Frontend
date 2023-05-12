import React from 'react';
import styled from 'styled-components';

export default function LoginModal({ setOpen }) {
  return (
    <Wrapper>
      <Container>
        <Large>
          등록되지 않은 아이디이거나, <br />
          아이디와 비밀번호가 일치하지 않습니다.
        </Large>
        <Small>아이디와 비밀번호를 다시 한 번 확인해주세요.</Small>
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
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Small = styled.p`
  font-size: 13px;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Btn = styled.button`
  width: 70%;
  height: 40px;
  font-weight: 600;
  color: #fff;
  border: 0;
  border-radius: 999px;
  background-color: #2b66f6;
  margin-top: 15px;
  cursor: pointer;
`;
