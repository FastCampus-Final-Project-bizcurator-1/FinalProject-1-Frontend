import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function FindIdModal({ setOpen }) {
  // 경로이동을 위함
  const navigate = useNavigate();
  // 인증여부 확인
  const [success, setSuccess] = useState(false);
  const handleSubmit = () => {
    // api를 통해 인증여부 확인
    // setSuccess(true);
    // 만약, 인증 x
    if (success) {
      setOpen(false);
      navigate('/login');
    } else {
      alert('인증에 실패하였습니다. 다시 시도해주세요');
      setOpen(false);
      window.location.reload();
    }
  };
  return (
    <Wrapper>
      <Container>
        <Large>인증 메일이 발송되었습니다.</Large>
        <Small>발송된 이메일을 통해 인증을 완료해 주세요.</Small>
        <Btn onClick={() => handleSubmit()}>인증완료</Btn>
        <Notice>* 인증완료 후, 해당 버튼을 클릭해주세요</Notice>
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

const Notice = styled.p`
  color: #d30000;
  margin: 10px 0;
  font-size: 12px;
`;
