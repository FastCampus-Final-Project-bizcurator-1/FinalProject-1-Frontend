import React, { useState } from 'react';
import styled from 'styled-components';
import BuyContent from './Buy';
import SellContent from './Sell';
import FloatingButton from '../../../components/FloatingButton';

function Inquiry() {
  const [activeTab, setActiveTab] = useState('buy');

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <InquiryContainer>
      <Tabs>
        <Nav>
          <NavItem
            className={activeTab === 'buy' ? 'active' : ''}
            onClick={() => handleTabClick('buy')}
          >
            구매문의
          </NavItem>
          <NavItem
            className={activeTab === 'sell' ? 'active' : ''}
            onClick={() => handleTabClick('sell')}
          >
            판매문의
          </NavItem>
        </Nav>
        <Outlet>
          {activeTab === 'buy' ? <BuyContent /> : <SellContent />}
        </Outlet>
      </Tabs>
      <FloatingButton />
    </InquiryContainer>
  );
}

const InquiryContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh; //상단에서 떨어진 정도
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  margin: 0;
  overflow-y: auto;
`;

const Tabs = styled.div`
  width: 80%;
  height: 80%;
  min-height: 400px;
  margin: 3.5rem auto 1.5rem; /* 3.5rem from the top */
  padding: 2rem 1rem;
  color: #e8f0f2;
  border-radius: 0.6rem;

  @media (max-width: 1024px) {
    width: 110%;
    justify-content: space-around;
    flex-direction: column;
    margin-left: -3.5rem;
  }

  @media (max-width: 769px) {
    width: 90%;
    padding: 2rem 1rem;
    margin: 40px auto 1.5rem; /* 40px from the top */
  }
`;

const Nav = styled.ul`
  width: 60%; //가로 조정
  margin: 0 auto 0.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #2b66f6;
  border-radius: 0.73rem;
  padding-left: 0px;

  @media (max-width: 768px) {
    width: 95%; //가로 조정
  }
`;

const NavItem = styled.li`
  width: 50%;
  padding: 1.8rem 1.2rem; //세로 가로 조정
  list-style: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  border-bottom-left-radius: 0.6rem;
  border-top-left-radius: 0.6rem;
  color: #b5cdfa;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    width: 95%; //가로 조정
    font-size: 0.9rem;
  }

  &:nth-child(2) {
    border-radius: 0;
    border-bottom-right-radius: 0.6rem;
    border-top-right-radius: 0.6rem;
  }

  &:hover:not(.active) {
    background: #fff;
    color: #2b66f6;
  }

  &:hover {
    background: #164ac9;
  }

  &.active {
    background: #2b66f6;
    color: #ffffff;
  }
`;

const Outlet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Inquiry;
