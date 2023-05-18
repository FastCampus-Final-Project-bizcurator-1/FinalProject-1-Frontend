import React from 'react';
import styled from 'styled-components';

export default function FileModal({ setOpen, setBusinessLicense }) {
  const handleSubmit = e => {
    setBusinessLicense(e.target.value);
    alert('사업자등록증 첨부가 완료되었습니다.');
    setOpen(false);
  };

  return (
    <Wrapper>
      <Container>
        <Large>
          <Span>세금계산서 발행</Span>이 필요하시면
        </Large>
        <Large>사업자등록증을 꼭! 첨부해 주세요.</Large>
        <Small>가입 후 마이페이지에서도 등록이 가능해요.</Small>
        <BtnGroup>
          <Form>
            <Label htmlFor="file">첨부하기</Label>
            <File type="file" id="file" onChange={e => handleSubmit(e)} />
          </Form>
          <Btn onClick={() => setOpen(false)}>나중에하기</Btn>
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

const Span = styled.span`
  color: #2b66f6;
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
  width: 80%;
  height: 35px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 15px;
`;

const Form = styled.form`
  width: 40%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2b66f6;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #2b66f6;
  border-radius: 999px;
  background-color: transparent;
  @media (max-width: 768px) {
    height: 35px;
    font-size: 12px;
  }
`;

const Label = styled.label`
  cursor: pointer;
`;

const File = styled.input`
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

const Btn = styled.button`
  width: 40%;
  height: 40px;
  font-weight: 600;
  color: #797979;
  border: 1px solid #d0d0d0;
  border-radius: 999px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    height: 35px;
    font-size: 12px;
  }
`;
