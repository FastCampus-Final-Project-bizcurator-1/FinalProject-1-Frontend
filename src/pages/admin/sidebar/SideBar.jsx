import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Item from './Item';

export default function SideBar() {
  const location = useLocation();

  const [select, setSelect] = useState('userlist');
  const navigate = useNavigate();

  const handleClick = e => {
    const target = e.target.dataset.id;
    setSelect(target);
    if (target) {
      navigate(`/admin/management/${target}`);
    }
  };

  console.log(select);

  // 로그인 페이지 사이드바 숨김
  if (location.pathname === '/admin') {
    return null;
  }

  return (
    <Container>
      <ItemContainer onClick={handleClick}>
        <Item select={select} dataId="userlist" text="회원" />
        <Item select={select} dataId="product" text="상품" />
        <Item select={select} dataId="paymenthistory" text="판매" />
        <Item select={select} dataId="inquiryhistory" text="문의" />
      </ItemContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 94px;
  height: 200px;
  font-size: 16px;
  font-weight: 500;
  top : 15%;
  left: 15%;

  @media (max-width: 1440px) {
    left 10%;
  }

  @media (max-width: 1024px) {
    position: relative;
    width: 100%;
    height: 50px;
    left: 0;
  }
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    flex-direction: row;
  }
`;
