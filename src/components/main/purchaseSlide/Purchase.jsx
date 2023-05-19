import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from 'antd';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';

export default function SecondArea() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container>
      <TextContainer>
        <Text1>필요한 물품을</Text1>
        <Text2>
          대량으로 <Bold>편리</Bold>하게 구매하는 법
        </Text2>
      </TextContainer>
      <Row1>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'transparent' }}>
              <TabList
                onChange={handleChange}
                TabIndicatorProps={{
                  style: {
                    justifyContent: 'center',
                    backgroundColor: '#2b66f6',
                    height: '3.5px',
                  },
                }}
              >
                <Tab
                  value="1"
                  label="바로 구매하기"
                  style={{
                    color: '#797979',
                    fontFamily: 'Noto Sans KR sans-serif',
                    fontSize: '18px',
                    fontWeight: '700',
                  }}
                />
                <Tab
                  value="2"
                  label="비교견적 받기"
                  style={{
                    color: '#797979',
                    fontFamily: 'Noto Sans KR sans-serif',
                    fontSize: '18px',
                    fontWeight: '700',
                  }}
                />
                <Tab
                  value="3"
                  label="샘플 받아보기"
                  style={{
                    color: '#797979',
                    fontFamily: 'Noto Sans KR sans-serif',
                    fontSize: '18px',
                    fontWeight: '700',
                  }}
                />
                <Tab
                  value="4"
                  label="계약 체결 및 납품"
                  style={{
                    color: '#797979',
                    fontFamily: 'Noto Sans KR sans-serif',
                    fontSize: '18px',
                    fontWeight: '700',
                  }}
                />
              </TabList>
            </Box>
            <TabPanel
              value="1"
              style={{
                gap: 70,
                margin: '20px 0 0 30px',
              }}
            >
              <TabPanelContainer>
                <Img src="images/purchaseSlide/purchase1.png" />
                <TabPanelContainer2>
                  <TextContainer2>
                    <Text3>여럽고 힘들게</Text3>
                    <Text3>구매하지 마세요!</Text3>
                  </TextContainer2>
                  <TextContainer3>
                    <Text4>사이트에서 판매중인 상품을</Text4>
                    <Text4>로그인 하고 바로 이용해 보세요.</Text4>
                  </TextContainer3>
                  <StyledButton
                    shape="round"
                    style={{
                      width: 300,
                      height: 62,
                      color: '#2b66f6',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}
                  >
                    상품 둘러보기
                  </StyledButton>
                </TabPanelContainer2>
              </TabPanelContainer>
            </TabPanel>
            <TabPanel
              value="2"
              style={{
                gap: 70,
                margin: '20px 0 0 30px',
              }}
            >
              <TabPanelContainer>
                <Img src="images/purchaseSlide/purchase2.png" />
                <TabPanelContainer2>
                  <TextContainer2>
                    <Text3>찾고 싶은 상품,</Text3>
                    <Text3>모두 찾아드립니다.</Text3>
                  </TextContainer2>
                  <TextContainer3>
                    <Text4>제품 구매 의뢰만 전달하면</Text4>
                    <Text4>비즈 큐레이터가 알아서 찾아 견적 전달!</Text4>
                  </TextContainer3>
                  <StyledButton
                    shape="round"
                    style={{
                      width: 300,
                      height: 62,
                      color: '#2b66f6',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}
                  >
                    견적 문의하러 가기
                  </StyledButton>
                </TabPanelContainer2>
              </TabPanelContainer>
            </TabPanel>
            <TabPanel
              value="3"
              style={{
                gap: 70,
                margin: '20px 0 0 30px',
              }}
            >
              <TabPanelContainer>
                <Img src="images/purchaseSlide/purchase3.png" />
                <TabPanelContainer2>
                  <TextContainer2>
                    <Text3>견적서를 봐도</Text3>
                    <Text3>구매결정이 어려우시다고요?</Text3>
                  </TextContainer2>
                  <TextContainer3>
                    <Text4>견적서를 받아 본 후에도 결정이 어려우시면</Text4>
                    <Text4>직적 샘플을 확인하고 만족스럽게 구매하세요.</Text4>
                  </TextContainer3>
                  <StyledButton
                    shape="round"
                    style={{
                      width: 300,
                      height: 62,
                      color: '#2b66f6',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}
                  >
                    구매하고 샘플 받아보기
                  </StyledButton>
                </TabPanelContainer2>
              </TabPanelContainer>
            </TabPanel>
            <TabPanel
              value="4"
              style={{
                gap: 70,
                margin: '20px 0 0 30px',
              }}
            >
              <TabPanelContainer>
                <Img src="images/purchaseSlide/purchase4.png" />
                <TabPanelContainer2>
                  <TextContainer2>
                    <Text3>계약 후 납품까지</Text3>
                    <Text3>책임지겠습니다.</Text3>
                  </TextContainer2>
                  <TextContainer3>
                    <Text4>번거로운 제조사와의 계약문제</Text4>
                    <Text4>비즈 큐레이터가 모두 조정해 드립니다</Text4>
                  </TextContainer3>
                  <StyledButton
                    shape="round"
                    style={{
                      width: 300,
                      height: 62,
                      color: '#2b66f6',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}
                  >
                    구매 문의하러 가기
                  </StyledButton>
                </TabPanelContainer2>
              </TabPanelContainer>
            </TabPanel>
          </TabContext>
        </Box>
      </Row1>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  width: auto;
  background-color: #ffffff;
  line-height: 20px;
  margin: 0 0 70px 200px;
`;

const Row1 = styled.div`
  display: flex;
  margin-top: 20px;
`;

const TextContainer = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 48px;
  line-height: 52px;
  color: #181818;
  font-size: 36px;
  font-family: GmarketSansTTFLight;
`;

const TabPanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-top: 10px;
`;

const TabPanelContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 50px;
`;

const TextContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 32px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
`;
const TextContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 17px;
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
`;

const Text1 = styled.div``;
const Text2 = styled.div`
  font-family: GmarketSansTTFMedium;
`;
const Text3 = styled.div``;
const Text4 = styled.div``;

const StyledButton = styled(Button)`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  border: 2px solid #2b66f6;
`;

const Bold = styled.span`
  color: #3e55ef;
`;

const Img = styled.img`
  width: 400px;
`;
