import React from 'react';
import styled from 'styled-components';

export default function DeliveryCompletedModal({
  handleCompleted,
  auto_confirmation,
}) {
  function getWeekdayName(date) {}
  const date = new Date(auto_confirmation.replace('T', ''));
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const weekday = () => {
    const day = date.getDay();
    switch (day) {
      case 0:
        return '일';
      case 1:
        return '월';
      case 2:
        return '화';
      case 3:
        return '수';
      case 4:
        return '목';
      case 5:
        return '금';
      case 6:
        return '토';
      default:
        return '';
    }
  };
  return (
    <Wrapper>
      <Container>
        <Large>이미 상품을 받으셨나요?</Large>
        <Small>
          {`${month}월 ${day}일(${weekday()})`} 에 자동으로 배송완료 상태로
          변경됩니다.
        </Small>
        <BtnContainer>
          <Btn>네, 받았어요</Btn>
          <Btn2 onClick={handleCompleted}>아니요</Btn2>
        </BtnContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
`;

const Container = styled.div`
  width: 380px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 0;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 290px;
    height: 150px;
  }
`;

const Large = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin-top: 15px;
  padding: 0;
  text-align: center;
  color: #2b66fa;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Small = styled.p`
  font-size: 13px;
  margin: 5px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const BtnContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  width: 100%;
`;

const Btn = styled.button`
  width: 40%;
  height: 40px;
  font-weight: 600;
  color: #fff;
  border: 0;
  border-radius: 999px;
  background-color: #2b66f6;
  margin: 15px 5px;
  cursor: pointer;
`;

const Btn2 = styled.button`
  width: 40%;
  height: 40px;
  font-weight: 600;
  color: #2b66fa;
  border: 2px solid #2b66fa;
  border-radius: 999px;
  background-color: #ffffff;
  margin: 20px 5px;
  cursor: pointer;
`;
