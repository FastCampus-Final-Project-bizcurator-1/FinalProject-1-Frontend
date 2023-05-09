import React from 'react';
import styled, { keyframes } from 'styled-components';
import QnAPanel from './QnAPanel';

export default function FAQ() {
  return (
    <Container>
      <Row1>
        <TextContainer>
          <Text>자주</Text>
          <Text2>문의하시는 질문</Text2>
        </TextContainer>
      </Row1>
      <Row2>
        <AnswerContainer>
          <QnAPanel
            question="지불은 어떻게 하나요?"
            subAnswer="(카드 계산, 세금 계산서 발행 후 지급일 지정 등)"
          >
            <Answer>
              구매사 {'>'} 비즈큐레이터 {'>'} 판매사 순으로 결제를 진행합니다.
              구매 담당자가 희망하는 결제 형태로 진행가능 합니다.
            </Answer>
          </QnAPanel>
          <QnAPanel question="특정 제품만 가능한가요?">
            <Answer>
              저희 판매사로 입점되어 있는 제조사의 상품이 아니더라도 저희가
              보유한 DB로{' '}
              <Bold>어떠한 상품이라도 희망하시는 제품을 찾아 제품</Bold>에 대한
              정보 및 견적 비교 해드립니다.
            </Answer>
          </QnAPanel>
          <QnAPanel question="OEM주문 제조나 PB 제품 생산도 가능한가요?">
            <Answer>
              시중에 판매 중인 제품이 아니더라도 원하는 제품의 규격 및 성분 등
              <Bold>상세 제작 의뢰</Bold>를 해주시면 제조사와 협의 후 제작 진행
              가능합니다.
            </Answer>
          </QnAPanel>
        </AnswerContainer>
      </Row2>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  height: 676px;
  background-color: #f1f5ff;
  font-size: 12px;
  line-height: 20px;
  color: #2b66f6;

  @media (max-width: 1024px) {
    justify-content: space-around;
    flex-direction: column;
  }
  @media (max-width: 480px) {
    height: 800px;
  }
`;

const Row1 = styled.div`
  width: 50%;
  flex-grow: 3;
  @media (max-width: 1024px) {
    width: 80%;
  }
`;
const Row2 = styled.div`
  width: 50%;
  flex-grow: 1;
  @media (max-width: 1024px) {
    width: 80%;
  }
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
  width: 50%;
  margin: auto;
  font-family: GmarketSansTTFMedium;
  font-size: 48px;
  line-height: 52px;
  opacity: 0;

  ${Container}.active & {
    animation: ${fadeInRight} 0.5s linear;
    opacity: 1;
  }
  @media (max-width: 1440px) {
    font-size: 40px;
  }

  @media (max-width: 1024px) {
    margin-top: 36px;
    justify-content: center;
    align-items: center;
    width: auto;
    flex-direction: row;
    font-size: 36px;
    
    ${Container}.active & {
      animation: ${fadeInUp} 0.5s linear;
      opacity: 1;
    }
  }
  @media (max-width: 480px) {
    font-size: 24px;

`;

const Text = styled.div`
  font-weight: 300;
  text-align: left;

  @media (max-width: 1024px) {
    font-weight: 500;
    margin-right: 12px;
  }
`;
const Text2 = styled.div`
  font-weight: bold;
  text-align: left;
  @media (max-width: 1024px) {
    font-weight: 500;
  }
`;

const AnswerContainer = styled.div``;

const Answer = styled.span`
  font-weight: 300;
`;

const Bold = styled.span`
  font-weight: 700;
`;
