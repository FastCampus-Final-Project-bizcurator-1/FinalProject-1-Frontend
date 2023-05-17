import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { formatNumber } from '../../helper/formatNumber';

export default function CartCount({
  setProductCount,
  initialCount,
  productPrice,
}) {
  const [count, setCount] = useState(initialCount);
  const [price, setPrice] = useState(productPrice);

  // 장바구니 수량변경
  const handleCount = e => {
    // post => count, productId
    if (e.target.id === 'minus') {
      setCount(initialCount - 1);
      setProductCount(initialCount - 1);
    }
    if (e.target.id === 'plus') {
      setCount(initialCount + 1);
      setProductCount(initialCount + 1);
    }
  };

  // 수량변경에 따른 가격 변경
  useEffect(() => {
    setPrice(count * productPrice);
  }, [productPrice, count]);

  return (
    <Container>
      <Count>
        <Btn id="minus" onClick={e => handleCount(e)}>
          -
        </Btn>
        <Num>{count}</Num>
        <Btn id="plus" onClick={e => handleCount(e)}>
          +
        </Btn>
      </Count>
      <Price>{formatNumber(price)} 원</Price>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
`;

const Count = styled.div`
  width: 120px;
  height: 30px;
  ${props => props.theme.variables.flex('', 'space-around', 'center')};
  border: 1px solid #d0d0d0;
  border-radius: 5px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 100px;
    height: 28px;
  }
  @media (max-width: 480px) {
    width: 85px;
    height: 25px;
  }
`;

const Btn = styled.button`
  font-size: 14px;
  border: 0;
  background-color: transparent;
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Num = styled.div`
  width: 50px;
  height: 100%;
  ${props => props.theme.variables.flex('', 'center', 'center')};
  font-size: 14px;
  border-left: 1px solid #d0d0d0;
  border-right: 1px solid #d0d0d0;
  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #181818;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
