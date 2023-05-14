import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SalesItem from './SalesItem';
import BuyItem from './BuyItem';

export default function InquiryHistory() {
  const [inquiry, setInquiry] = useState([]);
  const [select, setSelect] = useState('sale');

  useEffect(() => {
    if (select === 'sale') {
      fetch(`/mock/admin/sales_inquiry.json`)
        .then(res => res.json())
        .then(data => setInquiry(data.sales_inquiry));
    } else {
      fetch(`/mock/admin/buy_inquiry.json`)
        .then(res => res.json())
        .then(data => setInquiry(data.buy_inquiry));
    }
  }, [select]);

  const handleSelect = e => {
    const tagName = e.target.tagName;
    if (tagName === 'div') {
      setSelect(e.target.dataset.id);
    } else {
      setSelect(e.currentTarget.dataset.id);
    }
  };

  console.log(inquiry);
  return (
    <Container>
      <ButtonContainer>
        <Button1
          onClick={handleSelect}
          data-id="sale"
          className={select === 'sale' ? 'active' : ''}
        >
          판매문의
        </Button1>
        <Button2
          onClick={handleSelect}
          data-id="buy"
          className={select === 'buy' ? 'active' : ''}
        >
          견적문의
        </Button2>
      </ButtonContainer>
      <SearchContainer>
        <SelectOption onChange={handleSelect}>
          <option value="company_name">업체명</option>
          <option value="id">아이디</option>
          <option value="status">구분</option>
        </SelectOption>
        <Input />
      </SearchContainer>
      <InquiryContainer>
        <div>
          {inquiry &&
            inquiry.map((e, i) => {
              if (select === 'sale') {
                return <SalesItem inquiry={e} key={i} />;
              } else {
                return <BuyItem inquiry={e} key={i} />;
              }
            })}
        </div>
      </InquiryContainer>
    </Container>
  );
}

const Container = styled.div`
  ${props => props.theme.variables.flex('column', '', 'center')}
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif;
  left: 10%;
  margin-top: 30px;
  background-color: #ffffff;
  padding: 0 10px;

  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`;

const Text = styled.span`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  margin-top: 16px;
  color: #434343;
  letter-spacing: -1px;
`;

const ButtonContainer = styled.div`
  width: 50%;
  height: 40px;
  margin-top: 10px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const Button1 = styled.button`
  width: 50%;
  height: 100%;
  border: 1px solid #2b66f6;
  background-color: #ffffff;
  color: #b5cdfa;
  font-size: 14px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  &.active {
    background-color: #2b66f6;
    color: #ffffff;
  }
`;

const Button2 = styled.button`
  width: 50%;
  height: 100%;
  border: 1px solid #2b66f6;
  background-color: #ffffff;
  color: #b5cdfa;
  font-size: 14px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  &.active {
    background-color: #2b66f6;
    color: #ffffff;
  }
`;
const SearchContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  width: 50%;
  height: 40px;
  margin: 12px 0;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const SelectOption = styled.select`
  width: 20%;
  height: 40px;
  margin-right: 4px;
  color: #616161;
  font-size: 15px;
  border: 1px solid #dadada;
  border-radius: 10px;
  padding: 6px;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 2px;
  }
`;

const Input = styled.input`
  width: 80%;
  height: 40px;
  flow-grow: 4;
  border: 1px solid #dadada;
  border-radius: 10px;
  color: #616161;
  font-size: 15px;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
const InquiryContainer = styled.div`
  width: 50%;
  margin-top: 10px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
