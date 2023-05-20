import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

export default function FindIdModal() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Large>인증 메일이 발송되었습니다.</Large>
        <Small>
          발송 메일을 통해 인증을 완료하시면
          <br /> 아이디를 확인하실 수 있습니다.
        </Small>
        <BtnGroup>
          <Btn onClick={() => navigate('/login')}>로그인 하러가기</Btn>
          <Btn find={true} onClick={() => navigate('/findpw')}>
            비밀번호 찾기
          </Btn>
        </BtnGroup>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  ${props => props.theme.variables.flex('', 'center', 'center')};
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
  ${props => props.theme.variables.flex('column', 'center', 'center')};
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
  text-align: center;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Small = styled.p`
  font-size: 13px;
  line-height: 1.5;
  text-align: center;
  margin-top: 10px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const BtnGroup = styled.div`
  width: 90%;
  ${props => props.theme.variables.flex('', 'space-around', 'center')};
`;

const Btn = styled.button`
  width: 46%;
  height: 45px;
  font-weight: 600;
  color: ${props => (props.find ? '#2b66f6' : '#fff')};
  border: ${props => (props.find ? '2px solid #2b66f6' : '0')};
  border-radius: 999px;
  background-color: ${props => (props.find ? 'transparent' : '#2b66f6')};
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    background-color: ${props => (props.find ? 'transparent' : ' #164ac9')};
    border: ${props => (props.find ? '2px solid #164ac9' : '0')};
    color: ${props => (props.find ? '#164ac9' : '#fff')};
  }
  @media (max-width: 768px) {
    height: 40px;
  }
`;
