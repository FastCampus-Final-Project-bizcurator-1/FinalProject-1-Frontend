import React, { useState } from 'react';
import styled from 'styled-components';
import { BsCheckLg } from 'react-icons/bs';
import LoginInfo from '../../components/signUp/LoginInfo';

export default function SignUp() {
  // 로그인 정보
  const [loginData, setLoginData] = useState(false);

  return (
    <Wrapper>
      <Logo src="./images/logo_origin.png" />
      <Progress>
        <CheckCircle>
          <Icon>
            <BsCheckLg />
          </Icon>
        </CheckCircle>
        <ProgressLine left={true} finish={loginData.password?.length} />
        <CircleFill finish={loginData.password?.length}>2</CircleFill>
        <ProgressLine />
        <Circle status={true}>3</Circle>
      </Progress>
      <FormContainer>
        <LoginInfo setLoginData={setLoginData} loginData={loginData} />

        <StartBtn>시작하기</StartBtn>
      </FormContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto 100px;
  padding: 0 10px;
  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

const Logo = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 170px;
    margin-bottom: 20px;
  }
`;

const Progress = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ProgressLine = styled.hr`
  width: 25%;
  height: 2px;
  background-color: ${props => (props.finish ? '#2b66f6' : '#B5CDFA')};
  border: 0;
  position: absolute;
  ${props => (props.left ? 'left: 20%' : 'right : 20%')};
`;

const CheckCircle = styled.div`
  width: 55px;
  height: 55px;
  border: 2px solid #2b66f6;
  border-radius: 100%;
  background-color: #fff;
  color: #2b66f6;
  position: relative;
  z-index: 1;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const Icon = styled.div`
  font-size: 30px;
  position: absolute;
  top: 24%;
  left: 22%;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const CircleFill = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 100%;
  background-color: ${props => (props.finish ? '#2b66f6' : '#b5cdfa')};
  color: #fff;
  font-size: 25px;
  text-align: center;
  line-height: 200%;
  position: relative;
  z-index: 1;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    line-height: 180%;
  }
`;

const Circle = styled.div`
  width: 55px;
  height: 55px;
  border: ${props =>
    props.finish ? '2px solid #2b66f6' : '2px solid #b5cdfa'};
  border-radius: 100%;
  background-color: #fff;
  color: ${props => (props.finish ? '#2b66f6' : '#b5cdfa')};
  font-size: 24px;
  text-align: center;
  line-height: 200%;
  position: relative;
  z-index: 1;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    line-height: 180%;
  }
`;

const FormContainer = styled.div`
  width: 100%;
`;

const StartBtn = styled.button`
  width: 100%;
  height: 52px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  border: 0;
  border-radius: 999px;
  background-color: #2b66f6;
  cursor: pointer;
`;
