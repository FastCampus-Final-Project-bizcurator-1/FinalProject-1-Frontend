import React from 'react';
import styled from 'styled-components';
import { BsCheckCircle, BsCheckCircleFill } from 'react-icons/bs';

export default function CheckProduct({
  productId,
  setIsCheck,
  isCheck,
  setLength,
  length,
}) {
  const handleCheck = e => {
    setIsCheck({ ...isCheck, [productId]: !isCheck[productId] });
    if (!isCheck[productId]) {
      setLength(length + 1);
    } else {
      setLength(length - 1);
    }
  };

  return (
    <CheckBtn status={isCheck[productId]} onClick={e => handleCheck(e)}>
      {isCheck[productId] ? <BsCheckCircleFill /> : <BsCheckCircle />}
    </CheckBtn>
  );
}

const CheckBtn = styled.div`
  color: ${props => (props.status ? '#2b66f6' : '#b5cdfa')};
  font-size: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
