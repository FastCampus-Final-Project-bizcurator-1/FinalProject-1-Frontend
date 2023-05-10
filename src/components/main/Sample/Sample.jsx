import React from 'react';
import styled, { keyframes } from 'styled-components';
import CompanyAdvantages from './CompanyAdvantages';

export default function Sample({ isView }) {
  return (
    <Container>
      <Row1>
        <TextContainer>
          <Text1>비교견적을 확인하셨는데도 망설여지시나요?</Text1>
          <Text2>
            <Bold>샘플</Bold>부터 확인해보세요.
          </Text2>
        </TextContainer>
      </Row1>
      <Row2>
        <AdvantagesContainer>
          <CompanyAdvantages
            isView={isView}
            text="국내생산 고품질"
            delay={1.5}
          />
          <CompanyAdvantages isView={isView} text="합리적인 가격" delay={2} />
          <CompanyAdvantages
            isView={isView}
            text="믿을 수 있는 제조사"
            delay={2.5}
          />
        </AdvantagesContainer>
        <SampleImageContainer>
          <Img src="/images/sample/sample01.png" />
          <ImgDescription>
            일부 상품은 샘플 제공이 어려울 수 있습니다.
          </ImgDescription>
          <ImgHover>
            <HoverImg src="/images/sample/descriptionImg.png" />
          </ImgHover>
        </SampleImageContainer>
      </Row2>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 910px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: auto;
  background-color: #ffffff;
  line-height: 20px;
  font-family: GmarketSansTTFMedium;

  @media (max-width: 480px) {
    height: 700px;
  }
`;

const Row1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Row2 = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 72px 0;

  @media (max-width: 480px) {
    margin: 0;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100px;
  margin: auto;
  font-size: 48px;
  line-height: 52px;
  opacity: 0;

  ${Container}.active & {
    animation: ${fadeInUp} 0.5s linear;
    opacity: 1;
  }
`;

const Text1 = styled.div`
  font-color: #181818;
  font-size: 20px;
  font-weight: 300;
`;
const Text2 = styled.div`
  font-color: #181818;
  font-size: 36px;
  font-weight: bold;
`;

const Bold = styled.span`
  color: #3e55ef;
  font-weight: 700;
`;

const AdvantagesContainer = styled.div`
  width: 720px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ImgDescription = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 16px;
  color: #d0d0d0;
  opacity: 0.9;
  font-weight: 100;
  font-family: 'Noto Sans KR', sans-serif;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const SampleImageContainer = styled.div`
  position: relative;
  width: 480px;
  height: 410px;
  margin: 40px auto 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover ${ImgDescription} {
    display: none;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    margin-top: 0;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;

  @media (max-width: 1024px) {
    width: 80%;
    height: 80%;
  }

  @media (max-width: 480px) {
    top: 20%;
    left: 10%;
    width: 60%;
    height: 60%;
  }
`;

const ImgHover = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 100ms ease-in;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 1024px) {
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
  }

  @media (max-width: 480px) {
    top: 20%;
    left: 20%;
    width: 60%;
    height: 60%;
  }
`;

const HoverImg = styled.img`
  width: 80px;
  height: 144px;
`;
