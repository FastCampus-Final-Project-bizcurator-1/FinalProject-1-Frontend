import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ExchangeModal from './modal/ExchangeModal';
import MyOrderPaymentHistoryItem from './MyOrderPaymentHistoryItem';

export default function MyOrder() {
  const [userInfo, setUserInfo] = useState({});
  const { payment_history } = userInfo;
  const [isTaxToggled, setIsTaxToggled] = useState(false);
  const [isExchangeToggled, setIsExchangeToggled] = useState(false);

  useEffect(() => {
    fetch(`/mock/user/mypage.json`)
      .then(res => res.json())
      .then(data => setUserInfo(data));
  }, []);

  function handleTaxToggled() {
    setIsTaxToggled(prev => !prev);
  }
  function handleExchangeToggled() {
    setIsExchangeToggled(prev => !prev);
  }

  return (
    <Container>
      {isExchangeToggled && (
        <ExchangeModal handleExchangeToggled={handleExchangeToggled} />
      )}
      <Column margin="0 0 60px 0">
        <Title size={32}>내 거래</Title>
      </Column>
      <Column margin="0 0 60px 0">
        <Input placeholder="주문한 상품을 검색해 보세요!" />
      </Column>
      <Column>
        <PaymentHistoryContainer>
          {payment_history ? (
            payment_history?.map((paymenthistory, i) => {
              return (
                <MyOrderPaymentHistoryItem
                  isTaxToggled={isTaxToggled}
                  handleExchangeToggled={handleExchangeToggled}
                  key={i}
                  paymenthistory={paymenthistory}
                />
              );
            })
          ) : (
            <HistoryContainer>
              <Text size={26}>거래내역이 없습니다.</Text>
            </HistoryContainer>
          )}
        </PaymentHistoryContainer>
      </Column>
    </Container>
  );
}
const Container = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  width: 50%;
  font-family: 'Noto Sans KR', sans-serif;
  left: 10%;
  margin: 60px auto;
  padding: 0 10px;

  @media (max-width: 1440px) {
    width: 60%;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 15px;
  }
`;

const PaymentContainer = styled.div`
  ${props => props.theme.variables.flex('column', '', '')}
  position: relative;
  width: 100%;
  height: 260px;
  background-color: #f5f5f5;
  padding: 30px;
  font-size: 14px;
  transition: height 0.2s ease-in;
  border-radius: 10px;
  margin-bottom: 36px;
`;

const Title = styled.div`
  ${props => props.theme.variables.flex('row', '', 'center')}
  font-size: ${props => (props.size ? props.size : 28)}px;
  font-weight ${props => (props.weight ? props.weight : 'bold')};
  margin: ${props => (props.margin ? props.margin : '')};
  color:  ${props => (props.color ? props.color : '#2b66fa')};
  text-align: left;
  letter-spacing: -1px;
`;
const Column = styled.div`
  ${props => props.theme.variables.flex('', 'center', '')}
  position: relative;
  width: 100%;
  margin: ${props => (props.margin ? props.margin : '')};

  @media (max-width: 480px) {
  }
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
  flow-grow: 4;
  border: 1px solid #dadada;
  border-radius: 10px;
  color: #616161;
  font-size: 16px;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
const PaymentHistoryContainer = styled.ul``;
const HistoryContainer = styled.ul`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  position: relative;
  width: 100%;
  height: 200px;
  background-color: #f5f5f5;
  padding: 30x;
  font-size: 14px;
  transition: height 0.2s ease-in;
  border-radius: 10px;
  margin-bottom: 36px;

  @media (max-width: 1024px) {
    height: 150px;
  }

  @media (max-width: 768px) {
    height: 120px;
  }

  @media (max-width: 480px) {
    height: 315px;
  }
`;

const Text = styled.div`
  font-size: ${props => (props.size ? props.size : 20)}px;
  font-weight: 500;
  color: ${props => (props.color ? props.color : '#000000')};
  letter-spacing: -1px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
