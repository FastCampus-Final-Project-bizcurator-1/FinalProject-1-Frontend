import React from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function PartnerList() {
  const [outerWidth, setOuterWidth] = useState(window.outerWidth);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.outerWidth);
      setOuterWidth(window.outerWidth);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 800,
    slidesToShow: outerWidth > 1440 ? 5 : outerWidth > 768 ? 4 : 3,
    slidesToScroll: 1,
    variableHeight: true,
    centerMode: true,
    centerPadding: '0px',
    touchThreshold: 20,
  };

  return (
    <Container>
      <Row1>
        <TextContainer>
          <Text fontsize={20} fadeInUp={fadeInUp}>
            합리적인 가격과 좋은 퀄리티의 제품
          </Text>
          <div>
            <Text2 fontsize={36}>
              <Active color="#2B66F6">고객만족을</Active> 추구하는
            </Text2>
            <Text2 fontsize={36}>파트너사와 함께합니다.</Text2>
          </div>
        </TextContainer>
      </Row1>
      <Row2>
        <Slider {...settings}>
          <PartnerLogo>
            <Img src="/images/partnerLogo/마미손.png" />
          </PartnerLogo>
          <PartnerLogo>
            <Img src="/images/partnerLogo/깨끗한나라.png" />
          </PartnerLogo>
          <PartnerLogo>
            <Img src="/images/partnerLogo/samsung.png" />
          </PartnerLogo>
          <PartnerLogo>
            <Img src="/images/partnerLogo/aromatica.png" />
          </PartnerLogo>
          <PartnerLogo>
            <Img src="/images/partnerLogo/코리아e플랫폼.png" />
          </PartnerLogo>
          <PartnerLogo>
            <Img src="/images/partnerLogo/clauman.png" />
          </PartnerLogo>
          <PartnerLogo>
            <Img src="/images/partnerLogo/splas_resom.png" />
          </PartnerLogo>
          <PartnerLogo>
            <Img src="/images/partnerLogo/island_resom.png" />
          </PartnerLogo>
          <PartnerLogo>
            <Img src="/images/partnerLogo/forset_resom.png" />
          </PartnerLogo>
        </Slider>
      </Row2>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 550px;
  background-color: #ffffff;
  font-size: 12px;
  line-height: 20px;
  color: #181818;

  @media (max-width: 768px) {
    width: 768px;
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
  overflow: hidden;
  @media (max-width: 768px) {
    width: 768px;
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
  justify-content: center;
  align-items: center;
  margin: 50px 0 40px 0;

  ${Container}.active & {
    animation: ${fadeInUp} 0.5s linear;
    opacity: 1;
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 370px;
    line-height: 40px;
  }
`;

const Text = styled.span`
  font-size: ${props => props.fontsize}px;
  font-family: 'Noto Sans KR', sans-serif;
  margin-bottom: 38px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Text2 = styled.span`
  display: inline-block;
  font-size: ${props => props.fontsize}px;
  font-family: GmarketSansTTFMedium;
  font-weight: bold;
`;
const Active = styled.span`
  color: ${props => props.color};
`;

const PartnerLogo = styled.div`
  width: calc(768 / 5);
  height: 90px;
  @media (max-width: 1440px) {
    width: calc(1440 / 4);
  }
  @media (max-width: 768px) {
    width: calc(768 / 3);
  }
`;
const Img = styled.img`
  margin: auto;
  @media (max-width: 768px) {
  }
`;
