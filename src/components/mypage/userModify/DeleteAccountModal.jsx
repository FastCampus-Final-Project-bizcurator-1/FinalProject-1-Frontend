import React from 'react';
import styled from 'styled-components';

export default function DeleteAccountModal({ setAccountModal }) {
  const handleDeleteAccount = () => {
    // api 연결
    console.log('탈퇴');
    // main으로 돌아가기
    window.location.href = '/';
  };
  return (
    <Wrapper>
      <Container>
        <Large>정말 탈퇴하시겠어요?</Large>
        <Small>지금 탈퇴하시면</Small>
        <Small>기업전용 특가 구매 혜택이 없어져요!</Small>
        <BtnGroup>
          <Btn continue={true} onClick={() => setAccountModal(false)}>
            계속 서비스 <span>이용하기</span>
          </Btn>
          <Btn onClick={() => handleDeleteAccount()}>
            혜택 포기하고 <span>탈퇴하기</span>
          </Btn>
        </BtnGroup>
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
  @media (max-width: 768px) {
    padding: 0 15px;
  }
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
    height: 170px;
  }
`;

const Large = styled.p`
  color: #2b66f6;
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
  margin-top: 5px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const BtnGroup = styled.div`
  width: 90%;
  ${props => props.theme.variables.flex('', 'space-around', 'center')};
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Btn = styled.button`
  width: 48%;
  height: 40px;
  ${props => props.theme.variables.flex('', 'center', 'center')};
  font-size: 13px;
  font-weight: 600;
  color: ${props => (props.continue ? '#2b66f6' : '#797979')};
  border: ${props =>
    props.continue ? '1px solid #2b66f6' : '1px solid #d0d0d0'};
  border-radius: 999px;
  background-color: ${props =>
    props.continue ? 'transparent' : '1px solid #f5f5f5'};
  margin-top: 15px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    ${props => props.theme.variables.flex('column', 'center', 'center')};
    height: 45px;
    font-size: 11px;
  }
`;
