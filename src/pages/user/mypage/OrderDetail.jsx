import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { formatNumber } from '../../../helper/formatNumber';
import { useNavigate } from 'react-router-dom';
import TaxInvoiceModal from './TaxInvoiceModal';

export default function OrderDetail() {
  const [outerWidth, setOuterWidth] = useState(window.outerWidth);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setOuterWidth(window.outerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  function handleToggled() {
    setIsToggled(prev => !prev);
  }

  const { orderNumber } = useParams();
  const Orderinfo = useLocation().state;
  const {
    manager_name,
    product_name,
    count,
    created_at,
    state,
    imgUrl,
    phone_number,
    delivery_address,
    delivery_memo,
    price,
    delivery_charge,
    payment_method,
    installment_option,
  } = Orderinfo;
  const navigate = useNavigate();

  console.log(delivery_memo);
  const date = new Date(created_at);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return (
    <Container>
      {isToggled && <TaxInvoiceModal setIsToggled={setIsToggled} />}
      <Column margin="0 0 60px 0">
        <Title size={32}>주문상세</Title>
      </Column>
      <SubInfo>
        <Text color="#797979" size={14}>
          {orderNumber}
        </Text>
        <Text color="#797979" size={14}>
          {month}.{day} 결제
        </Text>
      </SubInfo>
      <PaymentContainer>
        <Text color="#2b66fa" margin="0 0 15px 5px" size={14}>
          {state}
        </Text>
        <Column2>
          <Row2>
            <Img src={imgUrl} />
          </Row2>
          <Row3>
            <Text size={20} width="100%">
              {product_name}
            </Text>
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
                {count}박스
              </Text>
            </PriceContainer>
            {outerWidth <= 768 ? (
              ''
            ) : (
              <ProductInfoContainer>
                <ButtonContainer>
                  <Button>교환 반품</Button>
                  <VerticalBar />
                  <Button>배송 현황</Button>
                  <VerticalBar />
                  <Button2>재구매</Button2>
                </ButtonContainer>
              </ProductInfoContainer>
            )}
          </Row3>
        </Column2>
        {outerWidth > 768 ? (
          ''
        ) : (
          <ProductInfoContainer>
            <ButtonContainer>
              <Button>교환 반품</Button>
              <VerticalBar />
              <Button>배송 현황</Button>
              <VerticalBar />
              <Button2>재구매</Button2>
            </ButtonContainer>
          </ProductInfoContainer>
        )}
      </PaymentContainer>
      <Column3>
        <Title color="#000000" size={20}>
          배송지 정보
        </Title>
        <HorizonBar />
        <Row1>
          <InfoKey>수령인</InfoKey>
          <InfoValue>{manager_name}</InfoValue>
        </Row1>
        <Row1>
          <InfoKey>휴대폰</InfoKey>
          <InfoValue>{phone_number}</InfoValue>
        </Row1>
        <Row1>
          <InfoKey>배송지</InfoKey>
          <InfoValue>{delivery_address}</InfoValue>
        </Row1>
        <Row1>
          <InfoKey>배송메모</InfoKey>
          <InfoValue>{delivery_memo}</InfoValue>
        </Row1>
      </Column3>
      <Column3>
        <Title color="#000000" size={20} margin="30px 0 0 0">
          결제 정보
        </Title>
        <HorizonBar />
        <Row1>
          <InfoKey>상품가격</InfoKey>
          <InfoValue>{formatNumber(price)}</InfoValue>
        </Row1>
        <Row1>
          <InfoKey>배송비</InfoKey>
          <InfoValue>{delivery_charge}</InfoValue>
        </Row1>
        <Row1>
          <InfoKey>결제수단</InfoKey>
          <InfoValue>
            {payment_method}
            <VerticalBar margin="0 8px" color="#000000" />
            {installment_option}
          </InfoValue>
        </Row1>
        <Row1>
          <InfoKey>총 결제금액</InfoKey>
          <InfoValue>{formatNumber(price * count + delivery_charge)}</InfoValue>
        </Row1>
        <TaxInvoiceButton onClick={handleToggled}>
          <Text color="#2b66fa" weight="bold">
            세금계산서 발행 신청하기
          </Text>
        </TaxInvoiceButton>
      </Column3>
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

const Column2 = styled.div`
  ${props => props.theme.variables.flex('', '', 'flex-start')}
  position: relative;
  width: 100%;
  height: 100%;
  margin: ${props => (props.margin ? props.margin : '')};

  @media (max-width: 480px) {
  }
`;

const Column3 = styled.div`
  ${props => props.theme.variables.flex('column', '', 'flex-start')}
  position: relative;
  width: 100%;
  margin: ${props => (props.margin ? props.margin : '')};
  padding: 10px;

  @media (max-width: 480px) {
  }
`;
const SubInfo = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  width: 100%;
  font-size: 14px;
  padding: 10px;
  color: #797979;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const PriceContainer = styled.div`
  ${props => props.theme.variables.flex('row', '', 'flex-start')}
  width: 100%;
  height: 20%;
`;
const ProductInfoContainer = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'flex-end')}
  width: 100%;
  height: 60%;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Row1 = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'flex-start')}
  width: 100%;
  height: 54px;
  border-bottom: 1px solid #d0d0d0;
`;
const Row2 = styled.div`
  width: 25%;
  height: auto;
  max-width: 200px;
  max-height: 200px;
  @media (max-width: 480px) {
    width: 30%;
  }
`;
const Row3 = styled.div`
  ${props =>
    props.theme.variables.flex('column', 'space-between', 'flex-start')}

  width: 75%;
  height: 100%;

  margin-left: 30px;

  @media (max-width: 768px) {
    height: 100%;
    margin-left: 20px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
  border-radius: 6px;
  margin: ${props => (props.margin ? props.margin : '')};

  @media (max-width: 1024px) {
    height: 100%;
    width: 100%;
  }
`;

const Text = styled.div`
  width: ${props => (props.width ? props.width : '')};
  min-height: 20px;
  font-size: ${props => (props.size ? props.size : 20)}px;
  font-weight: ${props => (props.weight ? props.weight : 500)};
  margin: ${props => (props.margin ? props.margin : '')};
  color: ${props => (props.color ? props.color : '#000000')};

  letter-spacing: -1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: ${props => props.size + 6}px;
    white-space: break-spaces;
  }

  @media (max-width: 480px) {
    font-size: ${props => props.size - 4}px;
    white-space: break-spaces;
  }
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

const HorizonBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: #d0d0d0;
  margin-top: 10px;
`;
const InfoKey = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'center')}
  width: 25%;
  height: 100%;
  font-size: 16px;
  padding: 0 5px;
`;

const InfoValue = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'center')}
  width: 75%;
  height: 100%;
  color: #000000;
  padding: 0 5px;
  font-size: 16px;
`;

const TaxInvoiceButton = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: 100%;
  height: 60px;
  border-radius: 30px;
  border: 2px solid #2b66fa;
  background-color: #f1f5ff;
  cursor: pointer;
  margin-top: 45px;
`;
