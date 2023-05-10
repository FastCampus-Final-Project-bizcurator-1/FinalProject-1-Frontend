import React, { useState } from 'react';
import styled from 'styled-components';

export default function CorporateInfo({ setCorporateData, corporateData }) {
  // 사업자등록번호 확인을 위함
  const [numError, setNumError] = useState(false);
  // 개업일시 확인을 위함
  const [dateError, setDateError] = useState(false);
  // 사업자등록증 첨부 확인
  const [attachFinish, setAttachFinish] = useState(false);
  // 사업자 정보 진위 확인
  const [isVerify, setIsVerify] = useState(false);

  // loginData 설정
  const handleChange = e => {
    isVerify &&
      setCorporateData({ ...corporateData, [e.target.id]: e.target.value });
  };

  // 사업자등록번호 검사
  const validCorporateNumber = e => {
    const reg = /^\d{10}$/;
    const num = parseInt(e.target.value.split('-').join(''));
    if (reg.test(num)) {
      e.target.value = num;
      setNumError(false);
      handleChange(e);
    } else {
      setNumError(true);
    }
    // 자동으로 구분자(-) 추가
    e.target.value = e.target.value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,2})(\d{0,})$/g, '$1-$2-$3')
      .replace(/(-{1,2}$)/g, '');
  };

  // 개업일시 검사
  const validOpeningDate = e => {
    const reg = /^\d{8}$/;
    const date = parseInt(e.target.value.split('-').join(''));
    if (reg.test(date)) {
      e.target.value = date;
      setDateError(false);
      handleChange(e);
    } else {
      setDateError(true);
    }
    // 자동으로 구분자(-) 추가
    e.target.value = e.target.value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,4})(\d{0,2})(\d{0,})$/g, '$1-$2-$3')
      .replace(/(-{1,2}$)/g, '');
  };

  return (
    <Container>
      <Title>사업자 정보</Title>
      <TextField>
        <SubTitle>업체명</SubTitle>
        <Input type="text" id="companyName" onChange={handleChange} />
      </TextField>
      <TextField>
        <SubTitle>사업자등록번호</SubTitle>
        <Input
          type="text"
          id="corporateNumber"
          onChange={validCorporateNumber}
        />
      </TextField>
      {numError && <Error>10자로 이루어진 정확한 번호를 입력해주세요.</Error>}
      <TextField>
        <SubTitle>대표자명</SubTitle>
        <Input type="text" id="ownerName" onChange={handleChange} />
      </TextField>
      <TextField>
        <SubTitle>개업일시 (YYYY-MM-DD)</SubTitle>
        <Input type="text" id="openingDate" onChange={validOpeningDate} />
      </TextField>
      {dateError && <Error>정확한 날짜를 입력해주세요.</Error>}
      <BtnGroup>
        <AttachBtn finish={attachFinish}>
          사업자등록증 첨부
          <Span>(선택)</Span>
        </AttachBtn>
        <CofirmBtn finish={isVerify}>
          사업자 정보 <Span>진위확인</Span>
        </CofirmBtn>
      </BtnGroup>
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
  color: #797979;
  line-height: 1.3;
  margin: 15px auto;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const SubTitle = styled.p`
  margin-bottom: 2px;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 5px;
  border: 0;
  color: #434343;
  border-bottom: 1px solid #d0d0d0;
  line-height: 1.3;
  ::placeholder {
    color: #d9d9d9;
  }
`;

const Error = styled.p`
  color: #d30000;
  margin: 5px 0;
  font-size: 12px;
  line-height: 1.3;
`;

const BtnGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const AttachBtn = styled.button`
  width: 200px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.finish ? '#2B66F6' : 'transparent')};
  border: ${props => (props.finish ? '0' : '2px solid #2B66F6')};
  border-radius: 999px;
  color: ${props => (props.finish ? '#fff' : '#2B66F6')};
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 160px;
    height: 48px;
    flex-direction: column;
    font-size: 12px;
    margin-right: 5px;
  }
`;

const Span = styled.span`
  margin-left: 5px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const CofirmBtn = styled.button`
  width: 200px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.finish ? '#2B66F6' : '#f5f5f5')};
  border: ${props => (props.finish ? '0' : '2px solid #d0d0d0')};
  border-radius: 999px;
  color: ${props => (props.finish ? '#fff' : '#797979')};
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 160px;
    height: 48px;
    font-size: 12px;
    flex-direction: column;
  }
`;
