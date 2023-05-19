import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { formatNumber } from '../../../helper/formatNumber';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import PaymentComplete from './progressbar/PaymentComplete';
import ShippingInProgress from './progressbar/ShippingInProgress';
import DeliveryComplete from './progressbar/DeliveryComplete';

export default function MyOrderPaymentHistoryItem({
  paymenthistory,
  handleExchangeToggled,
}) {
  const { product_name, price, count, created_at, imgUrl, number, state } =
    paymenthistory;
  const navigate = useNavigate();

  const date = new Date(created_at);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return (
    <Container>
      <Column>
        <SubInfo>
          <div>{number}</div>
          <div>
            {month}.{day} 결제
          </div>
        </SubInfo>
      </Column>
      <Column margin="20px 0">
        <Row1>
          <Img src={imgUrl} />
        </Row1>
        <Row2>
          <ProductInfoContainer>
            <Text size={20}>{product_name}</Text>
            <PriceContainer>
              <Text width="auto" size={24} weight="bold" margin="10px 0">
                {formatNumber(price)}원
              </Text>
              <Text
                width="auto"
                size={24}
                color="#797979"
                margin="10px 0 10px 10px"
              >
                {' '}
                {count}박스
              </Text>
            </PriceContainer>
            <OrderDetail
              color="#2b66f6"
              size={14}
              weight="bold"
              onClick={() =>
                navigate(`/mypage/order/detail/${number}`, {
                  state: paymenthistory,
                })
              }
            >
              주문 상세보기
              <MdOutlineArrowForwardIos />
            </OrderDetail>
            <br />
            {state === '배송완료' ? (
              <DeliveryComplete />
            ) : state === '배송중' ? (
              <ShippingInProgress />
            ) : (
              <PaymentComplete state={state} />
            )}
          </ProductInfoContainer>
        </Row2>
      </Column>
      <ProductInfoContainer>
        <ButtonContainer>
          <Button onClick={handleExchangeToggled}>교환 반품</Button>
          <VerticalBar />
          <Button
            onClick={() => {
              navigate(`/mypage/order/detail/deliverytatus/${number}`, {
                state: paymenthistory,
              });
            }}
          >
            배송 현황
          </Button>
          <VerticalBar />
          <Button2>재구매</Button2>
        </ButtonContainer>
      </ProductInfoContainer>
    </Container>
  );
}

const Container = styled.li`
  ${props => props.theme.variables.flex('column', '', 'flex-start')}
  position: relative;
  width: 100%;
  height: 350px;
  background-color: #f5f5f5;
  padding: 30px;
  font-size: 14px;
  transition: height 0.2s ease-in;
  border-radius: 10px;
  margin-bottom: 36px;
`;

const Column = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'flex-start')}
  position: relative;
  width: 100%;
  margin: ${props => (props.margin ? props.margin : '')};
`;

const Column2 = styled.div`
  ${props => props.theme.variables.flex('column', 'space-between', 'center')}
  position: relative;
  width: 100%;
  margin: ${props => (props.margin ? props.margin : '')};
`;

const Row1 = styled.div`
  width: 20%;
  height: auto;
  margin-right: 20px;

  @media (max-width: 1024px) {
    width: 25%;
  }
`;
const Row2 = styled.div`
  width: 80%;
  height: auto;

  @media (max-width: 1024px) {
    width: 75%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  margin: ${props => (props.margin ? props.margin : '')};

  @media (max-width: 1024px) {
    height: 100%;
    width: 100%;
  }
`;

const Text = styled.div`
  ${props => props.theme.variables.flex('', '', 'flex-start')}
  display:inline-block;
  width: ${props => (props.width ? props.width : '100%')};
  font-size: ${props => (props.size ? props.size : 20)}px;
  font-weight: ${props => (props.weight ? props.weight : 500)};
  margin: ${props => (props.margin ? props.margin : '')};
  color: ${props => (props.color ? props.color : '#000000')};
  letter-spacing: -1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: ${props => props.size + 5}px;
  }

  @media (max-width: 480px) {
    font-size: ${props => props.size - 2}px;
  }
`;

const SubInfo = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  width: 100%;
  height: 30px;
  font-size: 14px;
  padding: 10px;
  color: #797979;
  margin-bottom: 10px;
`;

const PriceContainer = styled.div`
  ${props => props.theme.variables.flex('row', '', 'flex-start')}
`;

const OrderDetail = styled.div`
  ${props => props.theme.variables.flex('', '', 'flex-start')}
  display:inline-block;
  width: ${props => (props.width ? props.width : '100%')};
  font-size: ${props => (props.size ? props.size : 20)}px;
  font-weight: ${props => (props.weight ? props.weight : 500)};
  margin: ${props => (props.margin ? props.margin : '')};
  color: ${props => (props.color ? props.color : '#000000')};
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: ${props => props.size + 5}px;
  }

  @media (max-width: 480px) {
    font-size: ${props => props.size - 2}px;
  }
`;
const ProductInfoContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  width: 100%;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', 'center')}
  position: relative;
  width: 100%;
  border: 1px solid #d0d0d0;
  border-radius: 4px;

  @media (max-width: 480px) {
    height: 35px;
    font-size: 10px;
  }
`;
const Button = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: 30%;
  height: 45px;
  font-size: 16px;
  color: #434343;
  cursor: pointer;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const Button2 = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: 30%;
  height: 45px;
  font-size: 16px;
  color: #434343;
  cursor: pointer;
  font-weight: bold;

  @media (max-width: 480px) {
    height: 40px;
    font-size: 10px;
  }
`;
const VerticalBar = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${props => (props.color ? props.color : '#d0d0d0')};
  margin: ${props => (props.margin ? props.margin : '')};
`;
