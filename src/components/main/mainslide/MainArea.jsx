import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from 'antd';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

export default function MainArea() {
  return (
    <Carousel
      indicatorIconButtonProps={{
        style: {
          margin: '10px',
          color: '#B5CDFA',
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          border: '2px solid white',
        },
      }}
      indicatorContainerProps={{
        style: {
          textAlign: 'center',
          zIndex: 1,
          marginTop: '-100px',
          position: 'relative',
        },
      }}
    >
      <Paper
        style={{
          positon: 'absolute',
          height: 683,
          backgroundColor: '#f1f5ff',
          color: '#181818',
          boxShadow: 'none',
          borderRadius: '0px',
        }}
      >
        <Row1>
          <TextContainer>
            <TextContainer1>
              <Text1>안전하고 간편한</Text1>
              <Text2>나의 구매 중개사</Text2>
            </TextContainer1>
            <TextContainer2>
              <Text3>유통 마진 거품을 줄여 구매자와 판매자를 잇는</Text3>
              <Text3>C2M서비스 비즈큐레이터</Text3>
            </TextContainer2>
          </TextContainer>
          <StyledButton
            shape="round"
            style={{
              backgroundColor: '#2B66F6',
              width: 300,
              height: 62,
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            가입하고 더 많은 혜택 둘러보기
          </StyledButton>
        </Row1>
        <Row2>
          <Img src="images/slideImage/herobanner.png" />
        </Row2>
      </Paper>
      <Paper
        style={{
          height: 683,
          backgroundColor: '#2B66F6',
          color: '#ffffff',
          boxShadow: 'none',
          borderRadius: '0px',
        }}
      >
        <Row1>
          <TextContainer>
            <TextContainer1>
              <Text1>품질에 자신 있다면</Text1>
              <Text2>고객을 만날 차례에요</Text2>
            </TextContainer1>
            <TextContainer2>
              <Text3>맞춤형 중개로, 판매사와 구매사의 상생을 추구합니다.</Text3>
              <Text3>좋은 제품을 찾는 다양한 고객들이 기다리고 있어요.</Text3>
            </TextContainer2>
          </TextContainer>
          <StyledButton
            shape="round"
            style={{
              backgroundColor: '#f1f5ff',
              width: 300,
              height: 62,
              color: '#2B66F6',
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            판매 문의 하러가기
          </StyledButton>
        </Row1>
        <Row2>
          <Img src="images/slideImage/banner2.png" />
        </Row2>
      </Paper>
      <Paper
        style={{
          height: 683,
          backgroundColor: '#B5CDFA',
          color: '#181818',
          boxShadow: 'none',
          borderRadius: '0px',
        }}
      >
        <Row1>
          <TextContainer>
            <TextContainer1>
              <Text1>내 사업에 딱인 제품</Text1>
              <Text2>어디에서도 못 찾겠다면?</Text2>
            </TextContainer1>
            <TextContainer2>
              <Text3>아직 세상에 없는 제품도</Text3>
              <Text3>비즈큐레이터에서는 제작 가능!</Text3>
            </TextContainer2>
          </TextContainer>
          <StyledButton
            shape="round"
            style={{
              backgroundColor: '#2B66F6',
              width: 300,
              height: 62,
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            주문 제작 하러가기
          </StyledButton>
        </Row1>
        <Row2>
          <Img src="images/slideImage/banner3.png" />
        </Row2>
      </Paper>
    </Carousel>
  );
}

// const Container = styled.section`
//   width: 100vw;
//   height: 676px;
//   background-color: #f1f5ff;
//   color: #181818;
// `;

const Row1 = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  padding-top: 150px;
  flex-grow: 1;
`;

const Row2 = styled.div`
  flex-grow: 1;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const TextContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 35px;
  font-size: 42px;
`;

const TextContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const Text1 = styled.div`
  text-align: left;
  font-family: GmarketSansTTFLight;
  @media (max-width: 1024px) {
    font-weight: 500;
    margin-right: 12px;
  }
`;

const Text2 = styled.div`
  font-family: GmarketSansTTFMedium;
  font-weight: 500;
`;

const Text3 = styled.div`
  font-weight: bold;
  text-align: left;
  font-size: 20px;
  @media (max-width: 1024px) {
    font-weight: 500;
  }
`;

const StyledButton = styled(Button)`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  color: #2b66f6;
`;

const Img = styled.img`
  position: absolute;
  right: 100px;
  bottom: 44px;
  width: 680px;
`;
