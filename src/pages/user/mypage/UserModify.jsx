import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import DeleteAccountModal from '../../../components/mypage/userModify/DeleteAccountModal';
import Attach from '../../../components/mypage/userModify/Attach';

export default function UserModify() {
  // 회원정보
  const [userInfo, setUserInfo] = useState();
  // 회원탈퇴모달
  const [accountModal, setAccountModal] = useState(false);
  // 연락처 패턴 확인을 위함
  const [phoneError, setPhoneError] = useState(false);
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
    setValue,
    getValues,
  } = useForm();

  // 회원 정보
  const onSubmit = data => {
    alert('입력한 정보를 저장하시겠습니까?');
    // api 연결
    console.log(data);
    // 새로고침
    // window.location.reload();
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
    } else if (reg2.test(e.target.value)) {
      setPhoneError(false);
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

  // 비밀번호 확인
  const handlePassword = e => {
    if (getValues('password') !== e.target.value) {
      setError('checkPassword');
    } else {
      clearErrors('checkPassword');
    }
  };

  // 로그아웃
  const handleLogout = () => {
    console.log('로그아웃');
    // 로그인정보삭제
    window.location.href = '/';
  };

  return (
    <Wrapper>
      {accountModal && <DeleteAccountModal setAccountModal={setAccountModal} />}
      <Article>회원 정보</Article>
      {/* 회원 id 등 보내주기 */}
      <Attach userInfo={userInfo} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <SubArticle>로그인 정보 수정</SubArticle>
        <TextField>
          <Label>아이디</Label>
          <Input
            type="text"
            id="userId"
            status={true}
            defaultValue="사용자 아이디"
            readOnly
            placeholder="example"
            {...register('userId')}
          />
          <Error status={true}>
            * 아이디는 수정이 <Span>불가합니다.</Span>
          </Error>
        </TextField>
        <TextField>
          <Label>이름</Label>
          <Input
            type="text"
            id="managerName"
            defaultValue="사용자 이름"
            {...register('managerName')}
          />
        </TextField>
        <TextField>
          <Label>연락처</Label>
          <Input
            type="text"
            id="phoneNumber"
            defaultValue="사용자 연락처"
            {...register('phoneNumber')}
            onChange={e => validPhoneNumber(e)}
          />
          {phoneError && (
            <Error>
              * 연락처 형식에 <Span>맞지 않습니다.</Span>
            </Error>
          )}
        </TextField>
        <TextField>
          <Label>이메일</Label>
          <Input
            type="email"
            id="email"
            defaultValue="사용자 이메일"
            {...register('email', {
              pattern: {
                value:
                  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{2,3})(\]?)$/,
              },
            })}
          />
          {errors.email && (
            <Error>
              * 이메일 형식에 <Span>맞지 않습니다.</Span>
            </Error>
          )}
        </TextField>
        <TextField>
          <Label>비밀번호</Label>
          <Input
            type="password"
            id="password"
            defaultValue="사용자 비밀번호"
            {...register('password', {
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,16}$/,
              },
            })}
          />
          {errors.password && (
            <Error>
              * 영문 대/소문자, 숫자, <Span>특수문자 조합 8~16자리</Span>
            </Error>
          )}
        </TextField>
        <TextField>
          <Label>비밀번호 확인</Label>
          <Input
            type="password"
            id="checkPassword"
            {...register('checkPassword')}
            onChange={e => handlePassword(e)}
          />
          {errors.checkPassword && (
            <Error>
              * 비밀번호가 <Span> 일치하지 않습니다.</Span>
            </Error>
          )}
        </TextField>
        <SubmitBtn>저장하기</SubmitBtn>
      </Form>
      <Notice>
        <NoticeLarge>사업자 정보가 변경되셨나요?</NoticeLarge>
        <NoticeSmall>
          카카오톡, 전화 또는 이메일로 비즈큐레이터에 문의해주세요.
        </NoticeSmall>
      </Notice>
      <LogoutBtn onClick={() => handleLogout()}>로그아웃</LogoutBtn>
      <DeleteAccountBtn onClick={() => setAccountModal(true)}>
        회원탈퇴하기
      </DeleteAccountBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 35%;
  ${props => props.theme.variables.flex('column', '', 'center')};
  margin: 30px auto;
  transition: 0.3s ease;
  @media (max-width: 1024px) {
    padding: 0 15px;
    width: 80%;
  }
  @media (max-width: 480px) {
    padding: 0 15px;
    width: 100%;
  }
`;

const Article = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #2b66f6;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Form = styled.form`
  width: 100%;
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')};
`;

const SubArticle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #2b66f6;
  margin-bottom: 20px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TextField = styled.div`
  width: 100%;
  height: 40px;
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
  position: relative;
  margin-bottom: 15px;
`;

const Label = styled.p`
  width: 20%;
  font-size: 14px;
  font-weight: 600;
  color: #797979;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 20%;
    font-size: 12px;
    line-height: 1.5;
  }
`;

const Input = styled.input`
  width: 75%;
  height: 100%;
  padding: 5px;
  font-size: 14px;
  outline: none;
  border: 0;
  border-bottom: 2px solid #d9d9d9;
  color: #797979;
  background-color: transparent;
  ::placeholder {
    color: #d9d9d9;
  }
  &:focus {
    color: ${props => (props.status ? '#797979' : '#2b66f6')};
    border-bottom: ${props =>
      props.status ? '2px solid #d9d9d9' : '2px solid #2b66f6'};
  }
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #2b66f6;
  margin: 20px 0;
  transition: 0.3s ease;
  &:hover {
    background-color: #164ac9;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Notice = styled.div`
  word-break: keep-all;
  width: 100%;
  height: 80px;
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')};
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 0 20px;
  margin: 15px 0 60px;
`;

const NoticeLarge = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #2b66f6;
  margin-bottom: 5px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const NoticeSmall = styled.p`
  line-height: 1.5;
  font-size: 12px;
  color: #797979;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const LogoutBtn = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid #2b66f6;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  color: #2b66f6;
  background-color: #f1f5ff;
  margin-bottom: 20px;
  transition: 0.3s ease;
  &:hover {
    background-color: #b5cdfa;
    border: 1px solid #b5cdfa;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DeleteAccountBtn = styled.button`
  font-size: 14px;
  color: #797979;
  border: 0;
  background-color: transparent;
  margin-bottom: 100px;
  transition: 0.3s ease;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Error = styled.p`
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
  font-size: 10px;
  font-weight: ${props => (props.status ? '600' : '500')};
  color: #d30000;
  position: absolute;
  right: 0;
  bottom: 20%;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    line-height: 1.5;
    ${props => props.theme.variables.flex('column', '', 'flex-end')};
  }
`;

const Span = styled.span`
  margin-left: 5px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
