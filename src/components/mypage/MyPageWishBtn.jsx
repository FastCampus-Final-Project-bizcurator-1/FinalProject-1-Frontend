import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';

export default function MyPageWishBtn({ userId, productId }) {
  // 클릭여부
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
    // api 연결 => productId (관심상품 취소/재등록)
    console.log(userId, productId);
  };

  return (
    <Icon onClick={() => handleClick()} status={isClick}>
      <AiFillHeart />
    </Icon>
  );
}

const Icon = styled.div`
  color: ${props => (props.status ? '#d0d0d0' : '#2b66f6')};
  font-size: 20px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
