import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from 'antd';

export default function PurchaseInquiry() {
  return (
    <Container>
      <Row1>
        <TextContainer>
          <TextContainer1>
            <Text>좋은 제품이 있는데 판매처를 못 찾으셨나요?</Text>
            <Text2>비즈큐레이터에서</Text2>
            <Text2>판매하세요</Text2>
          </TextContainer1>
          <TextContainer2>
            <Text>판매 문의하시면 상품을 등록해드립니다.</Text>
            <Text>비즈큐레이터 회원을 대상으로 상품을 판매해 보세요.</Text>
          </TextContainer2>
        </TextContainer>
        <StyledButton
          shape="round"
          style={{
            color: '#2b66f6',
            backgroundColor: 'white',
            width: 270,
            height: 59,
            fontSize: 18,
          }}
        >
          판매 문의 하러 가기
        </StyledButton>
      </Row1>
      <Row2>
        <ImgContainer>
          <Img src="images/inquiryImage/판매문의.png" />
          <Img src="images/inquiryImage/상품상세.png" />
        </ImgContainer>
      </Row2>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  display: flex;
  width: auto;
  height: 676px;
  background-color: #3e55ef;
  color: #181818;

  @media (max-width: 1024px) {
    justify-content: space-around;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    justify-content: space-around;
    flex-direction: column;
  }
`;

const Row1 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 150px 0 0 200px;
  flex-grow: 1;
`;

const Row2 = styled.div`
  flex-grow: 1;
  position: relative;
`;

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-15%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 30%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  color: white;
  font-family: GmarketSansTTFMedium;

  ${Container}.active & {
    animation: ${fadeInRight} 0.5s linear;
    opacity: 1;
  }

  @media (max-width: 1024px) {
    margin-top: 36px;
    align-items: center;
    width: auto;
    flex-direction: row;
    font-size: 38px;

    ${Container}.active & {
      animation: ${fadeInUp} 0.5s linear;
      opacity: 1;
    }
  }
`;

const TextContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 35px;
`;

const TextContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Text = styled.div`
  font-weight: 300;
  text-align: left;
  font-size: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  @media (max-width: 1024px) {
    font-weight: 500;
    margin-right: 12px;
  }
`;
const Text2 = styled.div`
  font-family: GmarketSansTTFMedium;
  font-weight: 500;
  text-align: left;
  font-size: 42px;
  @media (max-width: 1024px) {
    font-weight: 500;
  }
`;

const StyledButton = styled(Button)`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 80px;
`;

const Img = styled.img``;
