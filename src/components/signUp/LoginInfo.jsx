import React, { useState } from 'react';
import styled from 'styled-components';

export default function LoginInfo({ loginData, setLoginData }) {
  // 아이디 패턴 확인을 위함
  const [idError, setIdError] = useState(false);
  // 연락처 패턴 확인을 위함
  const [phoneError, setPhoneError] = useState(false);
  // 이메일 패턴 확인을 위함
  const [emailError, setEmailError] = useState(false);
  // 비밀번호
  const [password, setPassword] = useState('');
  // 비밀번호 패턴 확인을 위함
  const [pwError, setpwError] = useState(false);
  // 비밀번호 일치 확인을 위함
  const [checkPw, setCheckPw] = useState(false);
  // 이메일 인증확인
  const [confirmEmail, setConfirmEmail] = useState(false);

  // loginData 설정
  const handleChange = e => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  // 아이디 패턴 확인
  const validId = e => {
    const reg = /^[a-zA-Z0-9]+$/;
    if (reg.test(e.target.value)) {
      setIdError(false);
      handleChange(e);
    } else {
      setIdError(true);
    }
  };

  // 연락처 패턴 확인
  const validPhoneNumber = e => {
    // 일반 연락처
    const reg1 = /^\d{2,3}-\d{3,4}-\d{4}$/;
    // 핸드폰 연락처
    const reg2 = /^\d{3}-\d{3,4}-\d{4}$/;
    // 연락처 패턴확인
    if (reg1.test(e.target.value)) {
      setPhoneError(false);
      handleChange(e);
    } else if (reg2.test(e.target.value)) {
      setPhoneError(false);
      handleChange(e);
    } else {
      setPhoneError(true);
    }
    // 자동 구분자(-) 추가
    if (e.target.value[1] === '2') {
      e.target.value = e.target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,2})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
        .replace(/(-{1,2}$)/g, '');
    } else if (e.target.value[2] === '0') {
      e.target.value = e.target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
        .replace(/(-{1,2}$)/g, '');
    } else {
      e.target.value = e.target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,3})(\d{0,4})$/g, '$1-$2-$3')
        .replace(/(-{1,2}$)/g, '');
    }
  };

  // 이메일 패턴 확인
  const validEmail = e => {
    const reg =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{2,3})(\]?)$/;
    if (reg.test(e.target.value)) {
      setEmailError(false);
      handleChange(e);
    } else {
      setEmailError(true);
    }
  };

  // 비밀번호 패턴 확인
  const validPassword = e => {
    const reg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,16}$/;
    if (reg.test(e.target.value)) {
      setPassword(e.target.value);
      setpwError(false);
    } else {
      setpwError(true);
    }
  };

  // 비밀번호 일치 확인
  const checkPassword = e => {
    if (e.target.value === password) {
      setCheckPw(false);
      e.target.id = 'password';
      handleChange(e);
    } else {
      setCheckPw(true);
    }
  };
  return (
    <Container className="loginInfo">
      <Title>로그인 정보</Title>
      <TextField>
        <SubTitle>아이디</SubTitle>
        <Input
          required
          type="text"
          id="userId"
          name="login"
          onChange={validId}
        />
      </TextField>
      {idError && <Error>영문 혹은 숫자의 조합으로 입력해주세요.</Error>}
      <TextField>
        <SubTitle>이름</SubTitle>
        <Input
          required
          type="text"
          id="managerName"
          name="login"
          onChange={handleChange}
        />
      </TextField>
      <TextField>
        <SubTitle>연락처 (숫자만 입력)</SubTitle>
        <Input
          required
          type="text"
          id="phoneNumber"
          name="login"
          onChange={validPhoneNumber}
        />
      </TextField>
      {phoneError && <Error>연락처를 올바르게 입력해주세요.</Error>}
      <TextField>
        <SubTitle>이메일</SubTitle>
        <Input
          required
          type="email"
          id="email"
          name="login"
          onChange={validEmail}
        />
        <Btn finish={confirmEmail} onClick={e => e.preventDefault()}>
          {confirmEmail ? '인증완료' : '인증메일발송'}
        </Btn>
      </TextField>
      {emailError && (
        <Error>@를 포함하여 이메일 형식에 맞게 작성해주세요.</Error>
      )}
      <TextField>
        <SubTitle>
          비밀번호 (영문 대/소문자, 숫자, 특수문자 조합 8~16자리)
        </SubTitle>
        <Input
          required
          type="password"
          id="password"
          name="login"
          onChange={validPassword}
        />
      </TextField>
      {pwError && (
        <Error>8~16자리의 영문 대/소문자, 숫자, 특수문자를 사용하세요.</Error>
      )}
      <TextField>
        <SubTitle>비밀번호 확인</SubTitle>
        <Input
          required
          type="password"
          id="checkPassword"
          name="login"
          onChange={checkPassword}
        />
      </TextField>
      {checkPw && <Error>비밀번호가 일치하지 않습니다.</Error>}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 25px;
`;

const Title = styled.p`
  font-size: 24px;
  color: #2b66f6;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const TextField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  line-height: 1.3;
  color: #797979;
  margin: 15px auto;
  position: relative;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const SubTitle = styled.p`
  margin-bottom: 2px;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  padding: 5px;
  border: 0;
  color: #434343;
  border-bottom: 1px solid #d0d0d0;
  ::placeholder {
    color: #d9d9d9;
  }
`;

const Error = styled.p`
  color: #d30000;
  margin: 5px 0;
  font-size: 12px;
`;

const Btn = styled.button`
  width: 95px;
  height: 30px;
  border: ${props => (props.finish ? '0' : '1px solid #2b66f6')};
  border-radius: 999px;
  background-color: ${props => (props.finish ? '#2b66f6' : 'transparent')};
  color: ${props => (props.finish ? '#fff' : '#2b66f6')};
  font-size: 12px;
  font-weight: 600;
  margin-top: 15px;
  position: absolute;
  bottom: 15%;
  right: 0;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 80px;
    height: 28px;
    font-size: 10px;
  }
`;
