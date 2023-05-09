import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      <ImgContainer>
        <Img src="/images/footer_logo.png" />
        <Img2 src="/images/footer_logo_responsive.png" />
      </ImgContainer>
      <FooterInfo>
        <Span>
          개인정보처리방침
          <br />
          (우)04315 서울특별시 용산구 원효로 90길 11 비전포트,1608호
          <br />
          사업자등록번호 495-81-02340
          <br />
          이메일 biz@naver.com
          <br />
        </Span>
        <Span2>@2023 비즈큐레이터 BIZ CURATOR</Span2>
      </FooterInfo>
      <CustomerServiceInfo>
        <CustomerServiceContact>02-9999-2222</CustomerServiceContact>
        <CustomerServiceHours>
          평일: 09:00~17:00 | 점심 11:30~13:00
        </CustomerServiceHours>
      </CustomerServiceInfo>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: auto;
  height: 185px;
  background-color: #2e303c;
  font-size: 12px;
  line-height: 20px;
  color: white;

  @media (max-width: 768px) {
    padding: 35px;
    align-items: stretch;
    flex-direction: column;
  }
`;

const FooterInfo = styled.div`
  flex-grow: 4;
  text-align: left;
`;
const ImgContainer = styled.div`
  position: relative;
  flex-grow: 1;
`;
const Img = styled.img`
  position: relative;
  width: 123.21px;
  height: 51.32px;
  right: -36px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Img2 = styled.img`
  display: none;
  position: relative;
  width: 123.21px;
  height: 51.32px;
  right: -36px;

  @media (max-width: 768px) {
    right: 0;
    width: 140px;
    height: 20px;
    display: inline-block;
  }
`;

const Span = styled.span``;
const Span2 = styled.span`
  position: relative;
  top: 7px;
  font-size: 8px;
  color: rgba(255, 255, 255, 0.5);
`;

const CustomerServiceInfo = styled.div`
  position: relative;
  bottom: -45px;
  margin-right: 50px;
  flex-grow: 1;
  text-align: right;
  @media (max-width: 768px) {
    display: none;
  }
`;
const CustomerServiceContact = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const CustomerServiceHours = styled.div`
  margin-top: 8px;
  font-size: 10px;
  color: #d0d0d0;
`;
