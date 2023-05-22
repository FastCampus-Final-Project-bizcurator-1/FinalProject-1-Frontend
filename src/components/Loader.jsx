import styled from 'styled-components';
import React from 'react';
import ReactLoading from 'react-loading';

export default function Loader() {
  return (
    <Wrapper>
      <Container>
        <Large>
          <ReactLoading type="spin" color="#2b66f6" />
        </Large>
        <Small>로딩 중입니다. 창을 닫지 말아주세요.</Small>
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
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 0;
  border-radius: 10px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 290px;
    height: 150px;
  }
`;

const Large = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 10px;
  padding: 0;
  text-align: center;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Small = styled.p`
  font-size: 13px;
  margin-top: 5px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
