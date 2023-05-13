import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AdminLoginModal from '../../components/admin/AdminLoginModal';

export default function AdminLogin() {
  // 경로이동을 위함
  const navigate = useNavigate();
  // 모달
  const [open, setOpen] = useState(false);
  // react-hook-form 사용을 위함
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // 로그인정보 submit
  const onSubmit = data => {
    // 로그인 확인 => 관리자 확인
    // 관리자이면 성공 => 어드민 (회원관리) 이동
    // navigate('/admin/management/userlist');
    // 실패는 모달 open
    setOpen(true);
  };

  // Enter 눌렀을 경우에도 로그인 요청
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      handleSubmit(onSubmit);
    }
  };

  return (
    <Wrapper>
      {open && <AdminLoginModal setOpen={setOpen} />}
      <Container>
        <Logo src="./images/logo_origin.png" alt="login_logo" />
        <LoginText>로그인 후 바로 서비스를 이용하세요.</LoginText>
        <Error>* 관리자 로그인 페이지입니다.</Error>
        <Form onSubmit={handleSubmit(onSubmit)} onKeyPress={onKeyPress}>
          <TextArea>
            <TextField>
              <Label>아이디</Label>
              <Input
                type="text"
                id="userId"
                placeholder="example"
                {...register('userId', {
                  required: '아이디를 입력해주세요.',
                  pattern: {
                    // 한글 입력 x
                    value: /^[a-zA-Z0-9]+$/,
                  },
                })}
              />
            </TextField>
            {errors.userId &&
              (errors.userId.type === 'pattern' ? (
                <Error>아이디 입력이 잘못되었습니다.</Error>
              ) : (
                <Error>아이디를 입력해주세요.</Error>
              ))}
            <TextField>
              <Label>비밀번호</Label>
              <Input
                type="password"
                id="password"
                placeholder="●●●●●●●●●"
                {...register('password', {
                  required: '비밀번호를 입력해주세요.',
                })}
              />
            </TextField>
            {errors.password && <Error>비밀번호를 입력해주세요.</Error>}
          </TextArea>
          <Btn disabled={isSubmitting}>시작하기</Btn>
        </Form>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1f5ff;
  position: fixed;
`;

const Container = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 150px auto 0;
  padding: 0 15px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 320px;
    padding: 0 15px;
  }
`;

const Logo = styled.img`
  width: 180px;
  margin-bottom: 20px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 150px;
  }
`;

const LoginText = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #434343;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;

const TextArea = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const TextField = styled.div`
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  color: #434343;
  border-bottom: 1px solid #d0d0d0;
`;

const Label = styled.p`
  margin-bottom: 8px;
`;

const Input = styled.input`
  outline: none;
  border: 0;
  background-color: transparent;
  color: #434343;
  ::placeholder {
    color: #d9d9d9;
  }
`;

const Error = styled.p`
  color: #d30000;
  margin: 10px 0;
  font-size: 12px;
`;

const Btn = styled.button`
  width: 320px;
  height: 52px;
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.status ? '#2b66f6' : '#fff')};
  border: ${props => (props.status ? '2px solid #2b66f6' : '0')};
  border-radius: 999px;
  background-color: ${props => (props.status ? 'transparent' : '#2b66f6')};
  margin-bottom: ${props => (props.status ? '20px' : '8px')};
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: ${props => (props.status ? 'transparent' : '#164AC9')};
    border: ${props => (props.status ? '2px solid #164AC9' : '0')};
    color: ${props => (props.status ? '#164AC9' : '#fff')};
  }
  @media (max-width: 768px) {
    width: 310px;
    height: 50px;
    font-size: 14px;
  }
`;
