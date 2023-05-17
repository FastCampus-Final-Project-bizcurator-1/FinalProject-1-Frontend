import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function OrderDetail() {
  const { orderNumber } = useParams();
  const location = useLocation();
  const { state } = location;

  // const { product_name, price, count, created_at, state, imgUrl, number } =
  //   paymentInfo;

  // const date = new Date(created_at);
  // const month = (date.getMonth() + 1).toString().padStart(2, '0');
  // const day = date.getDate().toString().padStart(2, '0');

  console.log('params : ', orderNumber);
  console.log(state);

  return (
    <Container>
      <Column>
        <Title size={32}>주문상세</Title>
      </Column>
      <Column>
        <SubInfo>
          {/* <div>{number}</div>
          <div>
            {month}.{day} 결제
          </div> */}
        </SubInfo>
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

const Title = styled.div`
  ${props => props.theme.variables.flex('row', '', 'center')}
  font-size: ${props => (props.size ? props.size : 28)}px;
  font-weight ${props => (props.weight ? props.weight : 'bold')};
  margin: ${props => (props.margin ? props.margin : '')};
  color: #2b66fa;
  text-align: left;
  letter-spacing: -1px;
`;
const Column = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  position: relative;
  width: 100%;
  margin: ${props => (props.margin ? props.margin : '')};

  @media (max-width: 480px) {
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
