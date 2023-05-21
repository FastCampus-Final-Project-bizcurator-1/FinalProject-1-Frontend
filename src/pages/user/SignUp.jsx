import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsCheckLg } from 'react-icons/bs';
import LoginInfo from '../../components/signUp/LoginInfo';
import CorporateInfo from '../../components/signUp/CorporateInfo';
import ServiceAgreement from '../../components/signUp/ServiceAgreement';
import ServiceModal from '../../components/signUp/ServiceModal';

export default function SignUp() {
  // 로그인 정보
  const [loginData, setLoginData] = useState({
    userId: '',
    managerName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  // 이메일 인증확인
  const [confirmEmail, setConfirmEmail] = useState(false);
  // 로그인정보 기입 완료 여부
  const [loginFinish, setLoginFinish] = useState(false);
  // 사업자 정보
  const [corporateData, setCorporateData] = useState({
    companyName: '',
    corporateNumber: '',
    ownerName: '',
    openingDate: '',
  });
  // 사업자 정보 진위 확인
  const [isVerify, setIsVerify] = useState(false);
  // 사업자정보 기입 완료 여부
  const [corporateFinish, setCoporateFinish] = useState(false);
  // 서비스정책 완료 x  => 모달
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 로그인정보 완료 체크
    if (
      loginData.userId.length > 0 &&
      loginData.managerName.length > 0 &&
      loginData.phoneNumber.length > 0 &&
      loginData.email.length > 0 &&
      loginData.password.length > 0 &&
      confirmEmail
    ) {
      setLoginFinish(true);
    }
    // 사업자정보 완료 체크
    if (
      corporateData.companyName.length > 0 &&
      corporateData.corporateNumber.length > 0 &&
      corporateData.ownerName.length > 0 &&
      corporateData.openingDate.length > 0 &&
      isVerify
    ) {
      setCoporateFinish(true);
    }
  }, [loginData, confirmEmail, corporateData, isVerify]);

  useEffect(() => {
    // console.log(loginFinish, corporateFinish);
    const startBtn = document.getElementById('startBtn');
    if (!(loginFinish && corporateFinish)) {
      startBtn.disabled = true;
    }
  }, [loginFinish, corporateFinish]);

  const handleSubmit = () => {
    // 서비스정책 필수 항목 체크 확인
    const checkList = document.querySelectorAll('.serviceArea input:required');
    let count = 0;
    for (let i = 0; i < checkList.length; i++) {
      if (checkList[i].checked) {
        count += 1;
      }
    }
    if (count === 3) {
      // console.log('완료');
      // api 연결 => 회원가입
    } else {
      // console.log('미완료');
      setOpen(true);
    }
  };

  return (
    <Wrapper>
      {open && <ServiceModal setOpen={setOpen} />}
      <Logo src="./images/logo_origin.png" />
      <Progress>
        <CheckCircle>
          <Icon>
            <BsCheckLg />
          </Icon>
        </CheckCircle>
        <ProgressLine left={true} finish={loginFinish} />
        <CircleFill finish={loginFinish}>2</CircleFill>
        <ProgressLine finish={corporateFinish} />
        <Circle finish={corporateFinish}>3</Circle>
      </Progress>
      <FormContainer>
        <LoginInfo
          setLoginData={setLoginData}
          loginData={loginData}
          setConfirmEmail={setConfirmEmail}
          confirmEmail={confirmEmail}
        />
        <CorporateInfo
          setCorporateData={setCorporateData}
          corporateData={corporateData}
          setIsVerify={setIsVerify}
          isVerify={isVerify}
        />
        <ServiceAgreement />
        <StartBtn
          id="startBtn"
          finish={loginFinish && corporateFinish}
          onClick={() => handleSubmit()}
        >
          시작하기
        </StartBtn>
      </FormContainer>
      {loginFinish && corporateFinish ? (
        <></>
      ) : (
        <Error>* 필수 항목을 확인해주세요 </Error>
      )}
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
  color: ${props => (props.finish ? '#fff' : '#797979')};
  border: ${props => (props.finish ? '0' : '1px solid #d0d0d0')};
  border-radius: 999px;
  background-color: ${props => (props.finish ? '#2b66f6' : '#f5f5f5')};
  cursor: ${props => (props.finish ? 'pointer' : 'default')};
  transition: 0.3s ease;
`;

const Error = styled.p`
  color: #d30000;
  margin-top: 15px;
  font-size: 12px;
`;
