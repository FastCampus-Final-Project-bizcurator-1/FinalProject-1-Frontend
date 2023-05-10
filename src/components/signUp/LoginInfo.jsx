import React, { useState } from 'react';
import styled from 'styled-components';

export default function LoginInfo({ loginData, setLoginData }) {
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
    <Container>
      <Title>로그인 정보</Title>
      <TextField>
        <SubTitle>아이디</SubTitle>
        <Input type="text" id="userId" onChange={handleChange} />
      </TextField>
      <TextField>
        <SubTitle>이름</SubTitle>
        <Input type="text" id="managerName" onChange={handleChange} />
      </TextField>
      <TextField>
        <SubTitle>연락처</SubTitle>
        <Input type="text" id="phoneNumber" onChange={handleChange} />
      </TextField>
      <TextField>
        <SubTitle>이메일</SubTitle>
        <Input type="email" id="email" onChange={handleChange} />
        <Btn finish={confirmEmail} onClick={e => e.preventDefault()}>
          {confirmEmail ? '인증완료' : '인증메일발송'}
        </Btn>
      </TextField>
      <TextField>
        <SubTitle>
          비밀번호 (영문 대/소문자, 숫자, 특수문자 조합 8~16자리)
        </SubTitle>
        <Input type="password" id="password" onChange={validPassword} />
      </TextField>
      {pwError && (
        <Error>8~16자리의 영문 대/소문자, 숫자, 특수문자를 사용하세요.</Error>
      )}
      <TextField>
        <SubTitle>비밀번호 확인</SubTitle>
        <Input type="password" id="checkPassword" onChange={checkPassword} />
      </TextField>
      {checkPw && <Error>비밀번호가 일치하지 않습니다.</Error>}
    </Container>
  );
}

const Container = styled.form`
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
  border: ${props => (props.finish ? '0' : '2px solid #2b66f6')};
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
