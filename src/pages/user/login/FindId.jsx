import React from 'react';
import styled from 'styled-components';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { useForm } from 'react-hook-form';

export default function FindId() {
  // react-hook-form 사용을 위함
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();

  // 폼 입력 확인
  const watchWriteName = watch('managerName');
  const watchWriteEmail = watch('email');

  // 아이디 찾기 정보 submit
  const onSubmit = data => {
    console.log(data);
    // 메인이동
    alert('입력하신 이메일로 인증 메일이 전송되었습니다.');
  };

  // Enter 눌렀을 경우에도 아이디 찾기 요청
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      handleSubmit(onSubmit);
    }
  };
  return (
    <Wrapper>
      <Title>아이디 찾기</Title>
      <Info>
        가입 시 등록한 성함과 이메일을 알려주시면 <br />
        아이디 찾기를 도와드릴게요.
      </Info>
      <Form onSubmit={handleSubmit(onSubmit)} onKeyPress={onKeyPress}>
        <TextArea>
          <TextField>
            <Label>이름</Label>
            <Input
              type="text"
              id="managerName"
              placeholder="김비즈"
              {...register('managerName', {
                required: '이름을 입력해주세요.',
              })}
            />
          </TextField>
          {errors.managerName && <Error>이름을 입력해주세요.</Error>}
          <TextField>
            <Label>이메일</Label>
            <Input
              type="email"
              id="email"
              placeholder="example@naver.com"
              {...register('email', {
                required: '이메일을 입력해주세요.',
                pattern: {
                  value:
                    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{2,3})(\]?)$/,
                },
              })}
            />
          </TextField>
          {errors.email &&
            (errors.email.type === 'pattern' ? (
              <Error>이메일 형식이 맞지 않습니다.</Error>
            ) : (
              <Error>이메일을 입력해주세요.</Error>
            ))}
        </TextArea>
        <Btn status={watchWriteName && watchWriteEmail} disabled={isSubmitting}>
          인증하기
        </Btn>
      </Form>
      <FindBtn href="/findPw">
        비밀번호 찾기
        <Icon>
          <MdOutlineArrowForwardIos />
        </Icon>
      </FindBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px auto 100px;
  padding: 0 15px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 320px;
  }
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  font-family: GmarketSansTTFMedium;
  color: #2b66f6;
`;

const Info = styled.p`
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  margin: 20px 0;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextArea = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const TextField = styled.div`
  width: 100%;
  font-size: 14px;
  color: #797979;
  margin-bottom: 15px;
`;

const Label = styled.p`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 0;
  border-bottom: 1px solid;
  outline: none;
  ::placeholder {
    color: #d9d9d9;
  }
`;

const Error = styled.p`
  color: #d30000;
  margin: 10px 0 15px;
  font-size: 12px;
`;

const Btn = styled.button`
  width: 100%;
  height: 52px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  border: 0;
  border-radius: 999px;
  background-color: ${props => (props.status ? '#2b66f6' : '#d0d0d0')};
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: ${props => (props.status ? '#164AC9' : '#d0d0d0')};
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const FindBtn = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: #797979;
  border: 0;
  background: transparent;
  cursor: pointer;
  position: relative;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 600;
  }
`;

const Icon = styled.div`
  font-size: 14px;
  position: absolute;
  top: 5%;
  right: -20%;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
