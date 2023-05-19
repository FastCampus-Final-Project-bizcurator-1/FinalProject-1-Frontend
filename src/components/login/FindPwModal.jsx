import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

export default function FindPwModal() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Large>임시 비밀번호 발송을 완료하였습니다.</Large>
        <Small>해당 비밀번호를 이용하여 로그인 해주세요.</Small>
        <Btn onClick={() => navigate('/login')}>로그인 하러가기</Btn>
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

const Small = styled.p`
  font-size: 13px;
  margin-top: 10px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Btn = styled.button`
  width: 65%;
  height: 45px;
  font-weight: 600;
  color: #fff;
  border: 0;
  border-radius: 999px;
  background-color: #2b66f6;
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    background-color: #164ac9;
  }
`;
