import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { formatNumber } from '../../../helper/formatNumber';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import PaymentComplete from './progressbar/PaymentComplete';
import ShippingInProgress from './progressbar/ShippingInProgress';
import DeliveryComplete from './progressbar/DeliveryComplete';

export default function MyPagePaymentHistoryItem({ paymenthistory }) {
  const { product_name, price, count, created_at, state, imgUrl, number } =
    paymenthistory;
  const navigate = useNavigate();

  const [outerWidth, setOuterWidth] = useState(window.outerWidth);

  useEffect(() => {
    const handleResize = () => {
      setOuterWidth(window.outerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

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
      <Column>
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
                navigate(
                  `/mypage/order/detail/${number}`,
                  (state = { ...paymenthistory })
                )
              }
            >
              주문 상세보기
              <MdOutlineArrowForwardIos />
            </OrderDetail>
            {outerWidth <= 768 ? (
              ''
            ) : (
              <>
                <PaymentComplete state={state} />
                <ButtonContainer>
                  <Button color="#2b66fa">리뷰확인</Button>
                  <Button>장바구니</Button>
                </ButtonContainer>
              </>
            )}
          </ProductInfoContainer>
        </Row2>
      </Column>
      {outerWidth > 768 ? (
        ''
      ) : (
        <Column2>
          {state === '배송완료' ? (
            <DeliveryComplete />
          ) : state === '배송중' ? (
            <ShippingInProgress />
          ) : (
            <PaymentComplete state={state} />
          )}
          <ButtonContainer>
            <Button color="#2b66fa">리뷰확인</Button>
            <Button>장바구니</Button>
          </ButtonContainer>
        </Column2>
      )}
    </Container>
  );
}
const Container = styled.li`
  ${props => props.theme.variables.flex('column', '', 'flex-start')}
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #f5f5f5;
  padding: 25px;
  font-size: 14px;
  transition: height 0.2s ease-in;
  border-radius: 10px;
  margin-bottom: 36px;

  @media (max-width: 1024px) {
    height: 320px;
  }

  @media (max-width: 768px) {
    height: 370px;
  }

  @media (max-width: 480px) {
    height: 315px;
  }
`;

const Column = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'flex-start')}
  position: relative;
  width: 100%;
  margin: ${props => (props.margin ? props.margin : '')};

  @media (max-width: 480px) {
  }
`;

const Column2 = styled.div`
  ${props =>
    props.theme.variables.flex('column', 'space-between', 'flex-start')}
  position: relative;
  width: 100%;
  margin: ${props => (props.margin ? props.margin : '')};
`;

const Row1 = styled.div`
  width: 20%;
  height: auto;

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

const ProductInfoContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  margin : 0 0 0 30px;
`;

const Progressbar = styled.div`
  position: relative;
  width: 88%;
  height: 6px;
  border-radius: 5px;
  background-color: #ffffff;
  margin: 15px auto;
  z-index: 1;

  @media (max-width: 768px) {
    margin: 30px auto 15px;
  }
  @media (max-width: 480px) {
    width: 95%;
  }
`;

const TrackerContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', '')}
`;

const ProgressbarValue = styled.div`
  position: relative;
  width: 50%;
  top: -14px;
  height: 6px;
  border-radius: 5px;
  background-color: #2b66f6;
`;

const ProgressbarValue2 = styled.div`
  position: relative;
  width: 50%;
  top: -14px;
  height: 6px;
  border-radius: 5px;
  background-color: #ffffff;
`;

const ProgressTracker = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #2b66f6;
  top: -4px;
  z-index: 999;
`;
const ProgressTracker2 = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #ffffff;
  top: -4px;
  z-index: 999;
`;
const StateName = styled.div`
  color: #2b66f6;
`;
const StateName2 = styled.div`
  color: #797979;
`;

const ValueContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', '')}
  position: absolute;
  width: 100%;
`;

const PriceContainer = styled.div`
  ${props => props.theme.variables.flex('row', '', 'flex-start')}
`;
const StateContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', '')}
  width: 95%;
  margin: 0 auto;
  font-size: 12px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', '')}
  width: 90%;
  margin: 40px auto;

  @media (max-width: 768px) {
    margin: 20px 30px;
  }
`;
const Button = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: 48%;
  height: 45px;
  border-radius: 20px;
  text-align: center;
  font-size: 16px;
  color: ${props => (props.color ? '#ffffff' : '#434343')};
  line-height: 40px;
  border: 1px solid ${props => (props.color ? props.color : '#d0d0d0')};
  background-color: ${props => (props.color ? props.color : '#f5f5f5')};
  cursor: pointer;
  font-weight: bold;

  @media (max-width: 480px) {
    height: 40px;
    font-size: 10px;
  }
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
