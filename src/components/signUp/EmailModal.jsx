import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useService } from '../../context/context';

export default function EmailModal({ setOpen, setConfirmEmail, email }) {
  //context API 사용을 위함
  const { service } = useService();
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 인증 번호 확인
  const onSubmit = data => {
    service
      .confirmEmail(email, data.confirmNum)
      .then(res => {
        setConfirmEmail(res.data);
        alert('인증이 완료되었습니다. ');
        setOpen(false);
      })
      .catch(e => alert('인증에 실패하였습니다. 확인 후, 다시 시도해주세요'));
  };

  return (
    <Wrapper>
      <Container>
        <Large>인증메일이 발송되었습니다.</Large>
        <Small>발송된 이메일의 인증번호를 입력해 주세요.</Small>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField>
            <Input
              type="text"
              name="confirmNum"
              {...register('confirmNum', {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                },
              })}
            />
            {errors.confirmNum && <Error>* 영문과 숫자만 입력 가능</Error>}
          </TextField>
          <Btn>인증하기</Btn>
        </Form>
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

const Form = styled.form`
  width: 90%;
  height: 35px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 15px;
`;

const TextField = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #797979;
  border-radius: 10px;
  color: #434343;
  padding: 5px 10px;
  outline: none;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    height: 30px;
  }
`;

const Error = styled.p`
  color: #d30000;
  margin: 8px 0;
  font-size: 12px;
`;

const Btn = styled.button`
  width: 30%;
  height: 35px;
  font-weight: 600;
  color: ${props => (props.status ? '#fff' : '#2b66f6')};
  border: ${props => (props.status ? '0' : '1px solid #2b66f6')};
  border-radius: 999px;
  background-color: ${props => (props.status ? '#2b66f6' : 'transparent')};
  cursor: pointer;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 12px;
    height: 30px;
  }
`;
