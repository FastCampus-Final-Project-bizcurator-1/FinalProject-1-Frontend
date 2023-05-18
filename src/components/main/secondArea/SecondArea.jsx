import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function SecondArea() {
  return (
    <Container>
      <Row1>
        <TextContainer>
          <Text1>내 차 살 땐 딜러, 우리가족 여행갈 땐 여행사</Text1>
          <Text2>
            소중한 내 비즈니스를 위한 <Bold>대량구매</Bold>는?
          </Text2>
        </TextContainer>
      </Row1>
      <Row2>
        <ImgContainer>
          <Img src="images/inquiryImage/판매문의.png" />
        </ImgContainer>
        <BoxContainer>
          <Box>
            <BoxTitleContainer>
              <Img src="images/secondareaIcon/buy.png" />
              <BoxTitle>엄격한 검증절차로 선별된 제품들</BoxTitle>
            </BoxTitleContainer>
            <BoxText>
              전국 제조공장 DB를 통해 최소 2개의 제조기업 제품 분석 및
              견적비교를 통하여 우수한 제품만을 선별해드립니다!
            </BoxText>
          </Box>
          <Box>
            <BoxTitleContainer>
              <Img src="images/secondareaIcon/deliver.png" />
              <BoxTitle>구매 담당자 맞춤형 프로세스</BoxTitle>
            </BoxTitleContainer>
            <BoxText>
              구매처 탐색, 제품 정보, 견적 비교, 상품 공급까지 모두 비즈
              큐레이터가 찾고 추천해드립니다!
            </BoxText>
          </Box>
          <Box>
            <BoxTitleContainer>
              <Img src="images/secondareaIcon/sale.png" />
              <BoxTitle>거품은 가라! 제조 원가로 구매!</BoxTitle>
            </BoxTitleContainer>
            <BoxText>
              유통 거품 마진을 제외한 제조 원가로 비즈큐레이터가 중개해
              드립니다!
            </BoxText>
          </Box>
        </BoxContainer>
      </Row2>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  height: 910px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: auto;
  color: #181818;
  background-color: #ffffff;
  line-height: 20px;
`;

const Row1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Row2 = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 70px;
  width: 100%;
  margin: 72px 0;
  font-family: 'Noto Sans KR', sans-serif;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin: auto;
  font-size: 48px;
  line-height: 52px;

  ${Container}.active & {
    animation: ${fadeInUp} 0.5s linear;
    opacity: 1;
  }
`;

const Text1 = styled.div`
  color: #181818;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
`;
const Text2 = styled.div`
  color: #181818;
  font-size: 36px;
  font-weight: 500;
  font-family: GmarketSansTTFMedium;
`;

const Bold = styled.span`
  color: #3e55ef;
`;

const ImgContainer = styled.div``;

const Img = styled.img``;

const BoxContainer = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Box = styled.div`
  height: 140px;
  border: #2b66f6 solid 5px;
  padding: 15px 25px;
  border-radius: 30px;
  align-items: center;
  color: #2b66f6;

  :nth-child(2) {
    background-color: #2b66f6;
    color: white;
  }
`;

const BoxTitleContainer = styled.div`
  position: relatvive;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 10px;
`;

const BoxTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 41px;
`;

const BoxText = styled.div`
  font-size: 15px;
  font-weight: 500;
`;
