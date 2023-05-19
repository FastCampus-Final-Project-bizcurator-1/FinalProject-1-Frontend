import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { formatNumber } from '../../../helper/formatNumber';
import DeliveryComplete from './progressbar/DeliveryComplete';
import PaymentComplete from './progressbar/PaymentComplete';
import ShippingInProgress from './progressbar/ShippingInProgress';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import DeliveryCompletedModal from './modal/DeliveryCompletedModal';

export default function DeliveryStatus() {
  const { orderNumber } = useParams();
  const Orderinfo = useLocation().state;
  const {
    product_name,
    count,
    state,
    imgUrl,
    delivery_company,
    delivery_number,
    day,
    month,
    price,
    auto_confirmation,
  } = Orderinfo;
  console.log(Orderinfo);
  const [isCompleted, setIsCompleted] = useState(false);
  function handleCompleted() {
    setIsCompleted(prev => !prev);
  }

  function openNewWindow(query) {
    window.open(
      `https://search.naver.com/search.naver?ie=UTF-8&query=${query} 조회`
    );
  }

  return (
    <Container>
      {isCompleted && (
        <DeliveryCompletedModal
          handleCompleted={handleCompleted}
          auto_confirmation={auto_confirmation}
        />
      )}
      <Column margin="0 0 60px 0">
        <Title size={32}>배송 현황</Title>
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
            <Text size={24} width="100%">
              {product_name}
            </Text>
            <PriceContainer>
              <Text width="auto" size={28} weight="bold" margin="10px 0">
                {formatNumber(price)}원
              </Text>
              <Text
                width="auto"
                size={24}
                color="#797979"
                margin="14px 0 10px 10px"
              >
                {count}박스
              </Text>
            </PriceContainer>
          </Row3>
        </Column2>
      </PaymentContainer>
      <Column3>
        <Title color="#000000" size={20} margin="30px 0 0 0">
          배송 현황
        </Title>
        <HorizonBar />
        <Column4>
          {state === '배송완료' ? (
            <DeliveryComplete />
          ) : state === '배송중' ? (
            <ShippingInProgress color="#f1f5ff" />
          ) : (
            <PaymentComplete color="#f1f5ff" state={state} />
          )}
        </Column4>
        <Row1>
          <InfoKey>택배사</InfoKey>
          <InfoValue>{delivery_company}</InfoValue>
        </Row1>
        <Row1>
          <InfoKey>송장번호</InfoKey>
          <InfoValue>{delivery_number}</InfoValue>
          <CopyToClipboard
            text={delivery_number}
            onCopy={() => {
              alert('클립보드에 복사되었습니다.');
            }}
          >
            <Button>복사</Button>
          </CopyToClipboard>
        </Row1>
        <ButtonContainer>
          <CopyToClipboard
            text={delivery_number}
            onCopy={() => {
              alert('클립보드에 송장번호가 복사되었습니다.');
            }}
          >
            <Button2 onClick={() => openNewWindow(delivery_company)}>
              배송조회 하러가기
            </Button2>
          </CopyToClipboard>

          <Button2 color="#2b66fa" onClick={handleCompleted}>
            배송완료 처리하기
          </Button2>
        </ButtonContainer>
      </Column3>
    </Container>
  );
}

const Container = styled.li`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  width: 50%;
  font-family: 'Noto Sans KR', sans-serif;
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

const Column = styled.div`
  ${props => props.theme.variables.flex('', 'center', '')}
  position: relative;
  width: 100%;
  margin: ${props => (props.margin ? props.margin : '')};
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

const Column4 = styled.div`
  ${props => props.theme.variables.flex('column', 'space-between', 'center')}
  position: relative;
  width: 100%;
  margin: 40px 0;
`;

const Row1 = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  position: relative;
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
  ${props => props.theme.variables.flex('column', 'space-around', 'flex-start')}

  width: 80%;
  height: 100%;

  margin-left: 30px;

  @media (max-width: 768px) {
    ${props => props.theme.variables.flex('column', '', 'flex-start')}

    height: 100%;
    margin-left: 20px;
  }
`;

const InfoKey = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'center')}
  width: 25%;
  height: 100%;
  font-size: 16px;
  padding: 0 5px;
  color: #797979;
`;

const InfoValue = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'center')}
  width: 75%;
  height: 100%;
  color: #000000;
  padding: 0 5px;
  font-size: 16px;
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

const PaymentContainer = styled.div`
  ${props => props.theme.variables.flex('column', '', '')}
  position: relative;
  width: 100%;
  height: 270px;
  background-color: #f5f5f5;
  padding: 30px;
  font-size: 14px;
  transition: height 0.2s ease-in;
  border-radius: 10px;
  margin-bottom: 36px;

  @media (max-width: 1024px) {
    height: 270px;
  }
  @media (max-width: 480px) {
    height: 235px;
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

const HorizonBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: #d0d0d0;
  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', '')}
  width: 95%;
  margin: 60px auto;

  @media (max-width: 768px) {
    margin: 10px 30px;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  width: 60px;
  height: 30px;
  background-color: #ffffff;
  color: #797979;
  border: 1px solid #797979;
  border-radius: 4px;
`;

const Button2 = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: 48%;
  height: 60px;
  border-radius: 30px;
  text-align: center;
  font-size: 20px;
  color: ${props => (props.color ? '#ffffff' : '#2b66f6')};
  line-height: 40px;
  border: 1px solid ${props => (props.color ? props.color : '#2b66fa')};
  background-color: ${props => (props.color ? props.color : '#ffffff')};
  cursor: pointer;
  font-weight: bold;
`;
